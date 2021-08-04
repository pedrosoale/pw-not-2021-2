let nota = 7.3
let situacao

if(nota >= 6){
    situacao = 'APROVADO'
}
else {
    situacao = 'REPROVADO'
}

console.log(`Nota ${nota}, situação: ${situacao}`)

console.log('_______________________________')

// Usando o operador ternário
// consição ? resultado se verdadeiro : resultado se falso

situacao = nota >= 6 ? 'APROVADO' : 'REPROVADO'

console.log(`Nota ${nota}, situação: ${situacao}`)
console.log('_______________________________')

let user = 'guest'
let msg = user === 'admin' ? 'Pode logar' : 'Não pode logar'
console.log(msg)