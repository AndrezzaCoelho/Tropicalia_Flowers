// -------- Botão "Continuar Comprando" --------
// Função para continuar comprando (redireciona para uma página específica)
function continuarComprando() {
    ("");
    // Caminho para a página desejada (substitua pelo caminho correto)
    window.location.href = "../../index.html"; // Altere "produtos.html" para o URL desejado

}

// Função para o botão "Voltar"
document.getElementById("continue-shopping").addEventListener("click", () => {
    // Verifica se há uma página anterior no histórico
    if (document.referrer) {
        window.history.back(); // Volta para a página anterior
    } else {
        // Redireciona para uma página específica se não houver histórico
        window.location.href = "index.html"; // Substitua "index.html" pelo caminho desejado
    }
});


// Ligação automática no carregamento (opcional, caso queira usar sem inline JS)
document.getElementById("continue-shopping").addEventListener("click", continuarComprando);

document.addEventListener("DOMContentLoaded", function() {
    const daltonismoBtn = document.getElementById("daltonismo-btn");
    let isDaltonismoActive = false;

    daltonismoBtn.addEventListener("click", function() {
        isDaltonismoActive = !isDaltonismoActive; // Alterna o estado

        if (isDaltonismoActive) {
            document.body.classList.add("modo-daltonico"); // Ativa o modo daltônico
            daltonismoBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Modo Normal'; // Muda o texto do botão
        } else {
            document.body.classList.remove("modo-daltonico"); // Desativa o modo daltônico
            daltonismoBtn.innerHTML = '<i class="fas fa-eye"></i> Modo Daltônico'; // Restaura o texto original do botão
        }
    });
});

// -------- Barra de Pesquisa --------
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

// Inicia a busca ao clicar no botão
searchButton.addEventListener("click", realizarBusca);

// Permite iniciar a busca ao pressionar "Enter"
searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") realizarBusca();
});

// -------- Carrinho de Compras --------
const addToCartButton = document.getElementById("add-to-cart");
const itemCountDisplay = document.getElementById("item-count");
const itemQuantityInput = document.getElementById("item-quantity");

// Adicionar ao carrinho
addToCartButton.addEventListener("click", () => {
    const quantity = parseInt(itemQuantityInput.value) || 0;
    const flowerColor = document.getElementById("flower-color").value;

    if (quantity > 0) {
        // Atualiza o número total de itens no carrinho
        const currentCount = parseInt(itemCountDisplay.textContent) || 0;
        itemCountDisplay.textContent = currentCount + quantity;

        // Mostra uma mensagem de confirmação
        alert(`Adicionado ao carrinho: ${quantity} Antúrio(s) na cor ${flowerColor}.`);
    } else {
        alert("Por favor, selecione uma quantidade maior que zero.");
    }
});

// -------- Controle de Quantidade --------
const removeItemButton = document.getElementById("remove-item");
const addItemButton = document.getElementById("add-item");

// Função para alterar a quantidade (incremento ou decremento)
function alterarQuantidade(valor) {
    const currentQuantity = parseInt(itemQuantityInput.value) || 1;
    const newQuantity = Math.max(1, currentQuantity + valor); // Garante que a quantidade mínima seja 1
    itemQuantityInput.value = newQuantity;
}

// Aumenta a quantidade
addItemButton.addEventListener("click", () => alterarQuantidade(1));

// Diminui a quantidade
removeItemButton.addEventListener("click", () => alterarQuantidade(-1));

// -------- Seleção de Cor --------
document.getElementById("flower-color").addEventListener("change", (event) => {
    console.log(`Cor escolhida: ${event.target.value}`);
});

// -------- Menu Hambúrguer --------
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show"); // Alterna a visibilidade do menu
}

// -------- Cálculo de Frete --------
const calculateFreightButton = document.getElementById("calculate-freight");
const cepInput = document.getElementById("cep");

// Clique no botão de calcular frete
calculateFreightButton.addEventListener("click", async () => {
    const cep = cepInput.value.trim(); // Remove espaços em branco

    if (isValidCEP(cep)) {
        try {
            const freightValue = calculateFreight(cep); // Calcula o frete (simulação)
            const address = await getAddressByCEP(cep); // Busca o endereço via API

            // Exibe os dados ao usuário
            alert(`Frete calculado para o CEP: ${cep}.
Valor: R$ ${freightValue.toFixed(2)}.
Rua: ${address.logradouro || "Informação indisponível"}`);
        } catch (error) {
            alert("Erro ao buscar o endereço: " + error.message);
        }
    } else {
        alert("Por favor, insira um CEP válido.");
    }
});

// Valida o formato do CEP
function isValidCEP(cep) {
    const cepPattern = /^\d{5}-?\d{3}$/; // Aceita 12345-678 ou 12345678
    return cepPattern.test(cep);
}

// Simula o cálculo do frete (gera valor aleatório entre 0 e 50)
function calculateFreight(cep) {
    return Math.random() * 50;
}

// Busca o endereço pelo CEP usando a API ViaCEP
async function getAddressByCEP(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!response.ok) {
        throw new Error("Erro ao buscar o endereço.");
    }

    const addressData = await response.json();
    if (addressData.erro) {
        throw new Error("CEP não encontrado.");
    }

    return addressData;
}

// -------- Função para realizar a busca --------
function realizarBusca() {
    const searchQuery = searchInput.value.trim();
    if (searchQuery) {
        console.log(`Realizando busca por: ${searchQuery}`);
        // Adicione aqui a lógica de busca (ex.: filtro de produtos)
    } else {
        alert("Por favor, insira um termo para pesquisar.");
    }
}
function adicionarAoCarrinho(id) {
    const flor = flores.find(flor => flor.id === id);
    if (flor) {
        carrinho.push(flor);
        localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Salva o carrinho no localStorage
        atualizarCarrinho();
    } else {
        alert("Flor não encontrada!");
    }
}

function carregarFlores() {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
        carrinho.push(...JSON.parse(carrinhoSalvo));
    }
    // Carrega as flores como antes
    const flowerListDiv = document.getElementById('flower-list');
    flowerListDiv.innerHTML = ""; 
    flores.forEach(flor => {
        const florDiv = document.createElement('div');
        florDiv.className = 'flower-card';
        florDiv.innerHTML = `
            <strong>${flor.nome}</strong><br>
            Preço: R$${flor.valor.toFixed(2)}<br>
            <button onclick="adicionarAoCarrinho(${flor.id})">Adicionar ao Carrinho</button>
        `;
        flowerListDiv.appendChild(florDiv);
    });
    atualizarCarrinho();
}