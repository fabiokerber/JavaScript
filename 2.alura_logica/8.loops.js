console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 10;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = "Salvador";
let contador = 0;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

console.log(`Idade do Comprador: ${idadeComprador}`);
console.log(`Está acompanhado? ${estaAcompanhado}`);

const podeComprar = (idadeComprador >= 18 || estaAcompanhado == true); //Permissão de comprar ser maior de idade e estar acompanhado

while (contador < 4) { //4 tamanho da listaDeDestinos
    if (listaDeDestinos[contador] == destino){ //condição abaixo se o valor da variavel destino é igual à algum item da lista.
        console.log(`\n Destino ${destino} existe.`);
        break;
    } else {
        console.log(`\n O destino ${destino} não existe.`);
    }
    contador ++;
}

