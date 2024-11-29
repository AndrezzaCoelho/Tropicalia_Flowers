// Adicionar evento ao botão de busca
document.getElementById("searchButton").addEventListener("click", function() {
    realizarBusca();
  });

  // Permitir busca ao pressionar Enter
  document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      realizarBusca();
    }
  });

  const daltonismoBtn = document.getElementById("daltonismo-btn");

  // Adicionar evento ao botão
  daltonismoBtn.addEventListener("click", () => {
    // Alternar a classe no <body>
    document.body.classList.toggle("body-daltonico");

    // Alterar texto do botão conforme o estado
    if (document.body.classList.contains("body-daltonico")) {
      daltonismoBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Modo Normal';
      daltonismoBtn.setAttribute("aria-label", "Desativar modo para daltônicos");
    } else {
      daltonismoBtn.innerHTML = '<i class="fas fa-eye"></i> Modo Daltônico';
      daltonismoBtn.setAttribute("aria-label", "Ativar modo para daltônicos");
    }
  });

    // Muda o texto do botão com base no estado atual
    if (document.body.classList.contains('daltonismo')) {
        this.innerHTML = '<i class="fas fa-eye-slash"></i> Desativar Modo Daltônico';
    } else {
        this.innerHTML = '<i class="fas fa-eye"></i> Modo Daltônico';
    }

     // Script para alternar o modo daltônico
     const toggleButton = document.getElementById('toggleDaltonismo');
     const body = document.body;

     toggleButton.addEventListener('click', () => {
         body.classList.toggle('daltonismo');
         if (body.classList.contains('daltonismo')) {
             toggleButton.textContent = 'Desativar Modo Daltonismo';
         } else {
             toggleButton.textContent = 'Ativar Modo Daltonismo';
         }
     });




document.getElementById('continue-shopping').addEventListener('click', function() {
    // Redireciona para a página anterior
    window.history.back();
    
    // Se você quiser redirecionar para uma página específica, use:
    // window.location.href = 'sua_pagina.html';
});

// Função chamada quando um produto é selecionado
function selectProduct(product) {
    searchInput.value = product; // Define o valor da pesquisa
    productList.innerHTML = ''; // Limpa a lista após a seleção
}

// Adiciona o evento de entrada no campo de pesquisa
searchInput.addEventListener('input', searchProducts); // Chama a função ao digitar

// Limpa a lista de produtos inicialmente
productList.innerHTML = '';

//menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show'); // Alterna a visibilidade do menu
}

let quantidade = 0; // Variável para controlar a quantidade do item

function alterarQuantidade(valor) {
    const inputQuantidade = document.getElementById('item-quantity');
    let quantidadeAtual = parseInt(inputQuantidade.value) || 0; // Inicializa como 0 se o valor não for um número
    quantidadeAtual += valor;

    if (quantidadeAtual < 1) {
        quantidadeAtual = 1; // A quantidade não pode ser menor que 1
    }

    inputQuantidade.value = quantidadeAtual; // Atualiza o valor no input
}

function aumentarQuantidade() {
    alterarQuantidade(1);
}

function diminuirQuantidade() {
    alterarQuantidade(-1);
}

let itemCount = 0; // Contador de itens no carrinho

function adicionarAoCarrinho() {
    const cor = document.getElementById('flower-color').value; // Obtém a cor do item
    quantidade = parseInt(document.getElementById('item-quantity').value) || 0; // Obtém a quantidade atual

    if (quantidade > 0) {
        itemCount += quantidade; // Incrementa o contador de itens no carrinho pela quantidade selecionada
        updateCartDisplay(); // Atualiza a contagem no carrinho
        alert(`Adicionado ao carrinho: ${quantidade} Antúrio(s) na cor ${cor}.`); // Mensagem de confirmação
    } else {
        alert('Por favor, selecione uma quantidade maior que zero.'); // Mensagem de erro se a quantidade é zero
    }
}

function continuarComprando() {
    alert("Você está retornando à página de compras.");
    const paginaCompras = 'file:///C:/Users/andre/Flores/index.html'; // URL da página de compras

    if (document.referrer) {
        setTimeout(function () {
            window.history.back(); // Volta à página anterior
        }, 1000);
    } else {
        window.location.href = paginaCompras; // Redireciona à página de compras
    }
}

// Controle de quantidade
const removeItemButton = document.getElementById('remove-item');
const addItemButton = document.getElementById('add-item');
const itemQuantityInput = document.getElementById('item-quantity');

removeItemButton.addEventListener('click', () => {
    alterarQuantidade(-1);
});

addItemButton.addEventListener('click', () => {
    alterarQuantidade(1);
});

// Adicionar ao carrinho
const addToCartButton = document.getElementById('add-to-cart');
const itemCountDisplay = document.getElementById('item-count'); // Evitar conflito de nomes com a variável itemCount

addToCartButton.addEventListener('click', () => {
    let quantity = parseInt(itemQuantityInput.value) || 0;
    let currentCount = parseInt(itemCountDisplay.textContent) || 0; // Garantir que seja número
    itemCountDisplay.textContent = currentCount + quantity;
    alert('Item adicionado ao carrinho!');
});

// Seleção de cor
const flowerColorSelect = document.getElementById('flower-color');
flowerColorSelect.addEventListener('change', () => {
    const selectedColor = flowerColorSelect.value;
    console.log(`Cor escolhida: ${selectedColor}`); // Corrigido para usar template string
});

// Cálculo de frete
const calculateFreightButton = document.getElementById('calculate-freight');
const cepInput = document.getElementById('cep');

calculateFreightButton.addEventListener('click', async () => {
    const cep = cepInput.value.trim();
    
    if (isValidCEP(cep)) {
        try {
            const freightValue = calculateFreight(cep); // Simula o cálculo do frete
            const address = await getAddressByCEP(cep);
            alert(`Frete calculado para o CEP: ${cep}.
                  Valor: R$ ${freightValue.toFixed(2)}.
                  Rua: ${address.logradouro}`);
        } catch (error) {
            alert('Erro ao buscar o endereço: ' + error.message);
        }
    } else {
        alert('Por favor, insira um CEP válido.');
    }
});

// Função para validar o CEP
function isValidCEP(cep) {
    const cepPattern = /^\d{5}-?\d{3}$/; // ACEITA: 12345-678 ou 12345678
    return cepPattern.test(cep);
}

// Função simulada para calcular o frete
function calculateFreight(cep) {
    return Math.random() * 50; // Simula um valor de frete entre 0 e 50
}

// Função para buscar endereço pelo CEP
async function getAddressByCEP(cep) {
    if (!isValidCEP(cep)) {
        throw new Error("CEP inválido.");
    }
    
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!response.ok) {
        throw new Error("Erro ao buscar o endereço.");
    }

    const addressData = await response.json();
    return addressData;
}

