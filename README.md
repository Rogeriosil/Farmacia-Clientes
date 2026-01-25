# Farmacia-Clientes
Sistema de gerenciamento de clientes com CRUD usando HTML, JavaScript e json-server

Sistema de Clientes — Farmácia (CRUD)
📌 Sobre o projeto

Neste projeto desenvolvi um sistema web de cadastro de clientes para uma farmácia, com foco em organização, clareza de código e simulação de um cenário real de sistema.

A aplicação permite cadastrar, listar, buscar e excluir clientes, consumindo uma API REST simulada com json-server. O objetivo foi praticar consumo de API, manipulação do DOM e boas práticas em JavaScript puro.

🧰 Tecnologias utilizadas

HTML5 — estrutura da aplicação

CSS3 — estilização da interface

JavaScript (Vanilla JS) — lógica do sistema

json-server — simulação de back-end / API REST

Fetch API — comunicação com a API

Async/Await — controle de operações assíncronas

📁 Estrutura do projeto
projeto-farmacia/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── db.json


index.html → estrutura da interface

style.css → estilos e layout

script.js → regras de negócio e lógica do CRUD

db.json → base de dados utilizada pelo json-server

▶️ Como executar o projeto
1️⃣ Instalar o json-server
npm install -g json-server

2️⃣ Iniciar a API simulada
json-server --watch db.json --port 3000


A API ficará disponível em:

http://localhost:3000/clientes

3️⃣ Abrir o front-end

Abrir o arquivo index.html no navegador.

🌐 Endpoints utilizados

GET /clientes → lista todos os clientes

POST /clientes → cadastra um novo cliente

DELETE /clientes/:id → remove um cliente pelo ID

Esses endpoints simulam o funcionamento de uma API REST real.

🧠 Lógica da aplicação (explicação técnica)
📌 Variável de configuração
API_URL
const API_URL = "http://localhost:3000/clientes"


Essa constante define o endereço base da API. Todas as requisições do sistema utilizam essa URL.

📌 Funções do sistema
carregarClientes()

Essa função é responsável por buscar os clientes cadastrados na API e exibi-los na interface.

Fluxo:

Realiza uma requisição GET usando fetch

Converte a resposta para JSON

Envia os dados para a função renderizarClientes()

Utilizo async/await para garantir que os dados sejam carregados antes da renderização.

renderizarClientes(clientes)

Essa função cuida exclusivamente da atualização da interface.

O que ela faz:

Limpa a lista atual de clientes

Percorre o array recebido

Cria dinamicamente os elementos HTML (li, button)

Insere os dados na tela

A separação dessa função facilita manutenção e evita duplicação de código.

adicionarCliente()

Essa função é responsável pelo cadastro de novos clientes.

Passos:

Captura os valores dos inputs

Valida se os campos não estão vazios

Envia os dados para a API usando POST

Limpa os campos do formulário

Atualiza a lista chamando carregarClientes()

Essa validação evita o envio de dados inconsistentes.

deletarCliente(id)

Essa função remove um cliente específico.

Fluxo:

Envia uma requisição DELETE para o endpoint /clientes/:id

Após a exclusão, atualiza a lista automaticamente

Esse comportamento garante sincronização entre front-end e back-end.

buscarCliente()

Essa função permite filtrar clientes pelo nome.

Funcionamento:

Lê o valor digitado no campo de busca

Busca todos os clientes na API

Filtra o resultado usando includes() e toLowerCase()

Renderiza apenas os clientes correspondentes

Essa abordagem garante que o filtro seja feito sempre sobre os dados atualizados.

🚀 Inicialização da aplicação
carregarClientes();


Ao abrir o site, a lista de clientes é carregada automaticamente.

✅ Conceitos aplicados no projeto

Consumo de API REST

Operações CRUD (GET, POST, DELETE)

Manipulação do DOM

Validação de formulários

Organização de código

Separação de responsabilidades

Programação assíncrona com JavaScript

📌 Possíveis melhorias futuras

Implementação de edição de cliente (PUT / PATCH)

Validação de email mais robusta

Tratamento de erros com try/catch

Feedback visual de sucesso/erro

Paginação de resultados

Integração com back-end real

📎 Observação
Este projeto foi desenvolvido com foco em aprendizado e simulação de um sistema real. Para uso em produção, seria necessária a implementação de um back-end seguro e validações adicionais.
