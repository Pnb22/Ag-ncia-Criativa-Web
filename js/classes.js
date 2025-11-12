// Classe responsável pelo menu de navegação
export class Menu {
  constructor(botaoSelector, menuSelector) {
    this.botao = document.querySelector(botaoSelector);
    this.menu = document.querySelector(menuSelector);

    this.botao.addEventListener("click", () => this.toggleMenu());
  }

  toggleMenu() {
    this.menu.classList.toggle("ativo");
  }
}

// serviço da agência
export class Servico {
  constructor(titulo, descricao, imagem) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.imagem = imagem;
  }

  render() {
    const div = document.createElement("div");
    div.classList.add("card-servico");
    div.innerHTML = `
      <img src="${this.imagem}" alt="${this.titulo}" />
      <h3>${this.titulo}</h3>
      <p>${this.descricao}</p>
    `;
    return div;
  }
}

// depoimento
export class Depoimento {
  constructor(texto, autor) {
    this.texto = texto;
    this.autor = autor;
  }

  render() {
    const div = document.createElement("div");
    div.classList.add("depoimento");
    div.innerHTML = `
      <p>"${this.texto}"</p>
      <span>— ${this.autor}</span>
    `;
    return div;
  }
}

// Classe responsável 
export class FormularioContato {
  constructor(formSelector, feedbackSelector) {
    this.form = document.querySelector(formSelector);
    this.feedback = document.querySelector(feedbackSelector);

    this.form.addEventListener("submit", (e) => this.enviarMensagem(e));
  }

  enviarMensagem(event) {
    event.preventDefault();

    const nome = this.form.querySelector("#nome").value.trim();
    const email = this.form.querySelector("#email").value.trim();
    const mensagem = this.form.querySelector("#mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      this.feedback.textContent = "Por favor, preencha todos os campos!";
      this.feedback.style.color = "red";
      return;
    }

    this.feedback.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
    this.feedback.style.color = "green";
    this.form.reset();
  }
}
