let imagens = [
  "src/assets/enchente.png",
  "src/assets/enchente2.png",
  "src/assets/enchente3.png",
];

let i = 0;
let tempo = 5000;

function slideShow() {
  document.getElementById("slide-show").src = imagens[i];
  i++;

  if (i == imagens.length) {
    i = 0;
  }

  setTimeout("slideShow()", tempo);
}

slideShow();
