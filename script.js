let inputData = document.getElementById("number")
let generatorButton = document.getElementById("calc")
let finalresult = document.getElementById("result")


generatorButton.addEventListener("click", function() {
    if (inputData.value === ""){
        alert("Insira um número")
        return
    }

    if (inputData.value.length > 3) {
        alert("Só é permitido até três algarismos!")
        return
    }

    const numero = Number(inputData.value)
    if (isNaN(numero)) {
        alert("Não é permitido outra coisa a não ser números!")
    }

    let numerosParaCalculo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for (let calculo of numerosParaCalculo) {
        let result = numero * calculo
        let mensagem = `${numero} x ${calculo} = ${result}\n`
        console.log(mensagem)
        
        finalresult.value += mensagem
    }

})