const pricePerUnit = 79.99; // Preço

// Função para continuar comprando
function continuarComprando() {
    window.location.href = "C:/Users/andre/pagina de flores/index.html"; // Ajuste o caminho conforme necessário
}

// Função para calcular o frete com base no CEP
function calcularFrete(cep) {
    // Simulação de cálculo de frete
    // O valor do frete pode variar, aqui é uma lógica simples
    let freightCost = 0;
    if (cep) {
        freightCost = 5.00; // Valor fixo de frete para simplificação
    }
    return freightCost;
}

// Atualiza a quantidade do item
document.getElementById('add-item').onclick = function() {
    const quantityInput = document.getElementById('item-quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
};

document.getElementById('remove-item').onclick = function() {
    const quantityInput = document.getElementById('item-quantity');
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
};

// Adiciona evento para calcular o frete
document.getElementById('calculate-freight').onclick = function() {
    const cep = document.getElementById('cep').value;
    const freightCost = calcularFrete(cep);
    const quantity = parseInt(document.getElementById('item-quantity').value);
    const totalCost = quantity * pricePerUnit + freightCost;

    // Exibindo os resultados
    alert(`Frete: R$${freightCost.toFixed(2)}\nTotal: R$${totalCost.toFixed(2)}`);
};

// Adiciona produto ao carrinho
document.getElementById('add-to-cart').onclick = function() {
    const quantity = parseInt(document.getElementById('item-quantity').value);
    const totalCost = quantity * pricePerUnit;

    alert(`Adicionado ao carrinho:\nQuantidade: ${quantity}\nTotal: R$${totalCost.toFixed(2)}`);
};

// Voltar à página anterior
document.getElementById('go-back').onclick = function() {
    window.history.back(); // Voltar para a página anterior
};

document.getElementById('calculate-freight').addEventListener('click', function() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');  // Remove caracteres não numéricos

    // Consultar a API do ViaCEP
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar o endereço');
            }
            return response.json();
        })
        .then(data => {
            if (data.erro) {
                throw new Error('CEP não encontrado');
            }

            // Montar o texto do endereço a ser exibido
            const endereco = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
            document.getElementById('endereco').innerText = endereco;

            // Mostrar o modal
            const modal = document.getElementById('myModal');
            modal.style.display = "block";
        })
        .catch(error => {
            alert(error.message);
        });
});

// Fechar o modal quando o usuário clicar no 'x'
document.getElementsByClassName("close")[0].onclick = function() {
    const modal = document.getElementById('myModal');
    modal.style.display = "none";
}

// Fechar o modal quando o usuário clicou fora do modal
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const colorPicker = document.getElementById('color-picker');
const displayColor = document.getElementById('display-color');
const colorName = document.getElementById('color-name');

colorPicker.addEventListener('input', function() {
    const selectedColor = colorPicker.value;
    displayColor.style.backgroundColor = selectedColor;
    colorName.textContent = selectedColor;
});

