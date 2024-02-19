// const caixa1=document.querySelector("#caixa1")
// const btn_c=[...document.querySelectorAll(".curso")]
// const c1_2=document.querySelector("#c1_2")

// // caixa1.appendChild(novoElemento)
// const novoElemento=document.createElement("div")
// novoElemento.setAttribute("id", "c7")//(atributo, valor)
// novoElemento.setAttribute("class", "curso c1")//(atributo, valor)
// novoElemento.innerHTML="ReactNative"

// caixa1.appendChild(novoElemento)

//adcionando os cursos dinamicamente

const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["html","css", "js", "php", "react", "mysql", "ReactNative"]

cursos.map((ele,chave)=>{// para cada elemento
const novoElemento=document.createElement("div")
novoElemento.setAttribute("id", "c"+chave)//(atributo, valor)
novoElemento.setAttribute("class", "curso c1")//(atributo, valor)
novoElemento.innerHTML="ReactNative"

caixa1.appendChild(novoElemento)
})

// // caixa1.appendChild(novoElemento)
// const novoElemento=document.createElement("div")
// novoElemento.setAttribute("id", "c7")//(atributo, valor)
// novoElemento.setAttribute("class", "curso c1")//(atributo, valor)
// novoElemento.innerHTML=ele

// caixa1.appendChild(novoElemento)
// //vamos ter o mesmo id pra todos os curso, isso não é funcional

