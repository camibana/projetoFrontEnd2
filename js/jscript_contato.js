function mostrarDadosnaTabela() {
    // Pegando os dados iseridos no formulário de contato
    let nomeUsuario = document.getElementById("nome").value;
    let emailUsuario = document.getElementById("email").value;
    let msgUsuario = document.getElementById("mensagem").value;

    // Criando um objeto com os dados inseridos no cadastro do formulário
    let dadosContato = { nome: nomeUsuario, email: emailUsuario, mensagem: msgUsuario };

    inserirMensagem(dadosContato);

    document.getElementById("formularioContato").reset();

}
