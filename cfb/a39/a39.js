// const caixa1=document.querySelector("#caixa1")
// const btn_c=[...document.querySelectorAll(".curso")]

// console.log(caixa1.hasChildNodes())// retorna true se o elemento tiver filhos
// console.log(btn_c[0].hasChildNodes())// retorna true se o elemento tiver filhos
// //se retorna true, false, podemos usar a estrutura if
// console.log(btn_c[0].children())//retorna os elementos da coleção

//---------------testedecampo

const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]

console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)
//se retorna true, false, podemos usar a estrutura if
// if(btn_c[0].children.length > 0){
//     console.log(("possui filhos"))
// }else{
//     console.log(("nao possui filhos"))
// }

// if(caixa1.children.length > 0){
//     console.log(("possui filhos"))
// }else{
//     console.log(("nao possui filhos"))
// }

//----------------condição ternária.

console.log(caixa1.children.lentgh>0?"possui filhos":"nao possui filhos")
console.log(caixa1.firstElementChild.innerHTML="TESTE")
console.log(caixa1.children[1].innerHTML="TESTE")

//--------------conseguimos ir mais além, para aponstar-mos 
//um "pai" precisamos usar
console.log(c1_2.parentNode.parentNode.children[4])
