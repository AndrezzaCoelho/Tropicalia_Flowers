// Função para botão "Voltar"
document.addEventListener("DOMContentLoaded", () => {
    const backButtons = document.querySelectorAll(".back-button button");
    backButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Evita comportamento padrão
            if (window.history.length > 1) {
                window.history.back(); // Volta à página anterior
            } else {
                window.location.href = "index.html"; // Redireciona para o Início se não houver histórico
            }
        });
    });

    // Exibe uma mensagem no console como saudação
    console.log("Bem-vindo à página de Política de Privacidade da Tropicália Flowers!");
});

// Adicionar destaque dinâmico ao item ativo do menu
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop(); // Obtém o nome do arquivo atual
    const menuLinks = document.querySelectorAll(".menu a");

    menuLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // Adiciona classe "active" ao link correspondente
        }
    });
});
