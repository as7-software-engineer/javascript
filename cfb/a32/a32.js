// const cursosTodos=document.getElementsByClassName("curso")
// console.log(cursosTodos)

//para tranformar em array; spread

// const cursosTodos=[...document.getElementsByClassName("curso")]
// console.log(cursosTodos)

// //-----------------------------
// const cursosTodos=[...document.getElementsByClassName("curso")]
// const cursosc1=[...document.getElementsByClassName("c1")]
// //all ele que usam a classe c1
// const cursosc2=[...document.getElementsByClassName("c2")]
// //all ele que usam a classe c2
// console.log(cursosTodos)
// console.log(cursosc1)
// console.log(cursosc2)

// cursosTodos.map((e)=>{
//     e.classList.add("destaque")
// })

//--------------somente c1

const cursosTodos=[...document.getElementsByClassName("curso")]
const cursosc1=[...document.getElementsByClassName("c1")]
//all ele que usam a classe c1
const cursosc2=[...document.getElementsByClassName("c2")]
const cursoespecial=[...document.getElementsByClassName("curso")][0]
//all ele que usam a classe c2
console.log(cursosTodos)
console.log(cursosc1)
console.log(cursosc2)

cursosc1.map((e)=>{
    e.classList.add("destaque")
})

