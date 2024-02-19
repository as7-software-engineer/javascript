
const caixaCursos=document.querySelector("#caixaCursos")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML", "CSS", "js", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")
const btnRemoverCurso=document.getElementById("btnCursoSelecionado")
const btnAdicionarNovoCursoAntes=document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois=document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso=document.getElementById("nomeCurso")

let indice=0

const tirarSelecao=(()=>{
    const cursosSelecionados=[...document.querySelectorAll(".curso")]
    cursosSelecionados.map((el)=>{
        el.classList.remove("selecionado")
    })
})



const criarNovoCurso=(curso)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id", "c"+indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML=curso
    novoElemento.addEventListener("click", (evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    } )
    return novoElemento
}

cursos.map((el,chave)=>{
    const novoElemento=criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const cursoSelecionado=()=>{
    const cursosSelecionado=[...document.querySelectorAll("input[type-radio]")]
        return cursosSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (evt)=>{
    try{
        alert("Curso selecionado: "+ cursoSelecionado().innerHTML)
    }catch(ex){
        alert("selecione um curso")
    }
})

btnRemoverCurso.addEventlistener("click", (evt)=>{
    const cs=radioSelecionado()
    if(cs!=undefined){
        cs.remove()
    }else{
        alert("selecione um curso")
    }
})
btnAdicionarNovoCursoAntes.addEventListener("click", (evt)=>{
    try{
        if(nomeCurso.value!=""){
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado())
        }else{
            alert("digite o nome do curso")
        }
    }catch(ex){
        alert("selecione um curso")
    }
})

btnAdicionarNovoCursoDepois.addEventListener("click", (evt)=>{
    try{
        if(nomeCurso.value!=""){
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling)
        }else{
            alert("digite o nome do curso")
        }
    }catch(ex){
        alert("selecione um curso")
    }
})
/* 
parentNode
childNodes(nodenumber)
firstChild
previousSimbling
*/
