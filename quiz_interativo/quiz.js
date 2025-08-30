// Variáveis globais
var botoes = [
  document.getElementById("opcao1"),
  document.getElementById("opcao2"),
  document.getElementById("opcao3"),
  document.getElementById("opcao4")
];

var feedback = document.getElementById("feedback");
var contador = document.getElementById("contador");
var pontuacaoFinal = document.getElementById("pontuacaoFinal");

var acertos = 0;      // contador de acertos
var totalCliques = 0; // contador de cliques

// Função para verificar a resposta
function verificarResposta(botao) {
  if (botao.innerText === "Brasília") {
    feedback.innerText = "Correto!";
    acertos++;
  } else {
    feedback.innerText = "Incorreto!";
  }

  contador.innerText = "Acertos: " + acertos;

  // Atualiza cliques e mostra pontuação final se já clicou em todos os botões
  totalCliques++;
  if (totalCliques >= 4) {
    pontuacaoFinal.innerText = "Pontuação final: " + acertos + " acertos!";
  }
}

// Adiciona evento de clique para todos os botões usando um loop
for (var i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function() {
    verificarResposta(this);
  });
}
