// Seleciona os elementos
const checkoutButton = document.getElementById('checkout');
const paymentModal = document.getElementById('payment-modal');
const closeModalButton = document.getElementById('close-modal');
const paymentOptions = document.querySelectorAll('.payment-option');
const selectedMethodParagraph = document.getElementById('selected-method');

// Exibe o modal ao clicar em "Finalizar Compra"
checkoutButton.addEventListener('click', () => {
    paymentModal.style.display = 'flex';
});


// Código para Carrinho
const flores = [
    { id: 1, nome: "Antúrio Vermelho", valor: 39.90, descricao: "O antúrio é uma planta tropical com folhas brilhantes e flores em forma de coração, disponível em várias cores. Ideal para a decoração de interiores, melhora a qualidade do ar e se adapta bem a ambientes com iluminação indireta e solo drenado." },
    { id: 2, nome: "Bastão do Imperador", valor: 15.00, descricao: "A planta bastão do imperador possui longas folhas verde-escuras com faixas amarelas e um caule ereto. Adaptada a ambientes internos, prefere luz indireta e requer rega moderada. Além de ser resistente a pragas, é conhecida por suas propriedades de purificação do ar." },
    { id: 3, nome: "Bromélia", valor: 19.00, descricao: "As bromélias são plantas que pertencem à família Bromeliaceae, caracterizadas por suas folhas em roseta, que formam uma estrutura central que retém água. Elas possuem flores vibrantes e são adaptadas a diversos ambientes, desde florestas tropicais até regiões áridas." },
    { id: 4, nome: "Bougainvillea", valor: 19.00, descricao: "A Bougainvillea é uma planta trepadeira com brácteas coloridas que imitam flores e folhas verdes brilhantes. É resistente à seca, tornando-se ideal para jardins em climas tropicais e subtropicais." },
    { id: 5, nome: "Orquídea Oncidium", valor: 89.99, descricao: "A Orquídea Oncidium é conhecida por suas flores pequenas e várias, que normalmente possuem cores vibrantes como amarelo e marrom, além de um perfume doce. É uma planta epífita que se adapta bem a ambientes úmidos e pode florescer várias vezes ao ano." },
    { id: 6, nome: "Orquídea Cattleya", valor: 69.00, descricao: "A Orquídea Cattleya é famosa por suas grandes flores vibrantes e variadas em cores e formas. Além de sua beleza estética, é apreciada pelo aroma marcante e se adapta bem a diferentes ambientes." },
    { id: 7, nome: "Orquídea Cymbidium", valor: 79.99, descricao: "A orquídea Cymbidium é conhecida por suas grandes e vibrantes flores em diversas cores, sendo de fácil cultivo e adaptando-se bem a ambientes internos e externos, preferindo temperaturas amenas e boa luminosidade." },
    { id: 8, nome: "Orquídea Miltonia", valor: 69.99, descricao: "A Orquídea Miltonia é conhecida por suas flores vibrantes..." },
    { id: 10, nome: "Arranjo Antúrio e Pelúcia", valor: 160.00, descricao: "O antúrio é uma planta tropical com folhas brilhantes e flores em forma de coração, disponível em várias cores. Ideal para a decoração de interiores, melhora a qualidade do ar e se adapta bem a ambientes com iluminação indireta e solo drenado." },
    { id: 11, nome: "Bougainvillea e Chocolates", valor: 85.00, descricao: "A planta bastão do imperador possui longas folhas verde-escuras com faixas amarelas e um caule ereto. Adaptada a ambientes internos, prefere luz indireta e requer rega moderada. Além de ser resistente a pragas, é conhecida por suas propriedades de purificação do ar." },
    { id: 12, nome: "Arranjo Hibisco", valor: 90.00, descricao: "As bromélias são plantas que pertencem à família Bromeliaceae, caracterizadas por suas folhas em roseta, que formam uma estrutura central que retém água. Elas possuem flores vibrantes e são adaptadas a diversos ambientes, desde florestas tropicais até regiões áridas." },
    { id: 13, nome: "Arranjo Bastão do Imperador", valor: 100.00, descricao: "A Bougainvillea é uma planta trepadeira com brácteas coloridas que imitam flores e folhas verdes brilhantes. É resistente à seca, tornando-se ideal para jardins em climas tropicais e subtropicais." },
    { id: 14, nome: "Arranjo Alpinia Exuberante", valor: 90.00, descricao: "A Orquídea Oncidium é conhecida por suas flores pequenas e várias, que normalmente possuem cores vibrantes como amarelo e marrom, além de um perfume doce. É uma planta epífita que se adapta bem a ambientes úmidos e pode florescer várias vezes ao ano." },
    { id: 15, nome: "Orquídea Branca e Kit Natura Cereja e Avelã", valor: 150.00, descricao: "A Orquídea Cattleya é famosa por suas grandes flores vibrantes e variadas em cores e formas. Além de sua beleza estética, é apreciada pelo aroma marcante e se adapta bem a diferentes ambientes." },
    { id: 16, nome: "Buquê Orquídea com Cartão Mensagem", valor: 120.00, descricao: "A orquídea Cymbidium é conhecida por suas grandes e vibrantes flores em diversas cores, sendo de fácil cultivo e adaptando-se bem a ambientes internos e externos, preferindo temperaturas amenas e boa luminosidade." },
    { id: 17, nome: "Mini Box Formatura Sucesso", valor: 75.00, descricao: "A Orquídea Miltonia é conhecida por suas flores vibrantes..." },
];

// Função para carregar os itens do carrinho do LocalStorage
function carregarCarrinho() {
    const cartItemsContainer = document.getElementById('cart-items');
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Limpa o conteúdo do contêiner
    cartItemsContainer.innerHTML = '';

    if (carrinho.length === 0) {
        cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        return;
    }

    carrinho.forEach(id => {
        // Localiza a flor correspondente pelo ID
        const flor = flores.find(f => f.id === id);

        if (flor) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            if(flor.id >= 10){
                itemDiv.innerHTML = `
                    <img src="../../flores/Página de Arranjos/img/${flor.nome}.jpg" alt="${flor.nome}" class="item-image">
                    <div class="item-details">
                        <h3>${flor.nome}</h3>
                        <p>${flor.descricao}</p>
                    </div>
                    <div class="item-price">
                        <p>R$ ${flor.valor.toFixed(2)}</p>
                    </div>
                    <hr>
                `;
            } else {
                itemDiv.innerHTML = `
                    <img src="../../../img/${flor.nome}.jpg" alt="${flor.nome}" class="item-image">
                    <div class="item-details">
                        <h3>${flor.nome}</h3>
                        <p>${flor.descricao}</p>
                    </div>
                    <div class="item-price">
                        <p>R$ ${flor.valor.toFixed(2)}</p>
                    </div>
                    <hr>
                `;
            }
            cartItemsContainer.appendChild(itemDiv);
        } else {
            console.warn(`Flor com ID ${id} não encontrada.`);
        }
    });
}



// Chama a função ao carregar a página
window.onload = carregarCarrinho;

// Fecha o modal ao clicar no botão "X"
closeModalButton.addEventListener('click', () => {
    paymentModal.style.display = 'none';
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
    if (event.target === paymentModal) {
        paymentModal.style.display = 'none';
    }
});

// Atualiza o método de pagamento selecionado
paymentOptions.forEach((option) => {
    option.addEventListener('click', () => {
        const method = option.getAttribute('data-method');
        selectedMethodParagraph.textContent = `Método selecionado: ${method}`;
        paymentModal.style.display = 'none'; // Fecha o modal após a seleção
    });
});

 // Seleciona o botão usando seu ID
 const backToTopButton = document.getElementById('backToTop');

 // Adiciona um evento de clique ao botão
 backToTopButton.addEventListener('click', function() {
     // Função para voltar à página anterior
     window.history.back();
 });

// Seleciona o botão de Modo Daltonismo
const daltonismoBtn = document.getElementById('daltonismo-btn');

// Adiciona um evento de clique ao botão
daltonismoBtn.addEventListener('click', () => {
    // Alterna a classe "daltonismo" no elemento <body>
    document.body.classList.toggle('daltonismo');
});