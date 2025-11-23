# Registry Mirror

Artefatos espelhados de registries externos listados em `data/shadcn-registries`.

Este diretório é gerado pelo script `node scripts/mirror-registries.js` e contém:

- `/<handle>/registry.json`: Manifesto completo obtido da URL declarada em `manifestUrl`.
- `/<handle>/items/*.json`: Itens individuais baixados a partir do `itemUrlPattern`.

> **Nota:** Os arquivos são substituídos a cada execução do script. Não edite manualmente.
