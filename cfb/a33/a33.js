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

const divTodas=[...document.getElementsByTagName("div")]
const cursosTodos=[...document.getElementsByClassName("curso")]
const cursosc1=[...document.getElementsByClassName("c1")]
//all ele que usam a classe c1
const cursosc2=[...document.getElementsByClassName("c2")]
const cursoespecial=document.getElementById("c1")
//all ele que usam a classe c2
//  const query_divTodas=[...document.querySelectorAll("div[class]")]//atributo class[]
 const query_divTodas=[...document.querySelectorAll("div > p")]//atributo class[]
 const query_cursosTodos=[...document.querySelectorAll(".curso")]
//  console.log(query_divTodas)
const query_cursosc1=[...document.querySelectorAll(".c1")]
//all ele que usam a classe c1
const query_cursosc2=[...document.querySelectorAll(".c2")]
const query_cursoespecial=document.querySelectorAll("#c1")[0]
//  console.log(query_cursosTodos)
// console.log(query_cursosc1)
// console.log(query_cursosc2)
// console.log(query_cursoespecial)
 //vai retornar o primeiro eleemnto que encontar pela

console.log(query_divTodas)
// console.log(cursosTodos)
// console.log(cursosc1)
// console.log(cursosc2)
// console.log(cursoespecial)

// cursosc1.map((e)=>{
//     e.classList.add("destaque")
// })

//-------------------------------------