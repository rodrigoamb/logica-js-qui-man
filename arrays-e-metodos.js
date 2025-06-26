//arrays

let frutas = ["banana", "maçã", "Uva", "Laranja"];

let numeros = new Array(1, 2, 3, 4, 5);
console.log(numeros);

console.log(frutas[2]);

frutas[2] = "abacate";

console.log(frutas);

// métodos básicos de Arrays

//push() - Adiciona um item no final da lista

frutas.push("morango");

console.log(frutas);

//pop() - Remove o ultimo elemento da lista

frutas.pop();
frutas.pop();
console.log(frutas);

//unshift() - Adiciona um item no inicio da lista

frutas.unshift("manga");

console.log(frutas);

//shift() - Remove o primeiro item da lista

frutas.shift();
frutas.shift();
console.log(frutas);

//splice() - Adiciona, remove ou substitui elementos em uma posição específica

let letras = ["A", "B", "C", "D"];

letras.splice(2, 2, "X", "Z");

console.log(letras);

//slice() - retorna uma cópia da parte do array sem modificar a original

const carros = ["bmw", "honda", "toyota", "byd", "jeep", "audi"];

const fatiaCarros = carros.slice(2, 5);

console.log(fatiaCarros);

console.log(carros);

//map() - Cria um novo array aplicando uma função para cada elemento

const listNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//função de callback (arrow function)

let numerosDobrados = listNumbers.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  }

  return item;
});

console.log(numerosDobrados);

// filter() - Retorna um novo array apenas com os elementos que atendem a uma condição

let numerosPares = listNumbers.filter((item) => {
  return item > 5;
});

console.log(numerosPares);
