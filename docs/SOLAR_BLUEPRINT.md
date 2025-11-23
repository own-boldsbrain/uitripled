# Blueprint Consolidado: Regras de Negócio Solar Project (YSH-B2B)

Este documento consolida as regras de negócio, lógicas de cálculo e estruturas de dados para o dimensionamento e precificação de projetos solares fotovoltaicos (FV) no ecossistema Yello Solar Hub.

## 1. Visão Geral do Domínio

O sistema classifica projetos solares em **Categorias de Porte** baseadas no consumo mensal (kWh) e potência instalada (kWp). Para cada categoria, aplicam-se regras específicas de dimensionamento, perdas e composição de kits.

### 1.1 Categorias de Projeto

| Categoria | Descrição | Consumo Médio (kWh/mês) | Potência Aprox. (kWp) | Público Alvo |
|-----------|-----------|-------------------------|-----------------------|--------------|
| **XPP** | Extra Pequeno Porte | ~150 | ~1 | Residencial Básico |
| **PP** | Pequeno Porte | ~300 | ~2.5 - 3.3 | Residencial / Com. Leve |
| **P** | Pequeno | ~600 | ~5 | Residencial Médio |
| **M** | Médio | ~1.800 | ~15 | Residencial Grande / Com. |
| **GG** | Muito Grande | ~36.000 | ~300 | Industrial Médio |
| **XGG** | Extra Gigante | ~600.000 | ~5.000 | Grandes Usinas |

*(Nota: Categorias G e XG também existem na taxonomia, mas as regras detalhadas focaram nas listadas acima)*

## 2. Lógica de Dimensionamento

O dimensionamento do sistema segue um fluxo lógico baseado no **Consumo**, **Região** e **Nível de Geração (Tier)** desejado.

### 2.1 Níveis de Geração (Tiers)

Os tiers definem o fator de sobredimensionamento do sistema em relação ao consumo atual para cobrir perdas e prever aumentos de demanda.

| Tier | Multiplicador | Objetivo |
|------|---------------|----------|
| **Padrão** | 1.15x | Cobrir perdas básicas (temp, sujeira). |
| **Consciente** | 1.30x | Cobrir variações climáticas e perdas médias. |
| **Moderado** | 1.45x | Preparar para crescimento de consumo. |
| **Acelerado** | 1.60x | Maximizar excedente e compensar flutuações severas. |

### 2.2 Fatores de Perda (Loss Factors)

As perdas são calculadas de forma composta ou aditiva (dependendo da implementação específica, aqui padronizada como soma percentual para simplificação nas regras originais).

*   **Temperatura:** 4%
*   **Sombreamento:** 3%
*   **Sujeira (Soiling):** 3%
*   **Mismatch/LID/DC:** 4%
*   **Total Estimado:** ~14%

### 2.3 Variação Regional

A irradiação e tarifas variam por região, afetando a recomendação do inversor e a estimativa de conta.

*   **Regiões:** Norte, Nordeste, Centro-Oeste, Sudeste, Sul.
*   **Impacto:** Cada categoria possui uma tabela de `InverterKwByRegionAndTier` que dita a potência do inversor necessária para atingir o tier desejado naquela região.

## 3. Estrutura de Dados (Blueprint)

Abaixo, a estrutura de dados unificada para implementação no backend.

```typescript
type Region = "Norte" | "Nordeste" | "CentroOeste" | "Sudeste" | "Sul";
type TierType = "Padrão" | "Consciente" | "Moderado" | "Acelerado";
type CategoryType = "XPP" | "PP" | "P" | "M" | "GG" | "XGG";

interface SolarCategoryConfig {
  category: CategoryType;
  baseConsumptionKwh: number;
  averageBillByRegion: Record<Region, number>;
  inverterKwByRegionAndTier: Record<Region, Record<TierType, number>>;
  servicesAndFees: ServiceFee[];
}

interface ServiceFee {
  name: string;
  cost: number;
  description: string;
}
```

## 4. Regras de Composição de Kit (End-to-End)

A composição do kit é dinâmica baseada na potência do inversor recomendada.

1.  **Painéis:**
    *   Quantidade: `Math.ceil(InverterKw * 2)` (Regra geral simplificada, ajustável por potência do módulo).
    *   Tipo: Mono PERC (400Wp a 550Wp dependendo da categoria).
2.  **Inversor:**
    *   Quantidade: 1 (ou múltiplos para grandes usinas).
    *   Potência: Definida pela tabela `inverterKwByRegionAndTier`.
3.  **Custos:**
    *   Painel: Custo base unitário (ex: R$ 550).
    *   Inversor: Custo base + (Potência * Fator).

## 5. Serviços e Taxas

Cada categoria possui um pacote de serviços associado:

*   **Projeto Elétrico:** Obrigatório. Valor escala com o porte (R$ 1.200 a R$ 15.000+).
*   **Homologação ANEEL:** Taxas administrativas.
*   **Comissionamento:** Testes e start-up.
*   **Monitoramento:** Assinatura de plataforma (12 meses).

## 6. Fluxo de Cálculo (Algoritmo)

1.  **Entrada:** Consumo Médio (kWh), Região, Categoria (ou inferida pelo consumo).
2.  **Seleção de Tier:** Usuário seleciona ou sistema compara todos.
3.  **Cálculo de Energia Bruta:** `Consumo * Multiplicador do Tier`.
4.  **Cálculo de Energia Líquida:** `Energia Bruta * (1 - %Perdas)`.
5.  **Seleção de Equipamento:**
    *   Consultar `inverterKwByRegionAndTier` com Região e Tier.
    *   Obter `RecommendedInverterKw`.
6.  **Geração de BOM (Bill of Materials):**
    *   Executar função `getE2EKitItems(RecommendedInverterKw)`.
7.  **Precificação Final:**
    *   Soma dos Itens do Kit.
    *   Soma dos Serviços e Taxas.
