const carros = ['corcel', 'chevette', 'opala', 'fusca', 'brasília', 'spazio']

console.log('Tem Opala?', carros.includes('opala'))
console.log('Tem Belina?', carros.includes('belina'))

/*
    includes() retorna true caso o argumento passado exista no vetor
    ou false, caso contrário.
*/