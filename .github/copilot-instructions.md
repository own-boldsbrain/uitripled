# Instruções do Copilot UI TripleD

Você é um assistente de codificação AI especialista para **UI TripleD**, uma biblioteca de componentes UI pronta para produção construída com Next.js 16, React 19, Tailwind CSS 4 e Framer Motion.

## 🏗 Arquitetura do Projeto

- **Sistema Baseado em Registro**: Este projeto funciona como um registro de componentes (similar ao shadcn/ui).
  - **Fonte da Verdade**: `components/` contém o código real dos componentes.
  - **Definição do Registro**: `registry.json` é o manifesto central, gerado automaticamente.
  - **Ponto de Entrada**: `lib/components-registry.tsx` exporta todos os componentes disponíveis.
  - **Automação**: `scripts/sync-registry.js` analisa `lib/components-registry.tsx` para atualizar `registry.json`.

- **Estrutura de Diretórios**:
  - `app/`: Páginas do Next.js App Router (documentação, construtor, visualizações).
  - `components/`:
    - `motion-core/`: Componentes animados principais.
    - `ui/`: Componentes base shadcn/ui.
    - `builder/`: Componentes para o construtor visual.
  - `lib/`: Utilitários (`utils.ts`, `components-registry.tsx`).
  - `scripts/`: Scripts de build e geração de registro.

## 💻 Fluxo de Desenvolvimento

-- **Servidor de Dev**: Execute `npm run dev` (o servidor de dev local agora escuta na porta 3333). Isso executa automaticamente `npm run generate-scripts` antes de iniciar o Next.js. Você pode substituir a porta com a variável de ambiente PORT ou a flag -p: `PORT=3000 npm run dev` ou `next dev -p 3000`.

- **Adicionando Componentes**:
  1. Crie o arquivo do componente em `components/<categoria>/<nome>.tsx`.
  2. Exporte o componente em `lib/components-registry.tsx`.
  3. Execute `npm run sync-registry` para atualizar `registry.json`.
- **Geração do Registro**: O arquivo `registry.json` é **gerado**. Não edite manualmente a menos que esteja depurando.

## 🧩 Padrões e Convenções de Componentes

- **Estilização**:
  - Use **Tailwind CSS 4** para toda a estilização.
  - Sempre use o utilitário `cn()` de `@/lib/utils` para mesclar classes.
  - Exemplo: `className={cn("bg-primary text-primary-foreground", className)}`

- **Animações**:
  - Use **Framer Motion** (`framer-motion`) para todas as animações.
  - Prefira a prop `layout` para animações de layout.
  - Use `AnimatePresence` para animações de saída.

- **Ícones**:
  - Use **Lucide React** (`lucide-react`) para ícones.

- **React & Next.js**:
  - Use `"use client"` no topo de componentes interativos.
  - Use `useTheme` de `@/components/theme-provider` para lógica de modo escuro.
  - Digite todas as props explicitamente com interfaces/tipos TypeScript.

- **Estrutura de Componente Exemplo**:

  ```tsx
  "use client";

  import { motion } from "framer-motion";
  import { cn } from "@/lib/utils";

  interface MyComponentProps {
    className?: string;
    children: React.ReactNode;
  }

  export function MyComponent({ className, children }: MyComponentProps) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={cn("p-4 rounded-lg border", className)}
      >
        {children}
      </motion.div>
    );
  }
  ```

## 🛠 Detalhes da Pilha Tecnológica

- **Framework**: Next.js 16 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS 4
- **Animação**: Framer Motion
- **Ícones**: Lucide React
- **Arrastar e Soltar**: @dnd-kit
