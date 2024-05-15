// Exemplos
const pessoas = ["Alguem", "Outro", "Fulano"]
// Adiciona um elemento ao final do array
pessoas.push("Bia")
// Remove o ultimo elemento do array
pessoas.pop()
// Adiciona um elemento no inicio do array
pessoas.unshift("Caio")
// Remove o primeiro elemento do array
pessoas.shift()
// Atualizar o valor de um array
pessoas[1] = "Bella"
console.log(pessoas)

for(i=0;i<=10;i++){
    console.log(pessoas[1])
}

pessoas.forEach(
    function rodarArray(pessoa){
        console.log(pessoas)
    }
)

pessoas.forEach(pessoa => console.log(pessoa))

const pesoasModificado = pessoas.map(pessoa => console.log(pessoa + "!"))

function mudarPessoas(){
    return pessoas.map(pessoa => console.log(pessoa + "!"))
}