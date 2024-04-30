function velocidade() {
    var vel = parseInt(document.getElementById("vel").value)
    var multa = ""

    if (vel > 60) {
        var velocidade = vel - 60
        var multa = 100*velocidade
    } else { 
        var multa = "parabéns, você respeitou as leis"
    } 
    resultado.innerText = `${multa}`
}