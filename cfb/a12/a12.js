/*
let n1=[10,20,30]

let n2=[11,22,33,44,55]

let n3
console.log("n1: "+n1)
console.log("n2: "+n2)
console.log("n3: "+n3)
*/
//==============
// let n1=[10,20,30]
// let n2=[11,22,33,44,55]
// let n3=[...n1]
// console.log("n1: "+n1)
// console.log("n2: "+n2)
// console.log("n3: "+n3)


//===========================
//concatençaõ de arrays
/*
let n1=[10,20,30]
let n2=[11,22,33,44,55]
let n3=[n1,n2] //ou let n3=[...n1,...n2] 
// console.log("n1: "+n1)
// console.log("n2: "+n2)
console.log("n3: "+n3)
*/
//=========================
/*
//spread
let n1=[10,20,30]
let n2=[11,22,33,44,55]
let n3=[...n1,...n2] //ou let n3=[...n1,...n2] 
// console.log("n1: "+n1)
// console.log("n2: "+n2)
console.log("n3: "+n3)
console.log("tipo de n3: " + typeof(n3))
*/
//==================================
/*
//+ex de spread
//dados iguais
const jogador1={nome:"bruno", energia:100, vidas: 3}
const jogador2={nome:"bruno", energia:100, vidas: 5}
const jogador3={...jogador1, ...jogador2}

console.log(jogador3)//{ nome: 'bruno', energia: 100, vidas: 5 }
//pp diferentes preserva a do ultimo.
*/
//==============
/*
//interpolação
const jogador1={nome:"bruno", energia:100, vidas: 3,magia:150}
const jogador2={nome:"bruno", energia:100, vidas: 5,velocidade:80}
const jogador3={...jogador1, ...jogador2}
//{ nome: 'bruno', energia: 100, vidas: 5, magia: 150, velocidade: 80 }

console.log(jogador3)
*/
//========função
// const soma=(v1,v2,v3)=>{
//     return v1+v2+v3
// }

// console.log(soma(1,5,4))//10
//============================
/*
const soma=(v1,v2,v3)=>{
    return v1+v2+v3
}
let val=[1,5,4]
//console.log(soma(valores))//eferenceError: valores is not defined
//ajustrando com spread
console.log(soma(...val))//10
// */
//=============================
/*
// pegar div e colocar dentro de uma coleção e mandar pro codigo js
const obj=document.getElementsByTagName("div")
console.log(obj)// isso não pode ser reconhecido pelo node
*/
/*
//=============diferença entre array e html colletion
const obj=document.getElementsByTagName("div")//HTML COLLECTION
const obj2=[...document.getElementsByTagName("div")]//{OBJETO}
//AQUI NO ARRAY EU POSSO ADCIONAR OUTROS VALORES
//FORA DO AMBITO HTML
console.log(obj)
console.log(obj2)
*/

//==========================================================
const obj=document.getElementsByTagName("div")
const obj2=[...document.getElementsByTagName("div")]

obj2.forEach(element => {
    element.innerHTML="curso"
});

console.log(obj)
console.log(obj2)
