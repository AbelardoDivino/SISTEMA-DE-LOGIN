let inputnome = document.getElementById("inputnome")
let inputsenha  = document.getElementById("inputsenha")
let enviar = document.getElementById("enviar")
const caracters = "!@#$%¨*|"

const maiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// Resultado: ["A", "B", "C", ..., "Z"]

const minusculas = "abcdefghijklmnopqrstuvwxyz".split('');
// console.log(alfabeto);

const numeros = '0123456789'.split("")

const receberdadospagina1 = document.getElementById("receberdadospagina1")

if (enviar) {
   enviar.addEventListener("click",(e)=>{

    // e.preventDefault();

    if (inputnome.value === "") {
       return alert("adicione o nome")
    }
    else if (inputsenha.value==="") {
       return alert("adicione a senha")
    }

    if (inputsenha.value.length < 8 || inputsenha.value.length > 40 ) {
      alert("erro tente novamente senha muito pequena minimo 8 e maximo 40 caracters")
    }

    let senha = inputsenha.value

let maiusc = maiuscula.some(letra => senha.includes(letra))
let temnumero = numeros.some(num => senha.includes(num))
let temespecial = [...caracters].some(c => senha.includes(c))

      // teste so com regex
      // let senha = inputsenha.value
      // let maiusc = maiuscula.test(senha)
      // let temnumero = numeros.test(senha)
      // let temespecial = caracters.test(senha)

      if(maiusc && temnumero && temespecial) {
         console.log("acesso permetido")
      }
    

    else{
      alert("senha precisa ter letra maiúscula, número e caractere especial")
    }
   
    localStorage.setItem("nome",inputnome.value) // envair para pagina 2
    localStorage.setItem("senha",inputsenha.value)

   window.location.href = "index2.html"
})

}

// if (receberdadospagina1) {
//    let nome = localStorage.getItem("nome")  //pegar da pagina1
//    let senha = localStorage.getItem("senha")

//    receberdadospagina1.innerHTML = `
//       <p>:${nome}</p>
//       <p>:${senha}</p>

//    `
// }