    //array --> variaveis com subdivisões (índices)
    let filmes = ["images/chegada.png", "images/yesterday.png", "images/escola.png", "images/round6.jpg"]

//refatoração
//o que é?: melhorar um codigo existente.
function CarregarFilmes() {
let totalFilmes = filmes.length
let divListaFilmes = document.querySelector(".lista-filmes")

//limpando a carregar filmes, pra depois inserir as coisas dentro ( para nao ficar repetindo todas as imagens que ja tinham, enquanto adiciona outra)
    divListaFilmes.innerHTML = ""
    //laço de repetição
    for (let i = 0; i < totalFilmes ; i++) {
        divListaFilmes.innerHTML += "<img src=" + filmes[i] + ">"
    }
}

function AdicionarFilme(){
    let nomeFilme = document.querySelector("#nome-do-filme").value
    console.log(nomeFilme)
    let caminhoCompleto = "images/" + nomeFilme

    filmes.push(caminhoCompleto)

    CarregarFilmes()
}