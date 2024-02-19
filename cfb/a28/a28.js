// //coleção básica
// const cursos=['html', 'css', 'js', 'php', 'react']
// cursos.map((ele, i)=>{
//     console.log("curso: " +ele+" - posição do curso: "+i)
// })

//====================================

// const cursos=['html', 'css', 'js', 'php', 'react']
// let c=cursos.map((ele, i)=>{
//     return "<div>" +ele+"</div>" 
// })
// console.log(c)

//==========================

//let ele=document.getElementsByTagName("div")
// ele=[...ele]
// console.log(ele)
// ele.map((e,i)=>{
//     e.innerHTML = "as7"
//    // console.log(e.innerHTML)
// })
//ou

// const ele=document.getElementsByTagName("div")
// const val=Array.prototype.map.call(ele,({innerHTML})=>innerHTML)
// console.log(val)

//=========================================
const converterInt=(e)=>parseInt(e)
const dobrar=(e)=>e*2
let n=['1','2','3','4','5'].map(dobrar)//o map tem elemento, poicao e array

console.log(n)











