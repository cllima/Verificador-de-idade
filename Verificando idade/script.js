function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var forAno = document.getElementById('ano')
    var res = document.querySelector('div#res')

    if (forAno.value.length == 0 || forAno.value > ano ){
        alert('[ERRO] Verifique os dados e tente novamente!!')
   } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(forAno.value)
        res.innerHTML = `Idade calculado: ${idade}`
        var genero = ''
        // criando dinamicamente as imagens //
        var img  = document.createElement('img')  
        img.setAttribute('id','foto')

        if (sexo[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade <= 12){ 
                img.setAttribute('src','imagens/foto_h_crianca.png')

            }else if (idade <= 21){ 
                img.setAttribute('src','imagens/foto_h_jovem.png')

            } else if (idade < 50){ 
                img.setAttribute('src','imagens/foto_h_adulto.png')

            } else { 
                img.setAttribute('src','imagens/foto_h_idoso.png') 
            }
        }else if (sexo[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade <= 12){ 
                img.setAttribute('src','imagens/foto_m_crianca.png')

            }else if (idade <= 21){ 
                img.setAttribute('src','imagens/foto_m_jovem.png')

            } else if (idade < 50){ 
                img.setAttribute('src','imagens/foto_m_adulta.png')

            } else { 
                img.setAttribute('src','imagens/foto_m_idosa.png') 
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }}