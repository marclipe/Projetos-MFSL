function somar() {
    var n1 = window.document.getElementById('txtn1')
    var n2 = window.document.querySelector('input#txtn2')
    var resp = window.document.querySelector('div#resposta')
    var n1 = Number(n1.value)
    var n2 = Number(n2.value)
    var soma = n1 + n2; 
    resp.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${soma}</strong>`
    resp.style.background = '#DC136C'
}