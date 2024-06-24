// Array para armazenar os contatos
let contatos = [];

// Função para adicionar um novo contato à tabela
function adicionarContato() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;

    if (nome === '' || telefone === '') {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Verifica se o nome já existe na lista de contatos
    if (contatos.some(contato => contato.nome === nome)) {
        alert("Este nome já está cadastrado na agenda.");
        return;
    }

    // Adiciona o novo contato ao array
    contatos.push({ nome: nome, telefone: telefone });

    // Limpa os campos do formulário após adicionar o contato
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";

    // Atualiza a tabela de contatos
    atualizarTabelaContatos();
}

// Função para atualizar a tabela de contatos com os contatos armazenados no array
function atualizarTabelaContatos() {
    let tabela = document.getElementById("tabelaContatos");

    // Limpa todas as linhas da tabela, exceto a primeira (cabeçalho)
    while (tabela.rows.length > 1) {
        tabela.deleteRow(1);
    }

    // Adiciona os contatos do array à tabela
    contatos.forEach(contato => {
        let novaLinha = tabela.insertRow();
        let celulaNome = novaLinha.insertCell();
        let celulaTelefone = novaLinha.insertCell();
        celulaNome.textContent = contato.nome;
        celulaTelefone.textContent = contato.telefone;
    });
}
