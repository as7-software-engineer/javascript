let n = 0
let max=1000

// while(n < max){
//     console.log("as7 - "+n)
//     n++
// }
// console.log("fim")

//---------------------break
// while(n < max){
//     if(n>10)
//         break//imprime o 10
//     console.log("as7 - "+n)
//     // if(n>10)
//     //     break//imprime ate o 11
//     n++
// }
// console.log("fim")

//--------------------------
let p=0//pares
// for(let i=n; i<max; i++){
//     console.log("as7 - "+n)
//     if(i%2==0)
//         p+=1
// }
// console.log("quantidade de pares: "+p)
// console.log("fim")

for(let i=n; i<max; i++){
        if(i%2!=0)
            continue
        p++
    }
 
console.log("quantidade de pares: "+p)
console.log("fim")