// function aluno(nome, nota){
//     this.nome=nome
//     this.nota=nota
//     console.log(nome)
//     console.log(nota)

// }
// aluno("as7",100) 

//===========================

function aluno(nome, nota){
    this.nome=nome
    this.nota=nota
    
    this.dados_anonimo=function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        },3000)
    }
    this.dados_arrow=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },3000)
    }

}
const a1=new aluno("Bruno", 100)// estou usando 
//o esquema de classe
a1.dados_anonimo()
a1.dados_arrow()
