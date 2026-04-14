const readline = require('readline-sync')

//meta fixa//
let meta = 10000

//O programa deverá solicitar os seguintes dados//

let nome = readline.question("Digite o nome do funcionário")
let cargo =readline.question("Digite o cargo")
let salarioBase = readline.questionFloat("Digite o salário base")
let resultado = readline.questionFloat("Digite o resultado alcançado (R$):")

//Calculo do desempenho//

let desempenho = (resultado / meta )*100

//Vereficação da meta//

let falta = 0
let percentualFalta = 0

let = (resultado < meta)
 falta = meta - resultado

//Classificação e bônus//

let classificação
let bonus = 0

if (desempenho < 70){
    console.log("Classifição insuficente")
} else {
    console.log("Classifição satisfatório")
    bonus = salarioBase *0.05

    console.log("Classificação Excelente")
    bonus = salarioBase *0.10
}

console.log("=========Resultado=======")

let salarioFinal = salarioBase + bonus

console.log("Nome")
console.log("Cargo")
console.log("Desempenho fixo(2) + %")
console.log("Faltou fixo (2)")
console.log("Classificação")
console.log("Bônus fixo")
console.log("Salário Final  salarioFinal fixo(2)")













