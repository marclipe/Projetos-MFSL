function carregar() {
    var msg = window.document.getElementById('msg'); 
    var img = window.document.getElementById('imagem'); 
    var tempo = 10; 
    msg.innerText = `Sua categoria é ${prog}`; 
    if(tempo >= 5) {
        img.src = 'imagens/junior.png'; 
        document.body.style.background = '#84A9D9';
    } else if(tempo <= 6 && tempo > 9) {
        img.src = 'imagens/pleno.png'; 
    } else {
        img.src = 'imagens/senior.png'; 
    }
}