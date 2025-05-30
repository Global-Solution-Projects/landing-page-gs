const iconeAgua = document.getElementById("icone-agua");
const iconeFogo = document.getElementById("icone-fogo");
const iconePlanta = document.getElementById("icone-planta");

iconeAgua.addEventListener("click", () => {
  document.documentElement.style.setProperty("--cor-principal", "#3572ef");
  document.documentElement.style.setProperty("--cor-gradiente", "#3572ef");
});

iconeFogo.addEventListener("click", () => {
  document.documentElement.style.setProperty("--cor-principal", "#FA1E1E");
  document.documentElement.style.setProperty("--cor-gradiente", "#9C1F1F");
});

iconePlanta.addEventListener("click", () => {
  document.documentElement.style.setProperty("--cor-principal", "#1BBF36");
  document.documentElement.style.setProperty("--cor-gradiente", "#26824E");
});
