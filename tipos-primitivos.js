console.log("hello world");
console.log(45);

//tipos de dados primitivos

//texto - strings

//string com aspas duplas
// ("Isso é uma mensagem");
// ("hello world");
// ("2345");
// //string com aspas simples
// "Estudar Javascript hoje a tarde" //string com crase
// `Eu consigo
// escrever um texto
// quebrando a linha
// `;
// //tipo number - números

// // int
// 10;
// 234;
// //float
// 1.45;
// 0.76;

// // tipo boolean

// true;
// false;

// //tipo undefined

// undefined;

// //tipo null

// null;

// criando variáveis
// duas maneiras (let e const)
// Boas praticas para variáveis -> Escolha bons nomes descritivos. se tiver uma palavra, que seja tudo minusculo, caso tenha mais de uma palavra, o restante inicia com letra maiucula (camel case)

let primeiroNome = "Rodrigo";
let profissao = "Programador";
const primeiroTelefone = "(85)997364758";
let cpf = "948.756.374-56";

const minhaIdade = 35;

console.log("hello world");
console.log(primeiroNome);
console.log(minhaIdade);

primeiroNome = "Nayara";

console.log(primeiroNome);

let alturaDoPredio;

console.log(alturaDoPredio);

alturaDoPredio = 20;

console.log(alturaDoPredio);

//primeiroTelefone = "9999999";

//usando typeof

console.log(typeof primeiroTelefone);
console.log(typeof minhaIdade);

// estrutura de dados

//array - listas []

let frutas = ["uva", "banana", "maça", "laranja"];
let numeros = [100, 200, 45, 5, 25];
let qualquerCoisa = [true, "Fiat", 50];

let primeiraFrutaEscolhida = frutas[1];
let marcaDeCarro = qualquerCoisa[1];

console.log(primeiraFrutaEscolhida, frutas[2], numeros[0]);
console.log(qualquerCoisa[0]);
console.log(marcaDeCarro);

// objetos

let lapiseira = {
  ponta: 0.7,
  temBorracha: true,
  marca: "Compactor",
  preco: 7.99,
  cor: "azul",
};

console.log(lapiseira);
console.log(lapiseira.marca);

let tenis = {
  marca: "Nike",
  modelo: "Run 2025",
  preco: 499.99,
  cor: "Branco",
  Tamanho: 42,
  estoque: 10,
};

let tenisList = [
  {
    marca: "Nike",
    modelo: "Run 2025",
    preco: 499.99,
    cor: "Branco",
    Tamanho: [
      {
        tamanho: 42,
        estoque: 10,
      },
      {
        tamanho: 43,
        estoque: 15,
      },
      {
        tamanho: 44,
        estoque: 20,
      },
      {
        tamanho: 45,
        estoque: 30,
      },
    ],
  },
  {
    marca: "Adidas",
    modelo: "Run MAx 2025",
    preco: 599.99,
    cor: "Preto",
    Tamanho: [
      {
        tamanho: 42,
        estoque: 10,
      },
      {
        tamanho: 43,
        estoque: 15,
      },
      {
        tamanho: 44,
        estoque: 20,
      },
      {
        tamanho: 45,
        estoque: 30,
      },
    ],
  },
];

console.log(tenisList[0].Tamanho[3].estoque);

lapiseira.ponta = 0.9;

console.log(lapiseira);

tenis.preco = 800.0;

console.log(tenis);

tenis.categoria = "Corrida";

console.log(tenis);

delete tenis.preco;

console.log(tenis);
