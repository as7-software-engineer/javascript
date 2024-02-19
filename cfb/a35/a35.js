const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")

const btn_transferir=document.querySelector("#btn_transferir")
const todosCursos=[...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const curso=evt.target
        // console.log(curso)
        curso.classList.toggle("selecionado")
    })
})

btn_transferir.addEventListener("click", ()=>{
    const cursoSelecionado=[...document.querySelectorAll(".selecionado")]
    const cursoNaoSelecionado=[...document.querySelectorAll(".curso:not(.selecionado")]
    console.log()
    // console.log(cursoSelecionado)
    cursoSelecionado.map((el)=>{
        caixa2.appendChild(el)
    })
    cursoNaoSelecionado.map((el)=>{
        caixa1.appendChild(el)
    })
})