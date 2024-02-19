const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["html","css", "js", "php", "react", "mysql", "ReactNative"]

cursos.map((el,chave)=>{// para cada elemento
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id", "c"+chave)//(atributo, valor)
    novoElemento.setAttribute("class", "curso c1")//(atributo, valor)
    novoElemento.innerHTML=el

    const btn_lixeira=document.createElement("img")
    btn_lixeira.setAttribute("src","./img.jpg")
    btn_lixeira.setAttribute("class","btn_lixeira")
    btn_lixeira.addEventListener("click",(evt)=>{
        //(evento de click, função anonima.)
        caixa1.removeChild(evt.target.parentNode)
    })

    novoElemento.appendChild(btn_lixeira)

    
    
    caixa1.appendChild(novoElemento)
})

//para remover elementos


