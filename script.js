const API_URL = "http://localhost:3000/clientes";

// =========================
// CARREGAR CLIENTES
// =========================
async function carregarClientes() {
  const res = await fetch(API_URL);
  const clientes = await res.json();
  renderizar(clientes);
}

// =========================
// RENDERIZAR LISTA
// =========================
function renderizar(clientes) {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  clientes.forEach((c) => {
    const li = document.createElement("li");

    // texto do cliente
    li.textContent = `${c.nome} - ${c.email} `;

    // botão excluir
    const btn = document.createElement("button");
    btn.textContent = "Excluir";

    // evento do botão (chama a função de deletar com o id)
    btn.addEventListener("click", () => {
      deletarClientes(c.id);
    });

    // coloca o botão dentro do <li>
    li.appendChild(btn);

    // coloca o <li> dentro da <ul>
    lista.appendChild(li);
  });
}

// =========================
// ADICIONAR CLIENTE (POST)
// =========================
async function adicionarCliente() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();

  // ✅ correção: validação certa (se faltar um dos campos)
  if (!nome || !email) {
    alert("Preencha todos os campos");
    return;
  }

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },

    // ✅ correção: tem que mandar um OBJETO
    body: JSON.stringify({ nome, email }),
  });

  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";

  carregarClientes();
}

// =========================
// DELETAR CLIENTE (DELETE)
// =========================
async function deletarClientes(id) {
  // ✅ correção: método HTTP é "DELETE"
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });

  // ✅ recarrega a lista depois de excluir
  carregarClientes();
}

// =========================
// BUSCAR CLIENTE
// =========================
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

// ✅ inicia carregando a lista
carregarClientes();
