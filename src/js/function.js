// função estática
// function Salve() {
//     return console.log('salve, sou uma função estática')
// }

// Salve()

// function Saudacao() {
//     return "Olá, Mundo!"
// }

// console.log(Saudacao)

// function Somar() {
//     return 2 + 2
// }

// console.log(Somar())

// função Dinâmica
// function DynaSomar (a, b) {
//     return a + b
// }

// console.log(DynaSomar(10, 200))

// function NumberX(num) {
//     if(num % 2 == 0) {
//         return `${num} eu sou par`
//     } else {
//         return num + "Eu sou impar"
//     }
// }

// console.log(NumberX(4))

function ShortName (fullName) {
    const splitName = fullName.split(' ')
    const [firstName, ...rest] = splitName
    const lastName = rest[rest.length -1]
    
    return console.log(`${firstName} ${lastName}`)
}

ShortName('Maria Jose dos Santos')

