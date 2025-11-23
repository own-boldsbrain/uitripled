# Guia de Contribuição

Este guia explica como adicionar novos componentes e blocos ao UITripleD.

## Índice

- [Adicionando um Novo Componente](#adicionando-um-novo-componente)
- [Adicionando um Novo Bloco](#adicionando-um-novo-bloco)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Categorias de Componentes](#categorias-de-componentes)

---

## Adicionando um Novo Componente

Componentes são elementos de UI reutilizáveis organizados por categoria (microinterações, componentes, página, dados, decorativos, blocos).

### Passo 1: Criar Arquivo do Componente

Crie o arquivo do componente no diretório de categoria apropriado:

```
components/{categoria}/{id-componente}.tsx
```

Exemplos:

- `components/micro/buttons/novo-botao.tsx` (para microinterações)
- `components/components/cards/novo-card.tsx` (para componentes)
- `components/sections/nova-secao.tsx` (para blocos)
- `components/motion-core/nova-animacao.tsx` (para componentes motion-core)

**Nota:** O caminho do arquivo deve corresponder à estrutura de categoria e subcategoria do componente.

### Passo 2: Atualizar Registro de Componentes

Edite `lib/components-registry.tsx`:

1. **Importe o componente** no topo:

   ```tsx
   import { NovoComponente } from "@/components/{categoria}/{id-componente}";
   ```

2. **Adicione ao array `componentsRegistry`**:
   ```tsx
   {
     id: "novo-componente",
     name: "Novo Componente",
     description: "Descrição do que este componente faz.",
     category: "components", // ou "microinteractions", "page", "data", "decorative", "blocks"
     tags: ["tag1", "tag2", "tag3"],
     component: NovoComponente,
     codePath: "@/components/{categoria}/{id-componente}.tsx",
     duration: "300ms",
     easing: "easeOut",
     display: true, // Defina como false se o componente precisar de correções ou não estiver pronto
   },
   ```

**Importante:**

- Use kebab-case para `id` (ex.: `novo-componente`)
- Forneça uma `description` clara
- Adicione `tags` relevantes para pesquisabilidade
- Defina `display: false` se o componente precisar de correções ou não estiver pronto para produção
- O `codePath` deve corresponder à localização real do arquivo

### Passo 3: Sincronizar Registro JSON

Execute o script de sincronização para atualizar `registry.json`:

```bash
npm run sync-registry
```

Este script automaticamente:

- Lê componentes de `lib/components-registry.tsx`
- Detecta dependências das importações do componente
- Atualiza `registry.json` com a estrutura correta
- Preserva dependências existentes se elas existirem

**Nota:** O script de sincronização irá automaticamente:

- Mapear categorias para tipos de registro (ex.: `microinteractions` → `registry:ui`)
- Detectar `registryDependencies` de importações `@/components/ui/`
- Detectar `dependencies` externas de pacotes npm
- Definir `category` e `subcategory` apropriados com base no caminho do arquivo

### Passo 4: Verificar

1. Verifique se o componente aparece na lista de componentes
2. Verifique se a página do componente carrega corretamente
3. Teste a funcionalidade do componente
4. Garanta que todas as dependências estejam corretamente listadas em `registry.json`

---

## Adicionando um Novo Bloco

Blocos são seções complexas e ricas em funcionalidades, tipicamente usadas em landing pages (seções hero, tabelas de preços, depoimentos, etc.).

### Passo 1: Criar Arquivo do Bloco

Crie o arquivo do bloco no diretório de seções:

```
components/sections/{id-bloco}.tsx
```

Exemplo: `components/sections/novo-bloco-funcionalidade.tsx`

### Passo 2: Atualizar Registro de Componentes

Edite `lib/components-registry.tsx`:

1. **Importe o bloco** no topo:

   ```tsx
   import { NovoBlocoFuncionalidade } from "@/components/sections/novo-bloco-funcionalidade";
   ```

2. **Adicione ao array `componentsRegistry`** com `category: "blocks"`:
   ```tsx
   {
     id: "novo-bloco-funcionalidade",
     name: "Novo Bloco Funcionalidade",
     description: "Descrição do que este bloco faz.",
     category: "blocks",
     tags: ["funcionalidade", "landing", "secao"],
     component: NovoBlocoFuncionalidade,
     codePath: "@/components/sections/novo-bloco-funcionalidade.tsx",
     duration: "600ms",
     easing: "easeOut",
     display: true,
   },
   ```

### Passo 3: Sincronizar Registro JSON

Execute o script de sincronização:

```bash
npm run sync-registry
```

### Passo 4: Verificar

1. Verifique se o bloco aparece na categoria de blocos
2. Verifique se a página do bloco carrega corretamente
3. Teste a funcionalidade do bloco
4. Garanta que o design responsivo funcione em diferentes tamanhos de tela

---

## Estrutura de Arquivos

```
UITripleD/
├── components/
│   ├── micro/              # Microinterações (botões, toggles, ícones, badges, links)
│   │   ├── buttons/
│   │   ├── toggles/
│   │   ├── icons/
│   │   ├── badges/
│   │   └── links/
│   ├── components/         # Componentes de UI reutilizáveis
│   │   ├── cards/
│   │   ├── chat/
│   │   ├── forms/
│   │   ├── inputs/
│   │   ├── lists/
│   │   ├── modal/
│   │   ├── notifications/
│   │   ├── tabs/
│   │   └── ...
│   ├── sections/          # Seções de blocos (componentes de landing page)
│   ├── motion-core/        # Componentes de movimento avançados
│   ├── navigation/         # Componentes de navegação
│   ├── forms/              # Componentes de formulário
│   ├── modals/             # Componentes de modal
│   ├── tooltips/           # Componentes de tooltip
│   ├── decorative/         # Componentes decorativos (fundos, texto)
│   ├── data/               # Componentes de visualização de dados
│   ├── page/               # Componentes de nível de página
│   └── ui/                 # Componentes de UI base (shadcn/ui)
├── lib/
│   ├── components-registry.tsx   # Metadados e mapeamento de componentes
│   ├── file-reader.ts            # Utilitários de carregamento de código
│   └── utils.ts                   # Funções utilitárias
├── scripts/
│   └── sync-registry.js           # Sincronização automática de registry.json
├── registry.json                  # Configuração de registro shadcn (auto-gerado)
└── types/
    └── index.ts                   # Tipos TypeScript
```

---

## Categorias de Componentes

### Microinterações (`microinteractions`)

Pequenas interações deliciosas para botões, toggles e ícones.

- **Localização:** `components/micro/`
- **Tipo de Registro:** `registry:ui`
- **Exemplos:** Botões magnéticos, efeitos de brilho, badges animados

### Componentes (`components`)

Componentes de UI animados como modais, dropdowns e cards.

- **Localização:** `components/components/`
- **Tipo de Registro:** `registry:component`
- **Exemplos:** Interfaces de chat, cards animados, componentes de formulário

### Página (`page`)

Transições suaves e seções hero para páginas.

- **Localização:** `components/page/` ou `components/sections/`
- **Tipo de Registro:** `registry:page`
- **Exemplos:** Seções hero, revelações de rolagem, transições de página

### Dados (`data`)

Dê vida aos seus dados com contadores, barras de progresso e listas.

- **Localização:** `components/data/`
- **Tipo de Registro:** `registry:ui`
- **Exemplos:** Contadores animados, barras de progresso, gráficos

### Decorativos (`decorative`)

Belos efeitos de texto e fundo.

- **Localização:** `components/decorative/`
- **Tipo de Registro:** `registry:ui`
- **Exemplos:** Animações de gradiente, texto máquina de escrever, efeitos flutuantes

### Blocos (`blocks`)

Seções de blocos reutilizáveis para landing pages e portfólios.

- **Localização:** `components/sections/`
- **Tipo de Registro:** `registry:block`
- **Exemplos:** Blocos hero, seções de preços, depoimentos

---

## Lista de Verificação Rápida

### Para Componentes:

- [ ] Arquivo do componente criado no diretório de categoria apropriado
- [ ] Componente importado em `lib/components-registry.tsx`
- [ ] Adicionado ao array `componentsRegistry` com todos os campos obrigatórios
- [ ] Executado `npm run sync-registry` para atualizar `registry.json`
- [ ] Verificado que o componente aparece na UI
- [ ] Funcionalidade do componente testada
- [ ] Dependências verificadas em `registry.json`

### Para Blocos:

- [ ] Arquivo do bloco criado em `components/sections/`
- [ ] Bloco importado em `lib/components-registry.tsx`
- [ ] Adicionado ao `componentsRegistry` com `category: "blocks"`
- [ ] Executado `npm run sync-registry` para atualizar `registry.json`
- [ ] Verificado que o bloco aparece na categoria de blocos
- [ ] Design responsivo testado
- [ ] Dependências verificadas em `registry.json`

---

## Dicas

1. **Convenção de Nomenclatura:**
   - Use kebab-case para IDs de componentes (ex.: `novo-componente`, `secao-hero`)
   - Use PascalCase para nomes de componentes (ex.: `NovoComponente`, `SecaoHero`)
   - Nomes de arquivos devem corresponder aos IDs de componentes

2. **Dependências:**
   - O script de sincronização detecta automaticamente dependências de importações
   - `registryDependencies` são detectadas de importações `@/components/ui/`
   - `dependencies` externas são detectadas de importações de pacotes npm
   - Sempre verifique dependências após sincronizar

3. **Metadados do Componente:**
   - Forneça campos `description` claros e descritivos
   - Adicione `tags` relevantes para melhor pesquisabilidade
   - Defina `duration` e `easing` apropriados para animações
   - Use `display: false` para componentes que precisam de correções

4. **Qualidade do Código:**
   - Siga as melhores práticas do TypeScript
   - Use padrões adequados do React (hooks, composição)
   - Garanta acessibilidade (rótulos ARIA, navegação por teclado)
   - Suporte a preferências de movimento reduzido quando aplicável
   - Torne componentes responsivos

5. **Teste:**
   - Sempre teste componentes após adicionar
   - Verifique se o componente aparece na UI
   - Teste em diferentes tamanhos de tela
   - Verifique o console do navegador para erros
   - Verifique se as dependências estão corretamente listadas

6. **Script de Sincronização:**
   - Execute `npm run sync-registry` após adicionar novos componentes
   - O script preserva dependências existentes
   - Verifique a saída para avisos ou erros
   - Verifique se `registry.json` foi atualizado corretamente

---

## Detalhes da Sincronização do Registro

O script `sync-registry.js` automaticamente:

1. **Analisa** `lib/components-registry.tsx` para extrair metadados do componente
2. **Detecta** dependências de importações de arquivos de componentes
3. **Mapeia** categorias para tipos de registro:
   - `microinteractions` → `registry:ui`
   - `components` → `registry:component`
   - `page` → `registry:page`
   - `data` → `registry:ui`
   - `decorative` → `registry:ui`
   - `blocks` → `registry:block`
4. **Atualiza** `registry.json` com entradas novas/atualizadas
5. **Preserva** dependências existentes se elas existirem

**Importante:** Sempre execute `npm run sync-registry` após adicionar novos componentes para garantir que `registry.json` fique sincronizado.

---

## Precisa de Ajuda?

Se encontrar problemas:

1. **Verifique componentes existentes** para padrões de referência
2. **Verifique caminhos de arquivo** correspondem ao `codePath` no registro
3. **Garanta tipos TypeScript** correspondem à interface `Component`
4. **Execute o linter** para capturar erros: `npm run lint`
5. **Verifique console do navegador** para erros de runtime
6. **Verifique dependências** estão corretamente listadas em `registry.json`
7. **Teste a saída do script de sincronização** para avisos

---

## Estilo de Código

- Use TypeScript para todos os componentes
- Siga as melhores práticas do React
- Use componentes funcionais com hooks
- Prefira composição sobre herança
- Use nomes significativos para variáveis e funções
- Adicione comentários para lógica complexa
- Mantenha componentes focados e de propósito único

---

## Acessibilidade

Ao criar componentes, considere:

- **Navegação por Teclado:** Garanta que todos os elementos interativos sejam acessíveis por teclado
- **Leitores de Tela:** Adicione rótulos e papéis ARIA apropriados
- **Movimento Reduzido:** Respeite a consulta de mídia `prefers-reduced-motion`
- **Gerenciamento de Foco:** Forneça indicadores de foco visíveis
- **Contraste de Cor:** Garanta proporções de contraste suficientes
- **HTML Semântico:** Use elementos HTML apropriados

---

Obrigado por contribuir com o UITripleD! 🎉
