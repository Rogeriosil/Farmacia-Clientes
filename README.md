# Farmacia-Clientes
Sistema de gerenciamento de clientes com CRUD usando HTML, JavaScript e json-server

📌 Sobre o projeto

Este projeto é um sistema web de cadastro de clientes para uma farmácia.
A aplicação permite:

✅ Listar clientes cadastrados

✅ Cadastrar novo cliente

✅ Buscar cliente pelo nome

✅ Excluir cliente

O front-end foi desenvolvido com HTML, CSS e JavaScript puro, e o back-end é simulado com json-server, fornecendo uma API REST local.

🧰 Tecnologias usadas

HTML5 (estrutura da página)

CSS3 (estilização)

JavaScript (Vanilla JS) (lógica do sistema)

json-server (API REST simulada)

Fetch API (consumo de API)

Async/Await (controle de requisições assíncronas)

📁 Estrutura do projeto

Exemplo de estrutura (pode ajustar de acordo com o seu ZIP):

/projeto-farmacia
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── db.json


index.html → interface do sistema (inputs, botões, lista)

style.css → estilos básicos (margens, fonte, espaçamento)

script.js → lógica do CRUD (GET/POST/DELETE + busca)

db.json → “banco de dados” usado pelo json-server

▶️ Como rodar o projeto (passo a passo)
1) Instalar o json-server

No terminal:

npm install -g json-server

2) Iniciar a API simulada com o db.json

Dentro da pasta do projeto:

json-server --watch db.json --port 3000


✅ Isso cria a API em:

http://localhost:3000/clientes

3) Abrir o front-end

Abra o index.html no navegador

🌐 Endpoints da API (json-server)

A coleção principal é clientes.

GET /clientes → listar todos os clientes

POST /clientes → cadastrar cliente

DELETE /clientes/:id → deletar cliente por id

Exemplo:

GET http://localhost:3000/clientes

DELETE http://localhost:3000/clientes/1

🧠 Lógica do sistema (explicação professor)
✅ Constantes principais
API_URL
const API_URL = "http://localhost:3000/clientes"


Define o endereço base da API.
📌 Tudo que o sistema faz (listar, cadastrar, deletar) acontece usando essa URL.

📌 Funções do projeto (função por função)
1) carregarClientes()

📌 Objetivo: buscar clientes na API e mostrar na tela.

Fluxo:

Faz fetch(API_URL) → busca lista de clientes

Converte resposta em JSON

Chama renderizar(clientes) para exibir no HTML

Pontos importantes:

async + await garantem que o código espere a resposta antes de continuar.

2) renderizar(clientes)

📌 Objetivo: desenhar os clientes na tela dentro da <ul id="lista">.

O que ela faz:

Seleciona a lista com document.getElementById("lista")

Limpa a lista com lista.innerHTML = ""

Para cada cliente:

cria um <li>

adiciona nome + email

adiciona botão Excluir chamando deletarCliente(id)

Insere no HTML com appendChild

📌 Por que limpar antes?
Para evitar duplicar os clientes na tela a cada atualização.

3) adicionarCliente()

📌 Objetivo: cadastrar um novo cliente na API com POST.

Fluxo correto:

Lê nome e email dos inputs

Valida se não estão vazios

Envia POST:

method: "POST"

headers com JSON

body com JSON.stringify({ nome, email })

Limpa inputs

Recarrega lista chamando carregarClientes()

✅ Validação importante
Se nome/email estiverem vazios, mostra alert e interrompe com return.

⚠️ Observação (importante no README):
No seu código original, o fetch POST pode ter ficado fora da função por erro de chave { }.
O certo é que todo o POST fique dentro de adicionarCliente().

4) deletarCliente(id)

📌 Objetivo: remover cliente pelo id usando DELETE.

Fluxo:

Faz:

fetch(`${API_URL}/${id}`, { method: "DELETE" })


Recarrega a lista com carregarClientes()

📌 Assim que o servidor apaga, a UI atualiza.

5) buscarCliente()

📌 Objetivo: filtrar clientes por nome.

Fluxo:

Lê o valor do input #search

Busca todos os clientes na API

Se termo estiver vazio:

mostra todos (renderizar(clientes))

Se tiver termo:

filtra com:

clientes.filter(c => c.nome.toLowerCase().includes(termo))


Renderiza somente filtrados

📌 Por que buscar na API antes?
Para sempre filtrar a lista mais atual.

6) Inicialização
carregarClientes();


📌 Quando o site abre, já lista os clientes automaticamente.

✅ O que eu aprendi / habilidades demonstradas (ótimo para portfólio)

Consumo de API REST com Fetch API

Operações CRUD:

GET (listar)

POST (criar)

DELETE (remover)

Uso de async/await

Manipulação do DOM

Validação de formulário

Organização de código por responsabilidades (UI vs lógica)
