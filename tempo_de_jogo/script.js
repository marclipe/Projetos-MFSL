function work() {
    var msg = window.document.getElementById('msg')
    var tem = window.document.getElementById('tempo')
    var data = new Date()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${min} minutos!`
    if(min >= 45){
        //Primeiro tempo 
        window.alert("Primeiro tempo!")
    } else if (min < 45 && min >= 90) {
        //Segundo Tempo
        window.alert("Segundo tempo")
    } else {
        //Fim de jogo 
        window.alert("Fim de jogo BOBO")
    }
}