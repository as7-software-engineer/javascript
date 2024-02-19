// function soma(...valores){//spread faz o esp. de param
//     return valores.length//largura do param valores
// }
// console.log(soma(10,5))

//como operar os valores

// function soma(...valores){
//     let tam=valores.length
//     let res=0

//     for (let i = 0;i<tam;i++){
//         res+=valores[i]
//     }
//     return res
// }
// console.log(soma(10,5,20))

//otimizando------------
function soma(...valores){
    let res=0

    for(let v of valores)
        res+=v
    return res
}
console.log(soma(10,5,20))