// Adicionar funcionalidade ao botão "Voltar"
document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.querySelector(".back-button button");
    if (backButton) {
        backButton.addEventListener("click", (event) => {
            event.preventDefault(); // Previne comportamento padrão do botão
            if (window.history.length > 1) {
                window.history.back(); // Retorna à página anterior
            } else {
                window.location.href = "index.html"; // Redireciona para a página inicial, se não houver histórico
            }
        });
    }

    // Exibir mensagem no console para depuração
    console.log("Bem-vindo à página de Termos de Uso da Tropicália Flowers!");
});

// Destaque dinâmico no menu de navegação
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop(); // Obtém o nome do arquivo atual
    const menuLinks = document.querySelectorAll(".menu a");

    menuLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // Adiciona a classe "active" ao link correspondente
        }
    });
});
