let adicionar = document.getElementById("adicionar")
let remover = document.getElementById("remover")
let input = document.getElementById("input")
let receber = document.getElementById("receber")
let selecionado = null

adicionar.addEventListener("click",()=>{

    if (input.value === "") {
        alert("erro")
        return 0
    }
    
        

        let div = document.createElement("div")
        div.textContent = input.value
        // receber.appendChild(div)

        //remover por seleçao

        div.addEventListener("click",()=>{

               let itens = receber.children
        for(let i = 0; i < itens.length;i++){
            itens[i].classList.remove("selecionado")
        }

        div.classList.add("selecionado")
        selecionado = div


        })


     

    
    receber.appendChild(div)
    input.value = ""
})



remover.addEventListener("click", () => {

    if (selecionado) {
        selecionado.remove()
        selecionado = null
    }
    else{
           alert("erro")
    }

})
