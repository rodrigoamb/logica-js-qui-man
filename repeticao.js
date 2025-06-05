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

//operacoes matemáticas com programação:

const result1 = 100 + 20; //adicao (soma)
const result2 = 200 - 100; //subtracao
const result3 = 3 * 5; //multiplica
const result4 = 10 / 2; //divisao
const result5 = 30 % 3; //resto da divisao (operador mod)

//ex1 - Crie um programa que use um laço for para imprimir os números de 1 a 10 no console.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//ex2 - Crie um programa que some todos os números de 1 até 100 e exiba o resultado final no console.

let soma = 0;

for (let i = 1; i <= 100; i++) {
  soma = soma + i;
}

console.log(soma);

//ex3 - Crie um programa que mostre apenas os números pares entre 1 e 20 usando for.

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//ex4 - Mostre a tabuada do número 5 (de 5x1 até 5x10) usando for.

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

//ex5 - Crie um programa que percorre um nome e exibe letra por letra usando o for.

let nome = "Rodrigo";

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}
