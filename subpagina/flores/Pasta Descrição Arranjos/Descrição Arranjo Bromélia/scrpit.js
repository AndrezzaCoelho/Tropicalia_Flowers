// script.js

// Adiciona evento de clique para o botão "Adicionar ao carrinho"
document.getElementById('add-to-cart').addEventListener('click', function() {
    const quantity = document.getElementById('item-quantity').value;
    alert(`Você adicionou ${quantity} item(s) ao carrinho!`);
});

// Função para continuar comprando
function continuarComprando() {
    // Redireciona ou faz outra ação para continuar comprando
    window.location.href = 'file:///C:/Users/andre/Flores/index.html'; // Substitua pelo seu caminho desejado
}

// Adiciona evento de clique para calcular o frete
document.getElementById('calculate-freight').addEventListener('click', function() {
    const cep = document.getElementById('cep').value;
    if (cep) {
        alert(`Calculando frete para o CEP: ${cep}`);
        // Aqui você pode adicionar lógica para calcular o frete, se necessário
    } else {
        alert('Por favor, digite um CEP válido.');
    }
});

// Exibir botão "Voltar ao topo" quando a página for rolada para baixo
const backToTopButton = document.getElementById('backToTop');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Adiciona evento de clique para o botão "Voltar ao topo"
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rolagem suave
    });
});

// Função para alternar o menu hambúrguer
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
