function fazerLogin() {
    let emailUsuario = document.getElementById("emailLogin").value;
    let senhaUsuario = document.getElementById("password").value;

    let dadosLogin = {email: emailUsuario, senha: senhaUsuario};

    if (validarUsuario(dadosLogin)) {
        window.location.href = "msgRecebidas.html";
    } else {
        alert("Dados incorretos! Usuário ou senha inválidos.");
    }

    document.getElementById('login-form').reset();
}
