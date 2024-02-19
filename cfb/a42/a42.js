const filtroMaior18=(valor)=>{//use a função dentro ()
    //do anterior
    if(valor >=18){
        return valor
    }
} 

const idades=[15,21,30,17,18,44,12,50]
const maior=idades.filter((val, ind, arr)=>{
    if(val >= 18)
        return val
})
const menor=idades.filter((val, ind, arr)=>{
    if(val<18)
        return val
})
// const filtroMaior18=(valor,índice,array)=>{
    //valor, pos de v e o array
    //n obrigatório inserir todos os param

console.log(idades)
console.log(maior)
console.log(menor)
