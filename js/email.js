function sendMmail() {
  emailjs.init('ftR4Xn6aQpYiORW9n');

  var params = {
    sendername: document.querySelector('#sendername').value,
    to: document.querySelector('#to').value,
    subject: document.querySelector('#subject').value,
    replyto: document.querySelector('#to').value,
    message: document.querySelector('#message').value,
  };

  var service = 'service_escbpxe';
  var template = 'template_0d9pm4m';

  emailjs.send(service, template, params).then(
    function (response) {
      showAlert('Tudo certo! Seu e-mail foi enviado com sucesso.', 'success');

      // Limpar os campos do formulário
      document.querySelector('#sendername').value = '';
      document.querySelector('#to').value = '';
      document.querySelector('#subject').value = '';
      document.querySelector('#message').value = '';
    },
    function (error) {
      showAlert(
        'Ops! O e-mail não foi enviado. Tente novamente em instantes!',
        'danger'
      );
      console.log('Erro ao enviar o email: ', error);
    }
  );
}

// Função para exibir alertas com Bootstrap
function showAlert(message, type) {
  var alertContainer = document.getElementById('alertContainer');
  alertContainer.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show mt-3" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button>
        </div>
    `;
  // Esconde o alerta após 5 segundos
  setTimeout(() => {
    const alertElement = alertContainer.querySelector('.alert');
    if (alertElement) {
      alertElement.classList.remove('show'); // Remove a classe "show" para ocultar o alerta
      alertElement.classList.add('fade'); // Adiciona a classe "fade" para animação de desaparecimento
      setTimeout(() => {
        alertElement.remove(); // Remove o alerta do DOM após a animação
      }, 150); // Tempo para a animação de fade-out
    }
  }, 5000); // Tempo total antes de iniciar o desaparecimento
}
