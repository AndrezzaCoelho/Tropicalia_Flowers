// Função de login
function entrar() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar se os campos estão preenchidos
    if (!username || !password) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Simulação de autenticação (substitua com uma lógica real, como consulta a um banco de dados)
    const usuariosValidos = [
        { username: "admin", password: "1234" },
        { username: "usuario", password: "senha123" }
    ];

    const usuarioEncontrado = usuariosValidos.find(user => user.username === username && user.password === password);

    if (usuarioEncontrado) {
        alert(`Bem-vindo(a), ${username}!`);
        window.location.href = "../pagina-principal/index.html"; // Redireciona para a página principal
    } else {
        alert("Usuário ou senha inválidos. Tente novamente.");
    }
}
