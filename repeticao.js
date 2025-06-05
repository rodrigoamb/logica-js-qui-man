for (let i = 1; i <= 5; i++) {
  console.log(`o valor de i: ${i}`);
}

const carros = ["honda", "toyota", "jeep", "ram", "bmw"];

console.log("quantidade de itens:", carros.length);

for (let i = 0; i <= carros.length - 1; i++) {
  if (carros[i] === "jeep") {
    carros[i] = "ferrari";
  }
}

console.log(carros);

//ex1 - Crie um programa que use um laço for para imprimir os números de 1 a 10 no console.

//ex2 - Crie um programa que some todos os números de 1 até 100 e exiba o resultado final no console.

//ex3 - Crie um programa que mostre apenas os números pares entre 1 e 20 usando for.

//ex4 - Mostre a tabuada do número 5 (de 5x1 até 5x10) usando for.

//ex5 - Crie um programa que percorre um nome e exibe letra por letra usando o for.
