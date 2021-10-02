function CarregarFilmes(){
//array --> variaveis com subdivisões (índices)
    let filmes = ["images/chegada.png" , "images/yesterday.png" , "images/escola.png" , "images/round6.jpg" , "images/fabricadechocolate.jpg" , "images/hunter.jpg"] 


    //laço de repetição
    for(let controle = 0 ; controle < 6 ; controle = controle + 1){
        document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmes [controle] + ">"
    }
}