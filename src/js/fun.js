
// const fullname = 'Lucas do Espirito Santo'
// //metodo length
// console.log(fullname.length, 'conta caracteres')

// // 2º metodo length
// const fruits = ['maça', 'pessego', 'uva', 'pera']

// //conta caracteres
// console.log(fruits.length, 'array')

// // chama o ultimo elemento
// console.table(fruits[fruits.length -1])


// //metodo Slice (não costumamos usar por ser muito específico)
// const cortaNome = fullname.slice(1, 5)
// console.log(cortaNome)

// //metodo Split (fatiou, passou.) = vai fatiar o nome pelo espaço
// const transformToArray =  fullname.split(' ')
// console.log(transformToArray)

// // puxei ultimo nome
// const lastName = transformToArray[transformToArray.length -1]
// console.log(lastName)



// funcao que pegue o primeiro nome e da um "olá (fulano)"
function FirstName (fullname) {
    if (fullname.length <= 0) {
        return console.error('Coloque um nome válido')
    }
    let name = fullname.split(' ')[0]
    return `Olá, ${name}, seja bem-vindo!`
}


console.log(FirstName('Rafaela Costa'))
 

// funcao que calcule o IMC do paciente

function GetIMC (peso, altura) {

    let imc = peso / (altura * altura)
    if(imc <= 18.5) {
        return console.log('abaixo do peso normal')
    }else (imc <= 0) {
       return console.log('peso indefinido')
    } else if(imc  >= 18.5 && imc  >= 24.99) {
        return console.log('peso normal')
    } else if(imc  >= 25 && imc  <= 29.99) {
        return console.log('Sobrepeso') 
    } else if (imc  >= 30 && imc  <= 34.90) {
        return console.log('Obesidade')
    }else (imc <= 0) {
    return console.log('peso indefinido')
}
}

console.log(`Seu IMC é ${GetIMC(60, 1.83)}`)