let adicionar = document.getElementById("adicionar")
let remover = document.getElementById("remover")
let input = document.getElementById("input")
let receber = document.getElementById("receber")

adicionar.addEventListener("click",()=>{

    if (input.value === "") {
        alert("erro")
        return 0
    }
    else{
        

        let div = document.createElement("div")
        div.textContent = input.value
        receber.appendChild(div)


    }
    input.value = ""
})

remover.addEventListener("click",()=>{
    if (receber.lastChild) {
        receber.lastChild.remove()
    }
})