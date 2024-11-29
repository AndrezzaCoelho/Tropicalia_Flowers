// Adicionar evento ao botão de busca
document.getElementById("searchButton").addEventListener("click", realizarBusca);

// Permitir busca ao pressionar Enter
document.getElementById("searchInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        realizarBusca();
    }
});

// Botão de voltar
document.getElementById('continue-shopping').addEventListener('click', () => {
    window.history.back();
});

// Alternar modo daltônico
const daltonismoBtn = document.getElementById("daltonismo-btn");
daltonismoBtn.addEventListener("click", () => {
    document.body.classList.toggle("body-daltonico");

    const isDaltonico = document.body.classList.contains("body-daltonico");
    daltonismoBtn.innerHTML = isDaltonico
        ? '<i class="fas fa-eye-slash"></i> Modo Normal'
        : '<i class="fas fa-eye"></i> Modo Daltônico';
    daltonismoBtn.setAttribute(
        "aria-label",
        isDaltonico ? "Desativar modo para daltônicos" : "Ativar modo para daltônicos"
    );
});

// Controle de quantidade
function alterarQuantidade(valor) {
    const inputQuantidade = document.getElementById('item-quantity');
    let quantidadeAtual = parseInt(inputQuantidade.value) || 1;
    quantidadeAtual = Math.max(1, quantidadeAtual + valor); // Garantir no mínimo 1
    inputQuantidade.value = quantidadeAtual;
}

document.getElementById('remove-item').addEventListener('click', () => alterarQuantidade(-1));
document.getElementById('add-item').addEventListener('click', () => alterarQuantidade(1));

// Adicionar ao carrinho
document.getElementById('add-to-cart').addEventListener('click', () => {
    const quantidade = parseInt(document.getElementById('item-quantity').value) || 0;
    const cor = document.getElementById('flower-color').value;

    if (quantidade > 0) {
        const itemCountDisplay = document.getElementById('item-count');
        const itemCount = parseInt(itemCountDisplay.textContent) || 0;
        itemCountDisplay.textContent = itemCount + quantidade;

        alert(`Adicionado ao carrinho: ${quantidade} Antúrio(s) na cor ${cor}.`);
    } else {
        alert('Por favor, selecione uma quantidade maior que zero.');
    }
});

// Seleção de cor
document.getElementById('flower-color').addEventListener('change', (event) => {
    console.log(`Cor escolhida: ${event.target.value}`);
});

// Cálculo de frete
document.getElementById('calculate-freight').addEventListener('click', async () => {
    const cepInput = document.getElementById('cep');
    const cep = cepInput.value.trim();

    if (isValidCEP(cep)) {
        try {
            const freightValue = calculateFreight(cep);
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

// Funções auxiliares
function isValidCEP(cep) {
    return /^\d{5}-?\d{3}$/.test(cep);
}

function calculateFreight(cep) {
    return Math.random() * 50; // Simula valor entre 0 e 50
}

async function getAddressByCEP(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!response.ok) {
        throw new Error("Erro ao buscar o endereço.");
    }
    return await response.json();
}
