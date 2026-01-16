const API_URL = "http://localhost:3000/clientes";

async function carregarClientes() {
  const res = await fetch(API_URL);
  const clientes = await res.json();
  renderizar(clientes);
}

function renderizar(clientes) {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  clientes.forEach((c) => {
    const li = document.createElement("li");

    li.innerHTML = `${c.nome} - ${c.email}
      <button onclick="deletarCliente(${c.id})">Excluir</button>`;

    lista.appendChild(li);
  });
}

async function adicionarCliente() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!nome || !email) {
    alert("Preencha todos os campos");
    return;
  }

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email }),
  });

  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";

  carregarClientes();
}

async function deletarCliente(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  carregarClientes();
}

async function buscarCliente() {
  const termo = document.getElementById("search").value.trim().toLowerCase();

  const res = await fetch(API_URL);
  const clientes = await res.json();

  if (!termo) {
    renderizar(clientes);
    return;
  }

  const filtrados = clientes.filter((c) =>
    (c.nome || "").toLowerCase().includes(termo)
  );

  renderizar(filtrados);
}

carregarClientes();
