// const f=function(v1,v2){return v1+v2}
// console.log(f(10,5))

///----------------usando rest + spread


//funçoes contrutor; classes

const f=new Function("v1","v2","return v1 + v2 ")//F maiúsculo
//função construtor que é uma f() anonima  
console.log(f(10,5))//precisamos ser esclarecidos