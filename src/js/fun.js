
const fullname = 'Lucas do Espirito Santo'
//metodo length
console.log(fullname.length, 'conta caracteres')

// 2º metodo length
const fruits = ['maça', 'pessego', 'uva', 'pera']

//conta caracteres
console.log(fruits.length, 'array')

// chama o ultimo elemento
console.table(fruits[fruits.length -1])


//metodo Slice (não costumamos usar por ser muito específico)
const cortaNome = fullname.slice(1, 5)
console.log(cortaNome)