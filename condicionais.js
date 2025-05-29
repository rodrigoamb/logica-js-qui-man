let minhaNota = 8.5;

function avaliandoNota(nota) {
  if (nota >= 7) {
    console.log("Você foi aprovado");
  } else if (nota >= 5 && nota < 7) {
    console.log("Você está de recuperação");
  } else {
    console.log("Você reprovou");
  }
}

avaliandoNota(minhaNota);

//------------------------

function liberarParaFesta(
  camisaDoConvidado,
  calcaDoConvidado,
  tenisDoConvidado
) {
  if (
    (camisaDoConvidado == "branco" || calcaDoConvidado == "branco") &&
    tenisDoConvidado == "branco"
  ) {
    console.log("convidado entrou na festa");
  } else {
    console.log("convidado não entrou na festa");
  }
}

liberarParaFesta("branco", "preto", "branco"); //entrou
liberarParaFesta("azul", "branco", "branco"); // entrou
liberarParaFesta("azul", "bege", "branco"); //não entrou
liberarParaFesta("verde", "branco", "preto"); //não entrou

//----------------

//crie uma função que recebe 3 parâmetros (operacao, num1, num2), a funcao se chama calculoSimples e deve fazer as operações de "somar", "subtrair", "multiplicar", "dividir". Ao executar a função calculoSimples, já passe os valores direto na função, fazendo todas as operações. calculoSimples, printa no console o valor final da operacao. OBS: USE CONDICIONAIS

function calculoSimples(operacao, num1, num2) {
  if (operacao == "somar") {
    console.log("O resultado da soma:", num1 + num2);
  } else if (operacao == "subtrair") {
    console.log("O resultado da subtração:", num1 - num2);
  } else if (operacao == "multiplicar") {
    console.log("O resultado da multiplicação:", num1 * num2);
  } else if (operacao == "dividir") {
    console.log("O resultado da divisao:", num1 / num2);
  } else {
    console.log("Operação inválida");
  }
}

calculoSimples("somar", 10, 15);
calculoSimples("subtrair", 20, 5);
calculoSimples("multiplicar", 10, 3);
calculoSimples("dividir", 20, 2);
calculoSimples("exponencial", 30, 3);

// Você foi contratado para desenvolver uma função que ajude usuários a converter temperaturas entre diferentes escalas: Celsius (°C), Fahrenheit (°F) e Kelvin (K).

// Sua tarefa é criar uma função chamada converterTemperatura, que receba dois parâmetros:
// 	1.	tipo: uma string que indica o tipo da temperatura fornecida pelo usuário. Pode ser:
// 	•	"celsius" → quando o valor estiver em graus Celsius.
// 	•	"fahrenheit" → quando o valor estiver em graus Fahrenheit.
// 	•	"kelvin" → quando o valor estiver em Kelvin.
// 	2.	valor: um número que representa a temperatura.

// A função deve utilizar uma estrutura if/else para verificar qual tipo de temperatura foi informada, e com base nisso:
// 	•	Se for “celsius”, deve converter para fahrenheit e kelvin.
// 	•	Se for “fahrenheit”, deve converter para celsius e kelvin.
// 	•	Se for “kelvin”, deve converter para celsius e fahrenheit.
// 	•	Se for um tipo inválido, exibir uma mensagem informando o erro.

// ✅ Fórmulas de conversão:
// 	•	Celsius → Fahrenheit: (C * 9/5) + 32
// 	•	Celsius → Kelvin: C + 273.15
// 	•	Fahrenheit → Celsius: (F - 32) * 5/9
// 	•	Kelvin → Celsius: K - 273.15
