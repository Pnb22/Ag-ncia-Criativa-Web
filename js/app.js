import { Menu, Servico, Depoimento, FormularioContato } from "./classes.js";

// Inicializa o menu responsivo
new Menu(".menu-toggle", ".menu ul");

// Lista de serviços
const servicos = [
  new Servico("Design Gráfico", "Criação de identidades visuais modernas e impactantes.", "https://via.placeholder.com/300x200"),
  new Servico("Desenvolvimento Web", "Sites e plataformas otimizadas para todos os dispositivos.", "https://via.placeholder.com/300x200"),
  new Servico("Branding", "Fortalecemos a identidade da sua marca para gerar conexões reais.", "https://via.placeholder.com/300x200")
];

// Renderiza os serviços dinamicamente
const listaServicos = document.getElementById("lista-servicos");
servicos.forEach(servico => listaServicos.appendChild(servico.render()));

// Lista de depoimentos
const depoimentos = [
  new Depoimento("A Agência Criativa Web transformou nossa presença digital!", "Ana Souza, CEO da Marca X"),
  new Depoimento("Eles entenderam exatamente o que precisávamos. Nosso site ficou impecável!", "Lucas Pereira, Empreendedor")
];

// Renderiza os depoimentos dinamicamente
const listaDepoimentos = document.getElementById("lista-depoimentos");
depoimentos.forEach(dep => listaDepoimentos.appendChild(dep.render()));

// Inicializa o formulário de contato
new FormularioContato("#form-contato", "#feedback");
