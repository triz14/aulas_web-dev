function calcular() {
    var numBook = parseInt(document.getElementById("numBook").value)

    if (numBook <= 6 ) {
        document.getElementById("resultado").innerText = numBook * 22
    } else {
        document.getElementById("resultado").innerText = numBook * 15
    }

}

// Resolução Professor:
// var resultado = document.getElementById('resultado')

// function calcular() {
//     var livros = parseInt(document.getElementById('numBook').value);
//     var preco = ""
//     var total = livros*preco

//     if(livros > 6){
//         var preco = 15
//     }else{
//         var preco = 22
//     }


//     resultado.innerText = `o preço é ${total}`
// }