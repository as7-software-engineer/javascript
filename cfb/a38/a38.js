const caixa1= document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]

// console.log(caixa1)
// console.log(caixa1.children[caixa1.children.length-1])//ultimo
//ou
// console.log(caixa1.firstElementChild)//primeiro
// console.log(caixa1.lastElementChild)//ultimo
// console.log(caixa1.children)//TODOS OS ELE

//---------------------nó raiz (root node)
console.log(document.getRootNode())

//---------------------nó raiz (owner doc)proprietario
console.log(btn_c[0].ownerDocument)//propriedade


