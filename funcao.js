//criando função - função nomeada (1a forma)
function nomeDaFuncao() {
  // O código da minha função
}

function apresentacao(nome) {
  console.log(`Olá meu nome é ${nome}`);
}

apresentacao("Rodrigo");
apresentacao("Lucas");
apresentacao("Guilherme");
apresentacao("Klinsman");

function somar(numero1, numero2) {
  const resultado = numero1 + numero2;
  return resultado;
}

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

const compra1 = tenisList[0].preco;
const compra2 = tenisList[1].preco;

const minhaCompra = somar(compra1, compra2);

console.log(minhaCompra);

somar(20, 30);
somar(220, 40);

function diminuir(numero1, numero2) {
  console.log("Acessei minha variavel no escopo global", minhaCompra);
  const result = numero1 - numero2;
  return result;
}

const result = "Esse é meu result no escopo global";
console.log(result);

function multiplicar(numero1, numero2) {
  const result = numero1 * numero2;
  return result;
}

function dividir(numero1, numero2) {
  const result = numero1 / numero2;
  return result;
}

const resultadoDiminuir = diminuir(10, 5);
const resultadoMultiplicar = multiplicar(3, 4);
const resultadoDividir = dividir(10, 2.5);

console.log(resultadoDiminuir);
console.log(resultadoMultiplicar);
console.log(resultadoDividir);

// funcao anonima (2a forma)

const saudacao = function (nome, idade) {
  console.log(`Olá meu nome é ${nome} e tenho ${idade} anos.`);
  return 100;
};

saudacao("Rodrigo", 35);

// arrow functions (3a forma)

const mensagemTenis = (marca) => {
  console.log(`Comprei um tenis ${marca}`);
};

mensagemTenis("Adidas");
