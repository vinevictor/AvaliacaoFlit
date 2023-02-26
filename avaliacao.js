let circulo = document.querySelectorAll('img[src="./img/circuloVazio.png"]');

for (let index = 0; index < circulo.length; index++) {
  circulo[index].addEventListener("click", (event) => {
    event.target.src = "./img/circuloCheio.png";
  });
}

let estrela = document.querySelectorAll('img[src="./img/estrelaVazia.png"]');

estrela[0].addEventListener("click", (event) => {
  estrela[0].src = "./img/estrelaCheia.png";
});

estrela[1].addEventListener("click", (event) => {
  for (i = 0; i < 2; i++) {
    estrela[i].src = "./img/estrelaCheia.png";
  }
});

estrela[2].addEventListener("click", (event) => {
  for (i = 0; i < 3; i++) {
    estrela[i].src = "./img/estrelaCheia.png";
  }
});

estrela[3].addEventListener("click", (event) => {
  for (i = 0; i < 4; i++) {
    estrela[i].src = "./img/estrelaCheia.png";
  }
});

estrela[4].addEventListener("click", (event) => {
  for (i = 0; i < 5; i++) {
    estrela[i].src = "./img/estrelaCheia.png";
  }
});

let recomendacao = document.querySelectorAll('input[type="radio"]');
let classificacao = document.querySelectorAll('input[type="checkbox"]');

function recChange(event) {
  console.log("Recomendação:", event.target.value);
}
function clasChange(event) {
  console.log("Classificação:", event.target.value);
}
for (let index = 0; index < recomendacao.length; index++) {
  recomendacao[index].addEventListener("change", recChange);
}
for (let index = 0; index < classificacao.length; index++) {
  classificacao[index].addEventListener("change", clasChange);
}
