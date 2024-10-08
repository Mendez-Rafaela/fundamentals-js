// Exercícios 

// se a pessoa tirou abaixo de 4 = reprovado
// se a pessoa tirou 4 a 5 = recuperação
// 6 a 9 = aprovado
// 10 = excelente

const nota = 7

if (nota === 10) {
   console.log('Você é como a Uni9, sempre 10')
}  else if (nota >= 6 && nota <= 9) {
   console.log('Você está aprovada!')
}  else if (nota >= 4 && nota <= 5) {
   console.log('Você está de recuperação, estudo mais!')
}  else {
   console.log('Você está reprovado, tente outra vez!')
}

