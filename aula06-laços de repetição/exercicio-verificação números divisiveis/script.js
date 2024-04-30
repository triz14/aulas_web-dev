function divisor(){
    var num = parseInt(document.getElementById("num").Value)
    
    for(i=1; i<=num; i++){
        if(numero%i === 0){
            console.log(i)
        }
    }
}