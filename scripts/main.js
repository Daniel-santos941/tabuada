let tabuada = prompt("Digite um número para a multiplicação");

if (tabuada === "" || tabuada === null) {
    alert("Insira um número")
}

const numero = Number(tabuada)
if (isNaN(numero)) {
    alert("Não é permitido outra coisa a não ser números")
}

let numerosParaCalculo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let calculo of numerosParaCalculo) {
    let result = numero * calculo 
    let mensagem = `${numero} x ${calculo} = ${result} </br>`

    document.write(mensagem)
}



