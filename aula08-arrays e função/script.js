// Exercicio 1
const lista_num = [2,4,6,8]

let lista_nova = lista_num.map(num => num*2)

console.log(lista_nova)

function dobrar(lista){
    return lista.map(num => num*2)
}

let resultado = dobrar([1,2,3])
console.log(resultado)

// Exercicio 2

function maiusculo(array){
    return array.map(elemento => {elemento.toUpperCase()})
}

let resultado_2 = maiusculo(["ontem", "amanhã", "depois"])
console.log(resultado_2)

const filmes = [
    {
        nome: "Moana",
        Diretor: "Alguem",
        Ano: 2019
    },
    {
        nome: "Frozen",
        Diretor: "Alguem",
        Ano: 2006
    },
    {
        nome: "Valente",
        Diretor: "Alguem",
        Ano: 2015
    }
]

console.log(filmes.map(filmes => filmes.nome))