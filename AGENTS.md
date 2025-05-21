# AGENTS instructions

Este repositório contém exemplos de widgets, layouts e formulários utilizados no treinamento de desenvolvimento WCM do fluig.

## Estrutura principal
- `forms/` guarda exemplos de formulários HTML (ex. `forms/exemplo_soap/exemplo_soap.html`).
- `wcm/layout/` reúne modelos de layout organizados em `src/main/resources` e `src/main/webapp`.
- `wcm/widget/` possui widgets de referência. O `wcm_hello_fluig` traz arquivos ftl, js e css prontos para estudo.

## Navegação
1. Use `ls` e `cd` para explorar cada pasta.
2. Dentro de um widget, verifique `src/main/resources` (i18n, ftl) e `src/main/webapp` (WEB-INF, resources) para ver o código.
3. Consulte `README.md` e o PDF de treinamento para obter mais informações.

## Contribuição
- Preserve a estrutura de pastas apresentada.
- Novos widgets ou layouts devem seguir o mesmo padrão de `src/main/...`.
- Commits devem ser feitos em português e de forma descritiva.
- Não há testes automatizados; não é necessário executar comandos de validação antes de commitar.
