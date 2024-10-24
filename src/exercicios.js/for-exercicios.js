//   descomente o ex que quer testar


//Exercício 1: Imprimir números de 1 a 10
//Crie um loop que imprima os números de 1 a 10.

// for (i = 1; i <= 10; i = i + 1) {
//     console.log(i)
// }



//Exercício 2: Imprimir números pares entre 1 e 20
//Crie um loop que imprima apenas os números pares de 1 a 20.

// for (i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//     console.log(i, 'é par!')
//      } }
     


//Exercício 3: Somar os números de 1 a 100
//Crie um loop que calcule a soma de todos os números de 1 a 100.

// let soma = 0;
// for (let numero = 1; numero <= 100; numero++) {
//     soma += numero;
// }

// console.log("A soma dos números de 1 a 100 é:", soma)




//Exercício 4: Imprimir os elementos de um array
//Dado um array de frutas, use um loop para imprimir cada fruta.

// const fruit = ['maçã', 'banana', 'laranja', 'manga', 'uva', 'abacaxi', 'morango']

// for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
// }



//Exercício 5: Multiplicar os números de 1 a 10 por 2
//Crie um loop que imprima o resultado da multiplicação de cada número de 1 a 10 por 2

// for (let number = 1; number <= 10; number++) {
//     let result = number * 2;
//     console.log(`${number} multiplicado por 2 é: ${result}`);
// }



//Exercício 6: Imprimir números de 10 a 1 (contagem regressiva)
//Crie um loop que imprima os números de 10 até 1.

// for (let numero = 10; numero >= 1; numero--) {
//     console.log(numero);
// }



// Exercício 7: Encontrar o maior número em um array
// Dado um array de números, use um loop para encontrar e imprimir o maior número.

// const numbers = [2, 15, 87, 21, 38, 17];
// let biggestNumber = numbers[0]; 

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > biggestNumber) {
//         biggestNumber = numbers[i]; 
//     }
// }

// console.log("O maior número é:", biggestNumber);



// Exercício 8: Contar números ímpares entre 1 e 50
// Crie um loop que conte quantos números ímpares existem entre 1 e 50 e imprima o resultado.

// let counterImpares = 0;

// for (let number = 1; number <= 50; number++) {
//     if (number % 2 !== 0) {
//         counterImpares++;
//     }
// }

// console.log("A quantidade de números ímpares entre 1 e 50 é:", counterImpares);



//Exercício 9: Imprimir a tabuada de um número
//Dado um número, use um loop para imprimir a tabuada desse número (de 1 a 10)

// const number = 52;

// console.log(`Tabuada de ${number}:`);
// for (let i = 1; i <= 10; i++) {
//     const result = number * i;
//     console.log(`${number} x ${i} = ${result}`);
// }



//Exercício 10: Reverter uma string
//Dada uma string, use um loop para imprimi-la de trás para frente.

// function reverseString(str) {
//     let stringReverse = '';
    
//     for (let i = str.length - 1; i >= 0; i--) {
//         stringReverse += str[i];
//     }    return stringReverse;
// }

// const myString = 'Esse sou eu ao contrário!'
// const result = reverseString(myString)
// console.log(result)