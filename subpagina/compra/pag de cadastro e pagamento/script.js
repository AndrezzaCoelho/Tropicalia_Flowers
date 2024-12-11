document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Simula uma validação de pagamento
    const name = document.getElementById('first-name').value;

    if (name) {
        document.getElementById('message').innerText = `Pagamento realizado com sucesso para ${name}!`;
        document.getElementById('message').classList.remove('hidden');
        document.getElementById('message').classList.add('success');
    } else {
        document.getElementById('message').innerText = 'Por favor, preencha todos os campos!';
        document.getElementById('message').classList.remove('hidden');
        document.getElementById('message').classList.add('error');
    }
});

function goBack() {
    window.history.back();
}

function continueShopping() {
    document.getElementById('payment-form').reset(); // Reseta o formulário
    document.getElementById('message').classList.add('hidden'); // Esconde a mensagem
    // Aqui você pode redirecionar o usuário para outra página ou seção
    alert('Agora você pode continuar comprando!');
}
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Aqui você pode processar as informações do formulário, se necessário

    // Exibe a mensagem para o usuário
    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = 'Cadastro realizado com sucesso!';
    mensagem.style.display = 'block'; // Exibe a mensagem
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    try {
      // Captura os dados preenchidos no formulário
      const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value,
        address: document.getElementById('address').value,
        complement: document.getElementById('complement').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value
      };

      // Verifica se o localStorage está disponível
      if (typeof(Storage) !== "undefined") {
        // Salva os dados no localStorage
        localStorage.setItem('registrationData', JSON.stringify(formData));
        alert('Cadastro salvo no localStorage!');
      } else {
        throw new Error('LocalStorage não é suportado no seu navegador.');
      }

      // Limpa o formulário após salvar os dados
      document.getElementById('registrationForm').reset();

    } catch (error) {
      // Captura qualquer erro que ocorrer
      console.error('Erro ao salvar dados no localStorage:', error);
      alert('Ocorreu um erro ao salvar os dados. Tente novamente.');
    }
  });
