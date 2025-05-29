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
