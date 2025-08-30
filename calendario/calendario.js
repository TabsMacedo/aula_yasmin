// Variáveis globais
var inputData = document.getElementById("campoData");
var resultado = document.getElementById("resultado");

// Array com os nomes dos dias da semana
var diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

// Adiciona evento ao input de data
inputData.addEventListener("change", function() {
  // Pega o valor da data escolhida
  var dataEscolhida = new Date(this.value);

  // Pega o dia da semana (0 = Domingo, 1 = Segunda, ..., 6 = Sábado)
  // retorna o número do dia da semana dessa data:
  var diaNumero = dataEscolhida.getDay();
  var nomeDia = diasSemana[diaNumero];



  // Mostra o resultado
  resultado.innerText = "Dia da semana: " + nomeDia;
});
