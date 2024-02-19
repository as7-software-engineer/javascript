// // function msg(){
// //     alert('kikou')
// // }
// //OU ARROW FUNCTION(FUNÇÃO ANONINA DE SETA)
// const msg=()=>{
//     alert('kikou')
// }
//vamos tratar tudo aqui pelo js. ------------------

// const c1= document.getElementById("c1")
// //ou
// //const c1=document.querySelector("#c1)
// const msg=()=>{
//     alert('kikou')
// }
// //adicionando o evento no elemento.
// //adcioanndo um escutador ao c1, monitorador
// //addEventListener("evento", on)
// c1.addEventListener("click", msg)//se tiver argumento use ()
//====================================

// // const c1 = document.getElementById("c1")
// //ou
// const c1=document.querySelector("#c1")
// const msg=()=>{
//     alert('kikou')
// }
// //adicionando o evento no elemento.
// //adcioanndo um escutador ao c1, monitorador
// //addEventListener("evento", on)
// c1.addEventListener("click",(evt)=>{
//     // console.log(evt.target)
//     const el=evt.target
//     el.classList.add("destaque")
// })

//vamos obter em todos os cursos.=============

// // const c1 = document.getElementById("c1")
// //ou
// // const c1=document.querySelector("#c1")
// const cursos=[...document.querySelectorAll(".curso")]

// cursos.map((ele)=>{
//     ele.addEventListener("click", (evt)=>{
//         const el=evt.target
//         el.classList.add("destaque")
//     })
// })


// //adicionando o evento no elemento.
// //adcioanndo um escutador ao c1, monitorador
// //addEventListener("evento", on)
// // c1.addEventListener("click",(evt)=>{
// //     // console.log(evt.target)
// //     const el=evt.target
// //     el.classList.add("destaque")
// // })
//----------------------------------------------------

// const c1 = document.getElementById("c1")
//ou
// const c1=document.querySelector("#c1")
const cursos=[...document.querySelectorAll(".curso")]

cursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const el=evt.target
        el.classList.add("destaque")
        //console.log(el.id + " foi clicado")
        //ou
        console.log(el.innerHTML + " foi clicado")
    })
})


//adicionando o evento no elemento.
//adcioanndo um escutador ao c1, monitorador
//addEventListener("evento", on)
// c1.addEventListener("click",(evt)=>{
//     // console.log(evt.target)
//     const el=evt.target
//     el.classList.add("destaque")
// })