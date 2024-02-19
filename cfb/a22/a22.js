// function soma(p1){
//     console.log(p1)
// }
// soma("as7")
// soma(2.5)
// soma(7)

//-------------------vamos bugar
// function soma(n1,n2){
//     console.log(n1+n2)//
// //     as7undefined
// // NaN
// // NaN
// }
// soma("as7")
// soma(2.5)
// soma(7)

//---atente-se a ordem em que vc lança os parametros.

// function soma(n1=0,n2=0){//tente iniciar os paramtros com algum 
//     //valor fixo
//     console.log(n1+n2)//
// }
// soma(105)

//------retornando resultado

// function soma(n1=0,n2=0){//tente iniciar os paramtros com algum 
//     //valor fixo
//     return n1+n2//
// }
// console.log(soma(10,10))

//inicie os param com const padrao
// const vp=0
// function soma(n1=vp,n2=vp){//tente iniciar os paramtros com algum 
//     //valor fixo
//     return n1+n2//
// }
// let rdf = soma(10,10) 
// console.log(rdf)

//-----------------
const vp=0

let valor=0

console.log(valor)
function add(v){
    return valor+v
}
valor=add(10)
console.log(valor)

function soma(n1=vp,n2=vp){//tente iniciar os paramtros com algum 
    //valor fixo
    return n1+n2//
}
let rdf = soma(10,10) 
//console.log(rdf)
