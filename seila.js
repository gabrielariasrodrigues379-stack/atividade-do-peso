let altura = 1.71
let peso = "50"
let imc = calcularIMC(peso, altura)
let classificacao = classificarIMC(imc)

function calcularIMC(peso, altura){
    return peso / altura ** 2
}

function classificarIMC(imc) {
  if (imc <18.5 ){
        console.log ("você esta abaixo do peso")
    }else if (imc <=24.9) {
        console.log ("voce esta no peso recomendado")
    }
    else if (imc <=29.9) {
        console.log ("voce esta no sobrepeso")
    }else if (imc <=34.9) {
        console.log ("voce esta com obesidade grau I")
    }else if (imc <=39.9) {
        console.log ("voce esta com obesidade grau II")
    }else if (imc <=40.0) {
        return ("voce esta com obesidade grau III")
    }
}