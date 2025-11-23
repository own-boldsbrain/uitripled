# shadcn registries (consolidado)

Esta pasta contém arquivos JSON individuais para cada registry listado na página "Directory" do shadcn UI.

Origem: https://ui.shadcn.com/docs/directory

Formato: cada arquivo é um objeto JSON com as chaves: handle, name, url, title, description, source.

Campos opcionais:

- `registry.manifestUrl`: URL para o manifesto completo (`registry.json`) hospedado pelo provedor.
- `registry.itemUrlPattern`: template da URL para itens individuais, utilizando `${name}` como placeholder.
- `registry.cliBaseUrl`: endpoint que pode ser registrado em `components.json` para uso com o CLI shadcn.
