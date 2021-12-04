function carregar() {
    var data = new Date();
    var min = data.getMinutes(); 
    var fhora = document.getElementById('txttempo');
    var res = document.querySelector('div#res'); 
    
    if (fhora.value.length == 0 || Number(fhora.value) > min) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        window.alert('Vamos lá meu anjo!!'); 
    }
    
    
}