const button = document.getElementById("btn");

function colorAleatorio() {
  // Genera un color HEX aleatorio
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return color;
}

button.addEventListener("click", () => {
  document.body.style.background = colorAleatorio();
});