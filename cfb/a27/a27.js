// function* cores(){
//     yield 'vermelho'//rendimento
//     yield 'verde'
//     yield 'azul'
// }
// const itc=cores()
// console.log(itc)//Object [Generator] {}

//-------------------------------------/

// function* cores(){
//     yield 'vermelho'//rendimento
//     yield 'verde'
//     yield 'azul'
// }
// const itc=cores()//ou let itc=cores
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)

//--------------------------------------

// function* perguntas(){
//     const nome=yield 'qual seu nome?'
//     const esporte=yield 'qual seu esporte favorito?'
//     return "seu nom é " + nome + ", seu esporte favorito é o(a) " + esporte+"."
// }
// const itp=perguntas()
// console.log(itp.next().value)
// console.log(itp.next('as7').value)
// console.log(itp.next('natação').value)

//------------------------------------f() geradora *
// function* contador(){
//     let i=0
//     while(true){
//         yield i++
//     }
// }
// const itc=contador()
// console.log(itc.next().value)
// console.log(itc.next().value)

//----------------------------------

function* contador(){
    let i=0
    while(true){
        yield i++
        if(i>5)
            break
    }
}
const itc=contador()
for(let c of itc){
    console.log(c)
}