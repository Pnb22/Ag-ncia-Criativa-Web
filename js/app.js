/* filepath: c:\Users\arthu\Platformer game\Ag-ncia-Criativa-Web\js\app.js */
// Dados dos serviços
const servicos = [
  { id: 1, titulo: 'Web Design', descricao: 'Design responsivo e moderno para sua marca' },
  { id: 2, titulo: 'Desenvolvimento Web', descricao: 'Aplicações web rápidas e escaláveis' },
  { id: 3, titulo: 'SEO & Marketing', descricao: 'Estratégias para aumentar sua visibilidade' },
  { id: 4, titulo: 'Branding', descricao: 'Identidade visual profissional e impactante' }
];

const depoimentos = [
  { id: 1, texto: 'A agência entregou exatamente o que esperávamos!', autor: 'João Silva' },
  { id: 2, texto: 'Profissionais dedicados e muito criativos.', autor: 'Maria Santos' },
  { id: 3, texto: 'Melhorou muito nossos resultados online.', autor: 'Pedro Costa' }
];

// Função para renderizar serviços
function renderServiços() {
  const container = document.getElementById('lista-servicos');
  container.innerHTML = servicos.map(servico => `
    <div class="card-servico">
      <h3>${servico.titulo}</h3>
      <p>${servico.descricao}</p>
    </div>
  `).join('');
}

// Função para renderizar depoimentos
function renderDepoimentos() {
  const container = document.getElementById('lista-depoimentos');
  container.innerHTML = depoimentos.map(depo => `
    <div class="depoimento">
      <p>"${depo.texto}"</p>
      <strong>— ${depo.autor}</strong>
    </div>
  `).join('');
}

// Função para toggle do menu mobile
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('ativo');
}

// Função para submeter formulário
function handleForm(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const feedback = document.getElementById('feedback');
  
  if (nome && email) {
    feedback.textContent = 'Mensagem enviada com sucesso!';
    feedback.classList.remove('erro');
    feedback.classList.add('sucesso');
    document.getElementById('form-contato').reset();
  } else {
    feedback.textContent = 'Preencha todos os campos!';
    feedback.classList.remove('sucesso');
    feedback.classList.add('erro');
  }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderServiços();
  renderDepoimentos();
  document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
  document.getElementById('form-contato').addEventListener('submit', handleForm);
});
