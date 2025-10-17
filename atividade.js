let nomes = ['Maria', 'João', 'José'];
nomes.forEach((nomes) => console.log(nomes))

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numerosdobrados = numeros.map((numeros) => (numeros * 2));
console.log(numerosdobrados)

const numerosImpares = numeros.filter(numeros => numeros % 2 !== 0);
console.log(numerosImpares)