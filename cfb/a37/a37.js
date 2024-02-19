// const caixa1=document.querySelector("#caixa1")
// const btn_c1=document.querySelector("#c1")
// //vamos usar fuunção anonima
// caixa1.addEventListener("click", (evt)=>{
//     console.log("clicou")
//     console.log(evt)
// })
// //quando o evento de click ocorre, ele é passado para dentro
// //do ()=>{ou seja, vem pro primeiro parametro

// btn_c1.addEventListener("click", (evt)=>{
//     evt.stopPropagation()

// })
//=============================================
//para parar em, todos que tem em comum a classe  curso;

const caixa1=document.querySelector("#caixa1")
const btn_c1=document.querySelector("#c1")
const cursos=[...document.querySelectorAll(".curso")]

//vamos usar fuunção anonima
caixa1.addEventListener("click", (evt)=>{
    console.log("clicou")
    console.log(evt)
})
//quando o evento de click ocorre, ele é passado para dentro
//do ()=>{ou seja, vem pro primeiro parametro

cursos.map((el)=>{//cada elemento dessa coleçao
    el.addEventListener("click", (evt)=>{
        evt.stopPropagation()
    })
})

