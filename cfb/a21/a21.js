// function canal(){//declaração
//     return "as7"
// } 
// console.log(canal())
// console.log(canal())
// console.log(canal())

//----------------------

// function canal(){//declaração
//     let n1=10
//     let n2=2
//     let res=n1+n2
//     return res
// } 
// let num = canal()
// console.log(num)

//-------par ou impar

function canal(){//declaração
    let n1=10
    let n2=2
    let res=n1+n2
    if(res%2==0)
        return "par"
    else//obs, so podemos retornar uma coisa, entao trate
    //isso.
        return "impar"
} 
let res = canal()
console.log(res)