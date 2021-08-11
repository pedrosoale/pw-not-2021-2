// Forma é um parâmetro opcional. Sendo assim, ele não
// precisa ser informado na chamada da função. Caso
// tenha sido omitido, assumirá o valor 'R'.
function areaForma(base, altura, forma = 'R') {
    let area 
    switch(forma) {
        case 'R': // retangulo
            area = base * altura
            break
        case 'T': // triangulo
            area = (base * altura) / 2
            break
        case 'E': // elipse
            area = (base / 2) * (altura / 2) * Math.PI
    }
    return area
}

console.log(`Retângulo 45x15: ${areaForma(45, 15, 'R')}`)
console.log(`Triângulo 45x8: ${areaForma(45, 8, 'T')}`)
console.log(`Elipse 12x16: ${areaForma(12, 16, 'E')}`)
console.log(`Quadrado 15x15: ${areaForma(15, 15)}`)
console.log(`Retângulo 5x15: ${areaForma(5, 15)}`)