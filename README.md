# PublicAndSecureAdmin

Projeto base feito Angular 4 com as seguintes funcionalidades:
- Duas áreas distintas com layouts distintos usando rotas filhas para escolher qual layout utilizar
- Verificação básica de autenticação para a área admin
- Uso do bootstrap... aplicado o exemplo de blog na área pública e o exemplo de dashboard na área de admin

## Como rodar

Baixe a aplicação, instale os pacotes usando npm install e depois rode usando ng serve.

Depois basta navegar para a url `http://localhost:4200/`

## Como publicar

Rode ng build --prod e copie o conteúdo da pasta dist para o servidor web.

Lembre-se de ajustar a tag base no index.html caso a aplicação esteja numa subpasta do servidor.
