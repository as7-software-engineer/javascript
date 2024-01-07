function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length==0 || fim.value.length==0 || passo.value.length==0){
        res.innerHTML='inpossível contar'
       // window.alert('erro, faltam dados a serem fornecidos')
    } else {
        res.innerHTML='contando: <br>'
        let i = Number(ini.value)
        let f =  Number(fim.value)
        let p = Number(passo.value)

        if(p<=0){
            window.alert('passo inválido! considerando passo 1')
            p = 1
        }

        if (i<f) {
            for(let c=i;c<=f;c+=p){
                if(c==f){
                    res.innerHTML+= `${c} fim`
                }else{
                    res.innerHTML += `${c} \u{1F449}`
                }
            }
        }else{
            for(let c=i;c>=f;c-=p){
                if(c==f){
                    res.innerHTML+= `${c} fim`
                }else{
                    res.innerHTML += `${c} \u{1F449}`
                }
            }
        }
    }
}