let hamburguer = document.querySelector("#hamburguer");
//hamburguer coleta o ícone, que ao ser clicado chama a função na linha 7

let caixa = document.querySelector(".meio");
//a let caixa coleta a div que deverá ser exibida/ocultada dependendo do momento

hamburguer.addEventListener("click", function(){
    console.log("hell yeah, I did It!!!");

    //método TOGGLE adiciona/remove (dependendo do momento) a classe "ocultar"
    caixa.classList.toggle("ocultar");
})