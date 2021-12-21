function work() {
    var data = new Date()
    var min = data.getMinutes()
    var msg = window.document.getElementById('txttempo')
    var tempo = window.document.getElementById('tempo')

    var tpnome = document.getElementsByName('txttempo')
                
    if(msg >= 45){
        //Primeiro tempo 
        window.alert("Primeiro tempo!")
    } else if (msg < 45 && msg >= 90) {
        //Segundo Tempo
        window.alert("Segundo tempo")
    } else {
        //Fim de jogo 
        window.alert("Fim de jogo BOBO")
    }

    tempo.innerHTML = `Detectamos o tempo ${min}`  
    tempo.style.background = '#002040'
    tempo.style.color = '#FFFFFF'
}