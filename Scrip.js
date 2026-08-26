```javascript
const button = document.getElementById("btn");
const colorCode = document.getElementById("colorCode");
const counterElement = document.getElementById("counter");

let counter = 0;

function colorAleatorio() {
    const caracteres = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += caracteres[Math.floor(Math.random() * 16)];
    }

    return color;
}

button.addEventListener("click", () => {

    const color = colorAleatorio();

    document.body.style.background = `
        linear-gradient(135deg, ${color}, #ffffff)
    `;

    colorCode.textContent = color;

    counter++;

    counterElement.textContent = counter;
});
```
