"use strict"

/*if(true){
    //var nome="Bruno"//com var, conseguimos 
    //acessar de outro escopo
    let nome="Bruno"

}
console.log(nome)
*/

//==============

/*
function teste(){
    let nome = "bruno" // mesmo se utlilizar
    //vai da erro no var, onde pois existeo escopo
    // da função.
    if(true){
        console.log("in de if de teste: " + nome)
    }
    console.log("in teste: " + nome)
}
teste()
console.log("out de teste: " + nome)
*/

//======================
/*
"use strict"
let nome= "bruno"
nome="cfb cursos"
nome=10
const curso="javascript"
curso="html"//xxx erro
console.log(curso)
*/

//====================

/*
function teste(){
    if(true){
        //var nome = "bruno"// aqui é para dar 
        //erro
        let nome = "bruno"
        
        console.log("in de if de teste: " + nome)
    }
    console.log("in teste: " + nome)// aqui é para dar 
    //erro
}
teste()
console.log("out de teste: " + nome)
*/

//======================

"use strict"

let nome="Bruno"
nome ="cfb cursos"
nome =10
const curso="JS"
console.log(curso)
