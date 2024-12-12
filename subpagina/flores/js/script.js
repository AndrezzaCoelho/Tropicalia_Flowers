// Lista de flores (Exemplo)
const flores = [
    { id: 1, nome: "Antúrio Vermelho", valor: 39.90, descricao: "O antúrio é uma planta tropical com folhas brilhantes e flores em forma de coração, disponível em várias cores. Ideal para a decoração de interiores, melhora a qualidade do ar e se adapta bem a ambientes com iluminação indireta e solo drenado." },
    { id: 2, nome: "Bastão do Imperador", valor: 15.00, descricao: "A planta bastão do imperador possui longas folhas verde-escuras com faixas amarelas e um caule ereto. Adaptada a ambientes internos, prefere luz indireta e requer rega moderada. Além de ser resistente a pragas, é conhecida por suas propriedades de purificação do ar." },
    { id: 3, nome: "Bromélia", valor: 19.00, descricao: "As bromélias são plantas que pertencem à família Bromeliaceae, caracterizadas por suas folhas em roseta, que formam uma estrutura central que retém água. Elas possuem flores vibrantes e são adaptadas a diversos ambientes, desde florestas tropicais até regiões áridas." },
    { id: 4, nome: "Bougainvillea", valor: 19.00, descricao: "A Bougainvillea é uma planta trepadeira com brácteas coloridas que imitam flores e folhas verdes brilhantes. É resistente à seca, tornando-se ideal para jardins em climas tropicais e subtropicais." },
    { id: 5, nome: "Orquídea Oncidium", valor: 89.99, descricao: "A Orquídea Oncidium é conhecida por suas flores pequenas e várias, que normalmente possuem cores vibrantes como amarelo e marrom, além de um perfume doce. É uma planta epífita que se adapta bem a ambientes úmidos e pode florescer várias vezes ao ano." },
    { id: 6, nome: "Orquídea Cattleya", valor: 69.00, descricao: "A Orquídea Cattleya é famosa por suas grandes flores vibrantes e variadas em cores e formas. Além de sua beleza estética, é apreciada pelo aroma marcante e se adapta bem a diferentes ambientes." },
    { id: 7, nome: "Orquídea Cymbidium", valor: 79.99, descricao: "A orquídea Cymbidium é conhecida por suas grandes e vibrantes flores em diversas cores, sendo de fácil cultivo e adaptando-se bem a ambientes internos e externos, preferindo temperaturas amenas e boa luminosidade." },
    { id: 8, nome: "Orquídea Miltonia", valor: 69.99, descricao: "A Orquídea Miltonia é conhecida por suas flores vibrantes..." },
];

function continuarComprando() {
    ("");
    // Caminho para a página desejada (substitua pelo caminho correto)
    window.location.href = "../../../index.html"; // Altere "produtos.html" para o URL desejado

}

// Função para obter o parâmetro 'id' da URL
function obterIdFlor() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id'); // Retorna o valor do parâmetro 'id'
}

// Função para carregar os detalhes da flor
function carregarDetalhesFlor() {
    const idFlor = obterIdFlor(); // Obtém o ID da URL
    if (!idFlor) {
        document.getElementById('flower-details').innerHTML = "<p>ID da flor não especificado.</p>";
        return;
    }

    // Converte o ID para número e busca a flor correspondente
    const flor = flores.find(flor => flor.id === parseInt(idFlor));
    if (!flor) {
        document.getElementById('product-details').innerHTML = "<p>Flor não encontrada.</p>";
        return;
    }

    // Referência ao contêiner 'product-details'
    const detalhesFlor = document.getElementById('product-details');
    const botoes = document.getElementById('button-container');

    // Atualizando ou criando a imagem
    let imagem = detalhesFlor.querySelector('img');
    if (!imagem) {
        imagem = document.createElement('img');
        detalhesFlor.appendChild(imagem);
    }
    imagem.src = `../../../img/${flor.nome}.jpg`; // A imagem é associada ao ID da flor
    imagem.alt = flor.nome; // Descrição alternativa da imagem

    // Atualizando ou criando o título (h1)
    let titulo = detalhesFlor.querySelector('h1');
    if (!titulo) {
        titulo = document.createElement('h1');
        detalhesFlor.appendChild(titulo);
    }
    titulo.textContent = flor.nome; // Atualizando o nome da flor

    // Atualizando as informações da flor (preço e descrição)
    let descricao = detalhesFlor.querySelector('.description');
    if (!descricao) {
        descricao = document.createElement('div');
        descricao.classList.add('description'); // Para facilitar o estilo
        detalhesFlor.appendChild(descricao);
    }
    descricao.innerHTML = `
        <p>Preço: R$${flor.valor.toFixed(2)}</p>
        <p>Descrição: ${flor.descricao}</p>
    `;

    // Criando ou atualizando o botão de adicionar ao carrinho
    let botaoAdicionar = botoes.querySelector('button');
    if (!botaoAdicionar) {
        botaoAdicionar = document.createElement('button');
        botoes.appendChild(botaoAdicionar);
    }
    botaoAdicionar.textContent = "Adicionar ao Carrinho";
    botaoAdicionar.onclick = () => adicionarAoCarrinho(flor.id);
}


// Função para atualizar o contador do carrinho
function atualizarContadorCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    document.getElementById('cart-count').textContent = carrinho.length;
}

// Função para adicionar ao carrinho
function adicionarAoCarrinho(florId) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(florId);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(`A flor foi adicionada ao carrinho!`);
    atualizarContadorCarrinho(); // Atualiza o contador do carrinho
}

// Carregar os detalhes da flor ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    carregarDetalhesFlor();
    atualizarContadorCarrinho(); // Atualiza o contador ao carregar a página
});

// Funções para o controle de quantidade
const itemQuantity = document.getElementById('item-quantity');
document.getElementById('add-item').addEventListener('click', () => {
    itemQuantity.value = parseInt(itemQuantity.value) + 1;
});
document.getElementById('remove-item').addEventListener('click', () => {
    if (parseInt(itemQuantity.value) > 1) {
        itemQuantity.value = parseInt(itemQuantity.value) - 1;
    }
});

// Modo Daltonismo
document.getElementById('daltonismo-btn').addEventListener('click', () => {
    document.body.classList.toggle('daltonismo');
});

// Cálculo de Frete (simples exemplo)
document.getElementById('calculate-freight').addEventListener('click', () => {
    const cep = document.getElementById('cep').value;
    if (cep) {
        alert(`O frete para o CEP ${cep} foi calculado!`);
    } else {
        alert('Por favor, insira um CEP.');
    }
});
