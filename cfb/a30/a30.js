// const dc1=document.getElementById("c1")
// console.log(dc1)
// console.log(dc1.id)
// console.log(dc1.innerHTML)
// //para alterar innerHTML="x"
// dc1.innerHTML="augustoso"

//---------------------
// const dc1=document.getElementById("c1")
// const dc2=document.getElementById("c2")
// const dc3=document.getElementById("c3")
// const dc4=document.getElementById("c4")
// const dc5=document.getElementById("c5")
// const dc6=document.getElementById("c6")

// const arrayElements=[dc1,dc2,dc3,dc4,dc5,dc6]

// console.log(arrayElements)
//===========alterar todos usando for of

// const dc1=document.getElementById("c1")
// const dc2=document.getElementById("c2")
// const dc3=document.getElementById("c3")
// const dc4=document.getElementById("c4")
// const dc5=document.getElementById("c5")
// const dc6=document.getElementById("c6")

// const arrayElements=[dc1,dc2,dc3,dc4,dc5,dc6]

// for(d of arrayElements)
//     d.innerHTML="encaixaxota"

// console.log(arrayElements)

//===========alterar todos usando map

const dc1=document.getElementById("c1")
const dc2=document.getElementById("c2")
const dc3=document.getElementById("c3")
const dc4=document.getElementById("c4")
const dc5=document.getElementById("c5")
const dc6=document.getElementById("c6")

const arrayElements=[dc1,dc2,dc3,dc4,dc5,dc6]

// for(d of arrayElements)
//     d.innerHTML="encaixaxota"

arrayElements.map((e)=>{
    e.innerHTML="CFB cursos"
    console.log(e)
})

// console.log(arrayElements)