// Estrutura condicionais 

//  const a = 10 //variável

// // 1- if

// if (a > 8) {
//    return console.log('O número é maior que 8!')
// } else {
//    return console.log('O número é menor que 8!')
// }


// const time = 'Vasco' //variável

// // 2- else if (serve para adicionar condições)

// if(time === 'Palmeiras') {
//     return console.log('O seu time é Palmeiras')
// } else if (time ==='São Paulo') {
//     return console.log('O seu time é São Paulo')
// } else if (time ==='Vasco') {
//     return console.log('O seu time é Vasco')
// } else {
//     return console.log('Não encontramos seu time no nosso Banco de dados!')
// }


//  const age = 17 //variável

// // 3- ternário

// let ofGreater = age >= 18 
// ? 
// console.log('você é de maior')
// :
// console.log('você é de menor')


// //expressão com AND(e)
// let onlyGreater = age >= 18 && console.log('mostra site')


// Switch case

const fruit = 'Morango'

switch(fruit) {
    case 'Laranja': return console.log('Você é tranquilo');
    case 'Morango': return console.log('Você é romântico');
    case 'Abacaxi': return console.log('Você é quente');
    default: return console.log('Não temos o significado dessa fruta')
}