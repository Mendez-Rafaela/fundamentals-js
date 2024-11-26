// FUNÇÃO DECLARATIVA

// função estática
// function Salve() {
//      return console.log('salve, sou uma função estática')
// }

// Salve()

 function Saudacao() {
     return "Olá, Mundo!"
 }

 console.log(Saudacao)

 function Somar() {
     return 2 + 2
 }

 console.log(Somar())

// função Dinâmica
 function DynaSomar (a, b) {
     return a + b
 }

 console.log(DynaSomar(10, 200))

 function NumberX(num) {
     if(num % 2 == 0) {
         return `${num} eu sou par`
     } else {
         return num + "Eu sou impar"
     }
 }

console.log(NumberX(4))

 function ShortName (fullName) {
     const splitName = fullName.split(' ')
     const [firstName, ...rest] = splitName
     const lastName = rest[rest.length -1]
    
     return console.log(`${firstName} ${lastName}`)
 }

 ShortName('Maria Jose dos Santos')

 const name = 'Joao Doria Bosla'
 const transform = name.split(' ')

 const [first, second, third]

 const [first, ...rest] = transform

console.table(transform)
 console.log(first)
 console.log(second)
 console.log(rest)


 function ResponseBool(bool) {
    if(bool === true) {
         return 'yes'
     } else {
         return 'no'
     }
 }


// ternary 
 function ResponseBool(bool) {
     return bool ? 'Yes' : 'No'
 }

 console.log(ResponseBool(true))



// FUNÇÕES ANÔNIMA

const exampleAnonimo = function () {
    console.log('Eu sou uma função anonima')
}
console.log(exampleAnonimo())

//arrow
const arrowFunction = () => {
    return console.log('Sou uma arrow function')
}
arrowFunction()