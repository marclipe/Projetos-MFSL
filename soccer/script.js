function carregar() {
    var data = new Date();
    var min = data.getMinutes(); 
    var fhora = document.getElementById('txttempo');
    var res = document.querySelector('div#res'); 
    
    if (fhora.value.length == 0 || Number(fhora.value) > min) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var radtime = document.getElementsById('radtime');
        var tipo_do_tempo = ''; 
        var tempo = Number(fhora.value); 
        if (radtime[0].checked) {
            tipo_do_tempo = 'Primeiro'; 
            if(tempo >= 0 && tempo >= 45){
                window.alert("Primeiro tempo de jogo"); 
            } else if (tempo <= 91 && tempo >= 105) {
                window.alert("Primeiro tempo de Prorrogação!"); 
            }
        } else if(radtime[1].checked) {
            tipo_do_tempo = 'Segundo';  
            if (tempo <= 46 && tempo >= 90) {
                window.alert("Estamos no Segundo tempo de jogo")
            } else if (tempo <= 106 && tempo >= 120) {
                window.alert("Estamos no Segundo tempo de Prorrogação")
            }
        } else {
            window.alert("Aí acabou o jogo eu tapado");
        }
    }   
    res.innerHTML = `Você está no tempo ${tipo_do_tempo} e ${tempo}`
}