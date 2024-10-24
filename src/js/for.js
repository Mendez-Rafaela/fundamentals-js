//    // loop 
// for (i = 0; i <= 5; i = i + 1) {
//     console.log(i)
// }


//   Operador de adição - Incremento
// let int = 1
//Incremento pós
// int = int +1 (int++)
// console.log(int++, 'pós')
//Incremento pré
//int++
// console.log(++int, 'pré')

//    Operador de Subtração - Decremento
//let dec = 10
//Incremento pós
// dec = dec +1 (dec--)
//console.log(dec--, 'pós')
//Incremento pré
//dec++
//console.log(--dec, 'pré')


//   Indicador de par ou impar
// for (i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i, 'é par!')
//     } else {
//         console.log(i, 'é ímpar')
//     }
// }

//array = Matrix [1,2,3]

// let objeto = {}

// const array = []

const products = [{
    name: 'Camiseta',
    price: 25
}, {
    name: 'Calça',
    price: 60
}, {
    name: 'Chapéu',
    price: 15
}, {
    name: 'Marrom',
    price: 50
}]


//   percorre todos os objetos do array
// for (let product of products) {
//     console.log(product.name + ' custa ' + product.price + ' reais')
// }

let total = 0
//   soma todos os produtos e para
for(let product of products) {
    //total = total + product.price
    total += product.price
}
console.log('A soma total dos produtos é: ' + total + ' reais')