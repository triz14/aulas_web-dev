function calcular(){

var num = parseInt(document.getElementById("num").value)

for(i = 1; i <= 10; i++){
    var tabuada = num*i
    console.log(`A tabuada de ${num} é ${num} x ${i} = ${tabuada}`)
}

}