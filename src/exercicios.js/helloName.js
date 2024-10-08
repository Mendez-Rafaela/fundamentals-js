// variável com nome completo
const fullName = 'Rafaela Mendes da Costa'

// usando método split para gerar uma array
const arrayName = fullName.split(' ');

// peguei o primeiro nome usando 0
const firstName = arrayName[0]

// peguei o ultimo nome usando metodo lenght
const lastName = arrayName[arrayName.length -1]

// saudação
const hello = 'Olá, ' + firstName + ' ' + lastName

console.table(arrayName)
console.table(arrayName.length)
console.log(hello)
