let valores=[0,1,7,4,2,9]

//for(let pos=0 ; pos<valores.length ; pos++){

for(let pos in valores){
    console.log(`a ${pos}° pos tem o valor ${valores[pos]}`)

}
let pos = valores.indexOf(8)
if(pos == -1){
    console.log(' o valor não foi encontrado!')
} else {
    console.log(`o valor 8 está na posição ${pos}`)
}
//vetor na tela

