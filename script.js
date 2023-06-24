// Obtendo os elementos do formulário de login e do formulário de cadastro
const formularioLogin = document.getElementById('login-form');
const formularioCadastro = document.getElementById('register-form');

// Obtendo os elementos dos links de login e cadastro
const linkLogin = document.getElementById('login-link');
const linkCadastro = document.getElementById('register-link');

// Obtendo o elemento da mensagem de erro
const mensagemErro = document.getElementById('error-message');

// Dados de login válidos
const dadosLoginValidos = [
  { email: 'seu_email@example.com', senha: 'sua_senha' },
  // Adicione mais dados de login válidos, se necessário
];

// Evento de clique no link de login
linkLogin.addEventListener('click', function(e) {
  e.preventDefault();
  formularioLogin.style.display = 'flex';
  formularioCadastro.style.display = 'none';
});

// Evento de clique no link de cadastro
linkCadastro.addEventListener('click', function(e) {
  e.preventDefault();
  formularioLogin.style.display = 'none';
  formularioCadastro.style.display = 'flex';
});

// Evento de envio do formulário de login
formularioLogin.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = formularioLogin.elements[0].value;
  const senha = formularioLogin.elements[1].value;

  const emailArmazenado = localStorage.getItem('email');
  const senhaArmazenada = localStorage.getItem('senha');

  if (email === emailArmazenado && senha === senhaArmazenada) {
    window.location.assign('calcu.html');
  } else {
    alert('Email ou senha incorretos. Por favor, tente novamente.');
  }
});

// Evento de envio do formulário de cadastro
formularioCadastro.addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const senha = document.getElementById('register-password').value;

  localStorage.setItem('email', email);
  localStorage.setItem('senha', senha);

  alert('Cadastro concluído com sucesso! Você será redirecionado para a tela de login.');
  formularioLogin.style.display = 'flex';
  formularioCadastro.style.display = 'none';
});

// Evento de clique no botão de mostrar/ocultar senha
const toggleSenha = document.getElementById('toggle-password');
toggleSenha.addEventListener('click', function() {
  const campoSenha = document.getElementById('register-password');
  if (campoSenha.type === 'password') {
    campoSenha.type = 'text';
    toggleSenha.classList.remove('fa-eye');
    toggleSenha.classList.add('fa-eye-slash');
  } else {
    campoSenha.type = 'password';
    toggleSenha.classList.remove('fa-eye-slash');
    toggleSenha.classList.add('fa-eye');
  }
});
