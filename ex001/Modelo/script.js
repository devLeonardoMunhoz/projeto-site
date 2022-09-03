function carregar() {
    var msg = window.document.getElementById('msg')
    var imag = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora > 0 && hora < 12) {
        msg.innerHTML = `Bom Dia, agora são ${hora} horas.`
        imag.src = '../fotos/manhafoto.png'
        document.body.background = '#776620'
    }else if(hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa Tarde, agora são ${hora} horas.`
        imag.src = '../fotos/tardefoto.png'
        document.body.style.background = '#7c3218'
    }else {
        msg.innerHTML = `Boa Noite, agora são ${hora} horas.`
        imag.src = '../fotos/noitefoto.png'
        document.body.style.background = '#00141f'
    }
}