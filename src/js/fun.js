
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
    return peso / altura ** 2
}
const IMC = GetIMC(60, 1.83)
    switch(true) {
        case IMC === 10:
            console.log('passou com excelencia')
            break
        case IMC <= 9 && IMC >= 7:
            console.log('passou')
            break
        case IMC >= 4 && IMC <= 6:
            console.log('recuperação')
            break
        case IMC >= 0 && IMC <=3:
            console.log('tente outra vez, reprova baixo. nengue') 
            break
        default:
            console.log('coloca uma nota valida')
    }
console.log(`Seu IMC é ${GetIMC(60, 1.83)}`)