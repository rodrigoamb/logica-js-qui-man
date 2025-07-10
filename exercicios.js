// 1.
// Crie uma variável nome com o valor "Carlos" e outra idade com o valor 25. Use if/else para verificar se idade é maior ou igual a 18. Se sim, exiba "Maior de idade", senão "Menor de idade".

let nome = "Carlos";
let idade = 25;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// ⸻

// 2.
// Crie um array frutas com 4 frutas. Use o método .push() para adicionar mais uma fruta e depois exiba o array com console.log().

const frutas = ["banana", "uva", "maçã", "laranja"];
frutas.push("abacaxi");
console.log(frutas);

// ⸻

// 3.
// Crie uma função que receba uma string e retorne o tamanho dessa string.

function tamanhoDaString(texto) {
  return texto.length;
}

console.log(tamanhoDaString("programação"));

// ⸻

// 4.
// Crie um objeto aluno com as propriedades: nome, idade e aprovado. Altere o valor de aprovado para true e exiba o objeto.

let aluno = {
  nome: "Ana",
  idade: 22,
  aprovado: false,
};

aluno.aprovado = true;

console.log(aluno);

// ⸻

// 5.
// Crie um array com objetos representando produtos: cada objeto deve ter nome e preco. Use .filter() para retornar apenas os produtos com preço acima de 50.

const produtos = [
  { nome: "Camisa", preco: 45 },
  { nome: "Tenis", preco: 60 },
  { nome: "Calça", preco: 80 },
];

const caros = produtos.filter((produto) => {
  return produto.preco > 50;
});

console.log(caros);

// ⸻

// 6.
// Dado o array [10, 20, 30, 40, 50], use .map() para criar um novo array com todos os valores multiplicados por 2.
const numeros = [10, 20, 30, 40, 50];

const multiplicados1 = numeros.map((itens) => {
  return itens * 2;
});

console.log(multiplicados1);

// ⸻

// 7.
// Crie uma função que receba dois números e retorne true se ambos forem pares, ou false caso contrário.

function saoPares(num1, num2) {
  return num1 % 2 === 0 && num2 % 2 === 0;
}

console.log(saoPares(2, 4)); //true
console.log(saoPares(2, 9)); //false

// ⸻

// 8.
// Crie um array com nomes de 5 pessoas. Verifique se o nome “João” está presente usando .includes() e exiba o resultado.

const pessoas = ["Ana", "Maria", "Carlor", "Joao", "Paulo"];

const temJoao = pessoas.includes("Joao"); //true
const temRodrigo = pessoas.includes("Rodrigo"); //false

// ⸻

// 9.
// Crie uma função que receba um array de números e retorne true se todos forem maiores que 10 usando .every().

function todosMaioresQue10(array) {
  return array.every((item) => {
    return item > 10;
  });
}

console.log(todosMaioresQue10([10, 20, 30, 50])); //true
console.log(todosMaioresQue10([10, 5, 30, 50])); //false

// ⸻

// 10.
// Crie um objeto carro com modelo, marca e ano. Crie uma função que receba esse objeto como parâmetro e retorne uma string com todos os dados formatados.

const carro = {
  modelo: "Civic",
  marca: "Honda",
  ano: 2020,
};

function descricaoCarro(carro) {
  return `Modelo: ${carro.modelo}. Marca: ${carro.marca}, Ano: ${carro.ano}`;
}

console.log(descricaoCarro(carro));

// ⸻

// 11.
// Crie um array de objetos com alunos (nome e nota). Use .forEach() para exibir o nome e se a nota é maior ou menor que 7 usando if/else.

const alunos = [
  { nome: "Lucas", nota: 6 },
  { nome: "Ana", nota: 8 },
  { nome: "Rafael", nota: 5 },
];

alunos.forEach((aluno) => {
  if (aluno.nota >= 7) {
    console.log(`O aluno ${aluno.nome}} está aprovado`);
  } else {
    console.log(`O aluno ${aluno.nome} está reprovado`);
  }
});

// ⸻

// 12.
// Crie uma função que receba uma idade e retorne:
// 	•	“Criança” se menor que 12
// 	•	“Adolescente” se entre 12 e 17
// 	•	“Adulto” se 18 ou mais

function classificaIdade(idade) {
  if (idade < 12) {
    return "Criança";
  } else if (idade >= 12 && idade < 18) {
    return "Adolescente";
  } else {
    return "Adulto";
  }
}

console.log(classificaIdade(10));
console.log(classificaIdade(15));
console.log(classificaIdade(20));

// ⸻

// 13.
// Crie um array com 5 números e remova o primeiro e o último elemento usando shift() e pop(). Exiba o array final.

const numeros2 = [1, 2, 3, 4, 5];
numeros2.shift();
numeros2.pop();

console.log(numeros2);

// ⸻

// 14.
// Crie um array com 6 números. Use .find() para encontrar o primeiro número maior que 30.

const valores = [12, 25, 32, 8, 50];
const maiorQue30 = valores.find((item) => {
  return item > 30;
});

console.log(maiorQue30); //32

// ⸻

// 15.
// Crie um array de objetos representando tarefas (descricao e concluida: true/false). Use .some() para verificar se alguma tarefa foi concluída.

const tarefas = [
  { descricao: "lavar louça", concluido: false },
  { descricao: "Estudar JS", concluido: true },
  { descricao: "Fazer exercicios", concluido: false },
];

const temConcluido = tarefas.some((tarefa) => {
  return tarefa.concluido;
});

console.log(temConcluido); //true
