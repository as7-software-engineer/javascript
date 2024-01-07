function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    //var res = document.getElementById('res')
    var res = document.querySelector('div#res')
    if (fano.value.length==0 || fano.value > ano || fano.value < ano-100) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      res.innerHTML = `idade calculada: ${idade}`
      var mh = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')

      if (fsex[0].checked){
        mh = 'homem'
        if (idade >= 0 && idade < 10){
            //ciranca
            img.setAttribute('src', 'bm.png')

        } else if (idade>= 10 && idade <21) {
            //jovem
            img.setAttribute('src','jm.png')
        } else if(idade >= 21 && idade < 50){
            //adulto
            img.setAttribute('src','am.png')
        }else{
            //idoso
            img.setAttribute('src','im.png')
        }

      } else if (fsex[1].checked){
        mh = 'mulher'
        if (idade >= 0 && idade < 10){
            //ciranca
            img.setAttribute('src', 'bf.png')

        } else if (idade>= 10 && idade <21) {
            //jovem
            img.setAttribute('src','jf.png')
        } else if(idade >= 21 && idade < 50){
            //adulto
            img.setAttribute('src','af.png')
        }else{
            //idoso
            img.setAttribute('src','if.png')
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `detectamos ${mh} com ${idade} anos.`
      res.appendChild(img)
    }


}