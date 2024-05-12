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
        statusBar.style.backgroundColor = "#F79202"
        iconStatus.innerHTML = '<i style="color: #F79202;" class="fa-solid fa-circle-exclamation"></i>'
        statusInfo.innerHTML = "Atenção!"
        info.innerHTML = "Insira um número"
        toast.classList.add("visible")
        setTimeout(function() {
            toast.classList.remove("visible")
        }, 5000)
        return
    }

    if (inputData.value.length > 3) {
        statusBar.style.backgroundColor = "#DE1B23"
        iconStatus.innerHTML = '<i style="color: #DE1B23;" class="fa-solid fa-circle-xmark"></i>'
        statusInfo.innerHTML = "Erro!"
        info.innerHTML = "Só é permitido até três algarismos!"
        toast.classList.add("visible")
        setTimeout(function() {
            toast.classList.remove("visible")
        }, 5000) 
        return
    }

    const numero = Number(inputData.value)
    if (isNaN(numero)) {
        statusBar.style.backgroundColor = "#DE1B23"
        iconStatus.innerHTML = '<i style="color: #DE1B23;" class="fa-solid fa-circle-xmark"></i>'
        statusInfo.innerHTML = "Erro!"
        info.innerHTML = "Não é permitido outra coisa a não ser números!"
        toast.classList.add("visible")
        setTimeout(function() {
            toast.classList.remove("visible")
        }, 5000) 
        return
    }

    let numerosParaCalculo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
    for (let calculo of numerosParaCalculo) {
        let result = numero * calculo
        let mensagem = `${numero} x ${calculo} = ${result}\n`
        console.log(mensagem)
        
        finalresult.value += mensagem
    }

})