function carregar() {
    var msg = window.document.getElementById('msg') 
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 12
    var min = data.getMinutes()
   
    msg.innerHTML = `agora são ${hora}h${min}min.`

    if(hora>=0 && hora<12){
        //console.log('bom dia')
        img.src = 'fotomanha.png'
        document.body.style.background = '#efdbc4'
        sdc.innerHTML = 'bom dia'

    }else if(hora>=12 && hora <18){
        console.log('boa tarde')
        img.src = 'fototarde.png'
        document.body.style.background = "#add0f0"
        sdc.innerHTML = 'boa tarde'
    }else{
        console.log('boa noite')
        img.src = 'fotonoite.png'
        document.body.style.background = "#0a191c"
        sdc.innerHTML = 'boa noite'
    }
}
