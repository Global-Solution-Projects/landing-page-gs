const quiz = [
  {
    pergunta: "1)  O que é uma enchente?",
    alternativas: [
      "a) Um fenômeno causado por baixa umidade do ar",
      "b) Excesso de água em áreas que normalmente são secas",
      "c) Excesso de chuva que não consegue ser drenado adequadamente",
      "d) Deslizamento de terra causado pela chuva",
    ],
    correta: 2,
  },
  {
    pergunta: "2) Qual é a principal causa das enchentes nas grandes cidades?",
    alternativas: [
      "a) Falta de árvores",
      "b) Deficiência no sistema de drenagem",
      "c) Aumento da população",
      "d) Má qualidade do asfalto",
    ],
    correta: 1,
  },
  {
    pergunta:
      "3) Qual dessas soluções pode ajudar a melhorar o monitoramento de enchentes?",
    alternativas: [
      "a) Construir mais estradas",
      "b) Utilizar sensores de monitoramento em tempo real e plataformas colaborativas",
      "c) Plantar mais árvores",
      "d) Construir mais represas",
    ],
    correta: 1,
  },
  {
    pergunta: "4) Como o OverFlowen App ajuda na prevenção de enchentes?",
    alternativas: [
      "a) Bloqueando o trânsito nas áreas alagadas",
      "b) Permite que os cidadãos registrem ocorrências de alagamentos, gerando dados em tempo real",
      "c) Divulga previsões meteorológicas",
      "d) Envia alertas para a Defesa Civil apenas",
    ],
    correta: 1,
  },
  {
    pergunta: "5) Qual é o impacto mais comum das enchentes nas comunidades?",
    alternativas: [
      "a) Perda de recursos naturais",
      "b) Danos econômicos e à saúde pública",
      "c) Crescimento do turismo",
      "d) Aumento da biodiversidade",
    ],
    correta: 1,
  },
  {
    pergunta:
      "6) O que significa 'sensores humanos' no contexto do OverFlowen App?",
    alternativas: [
      "a) Sensores de água que detectam enchentes",
      "b) Ação de cidadãos registrando dados sobre o nível da água",
      "c) Sensores colocados em postes para monitoramento de ruas",
      "d) Drones que monitoram áreas de risco",
    ],
    correta: 1,
  },
  {
    pergunta:
      "7) O que pode ser considerado um benefício de envolver a comunidade no monitoramento de enchentes?",
    alternativas: [
      "a) Maior eficiência na resposta e ações preventivas",
      "b) Mais custos para o governo",
      "c) Menor engajamento da sociedade",
      "d) Nenhum benefício",
    ],
    correta: 0,
  },
  {
    pergunta:
      "8) Qual seria o impacto de um sistema de alerta ineficiente para enchentes?",
    alternativas: [
      "a) Aumento da conscientização pública",
      "b) Resposta mais rápida e eficaz",
      "c) Danos maiores e maior número de vítimas",
      "d) Nenhum impacto",
    ],
    correta: 2,
  },
  {
    pergunta: "9) Em qual tipo de dispositivo o OverFlowen App pode ser usado?",
    alternativas: [
      "a) Somente em computadores",
      "b) Apenas em dispositivos móveis",
      "c) Em dispositivos móveis e web",
      "d) Nenhum dispositivo, é uma plataforma offline",
    ],
    correta: 2,
  },
  {
    pergunta:
      "10) Como o OverFlowen App pode ajudar as autoridades públicas durante uma enchente?",
    alternativas: [
      "a) Enviando alertas para todas as pessoas da cidade",
      "b) Fornecendo dados em tempo real sobre alagamentos e pontos críticos",
      "c) Apenas coletando informações sobre a quantidade de chuva",
      "d) Ajudando no controle do tráfego",
    ],
    correta: 1,
  },
];

let indiceAtual = 0;
let acertos = 0;

function carregarPergunta() {
  const perguntaContainer = document.getElementById("pergunta");
  const alternativasContainer = document.getElementById("alternativas");
  const resultado = document.getElementById("resultadoFinal");
  resultado.style.display = "none";
  resultado.innerHTML = "";

  if (indiceAtual < quiz.length) {
    const q = quiz[indiceAtual];
    perguntaContainer.textContent = q.pergunta;
    alternativasContainer.innerHTML = "";

    q.alternativas.forEach((alt, index) => {
      const btn = document.createElement("button");
      btn.textContent = alt;
      btn.classList.add("alternativa-btn");
      btn.addEventListener("click", () => verificarResposta(index));
      alternativasContainer.appendChild(btn);
    });
  } else {
    mostrarResultado();
  }
}

function verificarResposta(indice) {
  if (indice === quiz[indiceAtual].correta) {
    acertos++;
  }
  indiceAtual++;
  carregarPergunta();
}

function mostrarResultado() {
  const perguntaContainer = document.querySelector(".question-container");
  const resultado = document.getElementById("resultadoFinal");

  perguntaContainer.style.display = "none";
  resultado.style.display = "block";

  let mensagem = "";
  if (acertos >= 8) {
    mensagem =
      "🎉 Prevenido! Você está bem informado sobre os riscos de enchentes e a importância de tecnologias para enfrentar esse desafio.";
  } else if (acertos >= 5) {
    mensagem =
      "⚠️ Atenção! Você está no caminho certo, mas ainda há algumas áreas para melhorar.";
  } else {
    mensagem =
      "🚨 Precisa Melhorar! É importante entender mais sobre as enchentes e como podemos colaborar.";
  }

  resultado.innerHTML = `
      <p>Você acertou ${acertos} de ${quiz.length} questões.</p>
      <p>${mensagem}</p>
      <button id="retryBtn">Tentar novamente</button>
    `;

  document.getElementById("retryBtn").addEventListener("click", () => {
    indiceAtual = 0;
    acertos = 0;
    document.querySelector(".question-container").style.display = "block";
    resultado.innerHTML = "";
    resultado.style.display = "none";
    carregarPergunta();
  });
}

carregarPergunta();
