const readline = require('readline-sync')

//meta fixa//
let meta = 10000

//O programa deverá solicitar os seguintes dados//

let nome = readline.question("Digite o nome do funcionário: ")
let cargo =readline.question("Digite o cargo: ")
let salarioBase = readline.questionFloat("Digite o salário base: ")
let resultado = readline.questionFloat("Digite o resultado alcançado (R$): ")

//Calculo do desempenho//

let desempenho = (resultado / meta )*100

//Verificação da meta//

let falta = 0
let percentualFalta = 0

if (resultado < meta){
   falta = meta - resultado
   percentualFalta = (falta / meta) * 100
}

//Classificação e bônus//

let classificacao
let bonus = 0

if (desempenho < 70) {
    classificacao = "Insuficiente"
    bonus = 0
} else if (desempenho < 100) {
    classificacao = "Satisfatório"
    bonus = salarioBase * 0.05
} else {
    classificacao = "Excelente"
    bonus = salarioBase * 0.10
}

console.log("=========Resultado=======")

let salarioFinal = salarioBase + bonus

console.log("Nome:", nome)
console.log("Cargo", cargo)
console.log("Desempenho:", desempenho.toFixed(2) + "%")
console.log("Classificação:", classificacao)
console.log("Bônus: R$", bonus.toFixed(2))
console.log("Salário Final: R$", salarioFinal.toFixed(2))
if (resultado < meta) {
    console.log("Faltou: R$", falta.toFixed(2))
    console.log("Percentual que faltou:", percentualFalta.toFixed(2) + "%")
}












