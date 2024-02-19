// let n=[10,20,30,40,50]

// for(let i=0; i<n.length;i++)
//     console.log(n[i])

//------------------------------
//for in
// let n=[10,20,30,40,50]
// for(i in n){
//     console.log(n[i])
// }

//-------------------------------
//for of
// let n=[10,20,30,40,50]

// for(i of n){
//     console.log(i)
// }
//---------------------------------
// const objt=document.getElementsByTagName("div")
// let n=[10,20,30,40,50]


// for(i of objt){
//     console.log(i)// seu quiser trocar tudo por "as7"
//     //basta usar i.innerHTML="as7"
// }

// for(i in objt){
//     console.log(i)
// }

let n=[10,20,30,40,50,60,0,50]
let vc50=[]
for(i in n){
    if(n[i]==50){
        vc50[i]=i
    }
}
console.log("o 50 foi encontrado nas posições: ")
for(i in vc50){
    console.log(vc50[i])
}




