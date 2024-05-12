let inputData = document.getElementById("number")
let generatorButton = document.getElementById("calc")
let toast = document.getElementById("toast")
let statusInfo = document.getElementById("status")
let info = document.getElementById("info")
let statusBar = document.getElementById("status-bar")
let iconStatus = document.getElementById("icon-status")
let finalresult = document.getElementById("result")

generatorButton.addEventListener("click", function() {
    if (inputData.value === ""){
        toastExecution(
            "#F79202",
            "exclamation",
            "Atenção",
            "Insira um número!"
        )
        return
    }

    const numero = Number(inputData.value)
    if (isNaN(numero)) {
        toastExecution(
            "#DE1B23",
            "xmark",
            "Erro!",
            "Não é permitido outra coisa a não ser números!"
        )
        return
    }
    
    if (numero.toString().length > 3) {
        toastExecution(
            "#DE1B23",
            "xmark",
            "Erro!",
            "Só é permitido até três algarismos!"
        )
        return
    } else if (numero === 0) {
        toastExecution(
            "#F79202", 
            "exclamation", 
            "Atenção", 
            "Todo o número multiplicado por zero é zero!"
        ) 
        return
    }   

    if (finalresult.value) {
        finalresult.value = ""
    }

    let numerosParaCalculo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
    for (let calculo of numerosParaCalculo) {
        let result = numero * calculo
        let mensagem = `${numero} x ${calculo} = ${result}\n`
          
        finalresult.value += mensagem
    }
    
})

function toastExecution(color, iconName, status, description) {
    statusBar.style.backgroundColor = color
    iconStatus.innerHTML = `<i style="color: ${color};" class="fa-solid fa-circle-${iconName}"></i>`
    statusInfo.innerHTML = status
    info.innerHTML = description
    toast.classList.add("visible")
    setTimeout(function() {
        toast.classList.remove("visible")
    }, 5000)
}