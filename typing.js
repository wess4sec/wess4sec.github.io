document.addEventListener("DOMContentLoaded", function () {

const text = [
"Initializing operator profile...",
"Loading tools...",
"Establishing persistence...",
"Welcome, Oussama Zehri."
];

let line = 0;
let char = 0;
const speed = 35;

const typingElement = document.getElementById("typing");

function typeLine() {
    if (line >= text.length) return;

    if (char < text[line].length) {
        typingElement.innerHTML += text[line].charAt(char);
        char++;
        setTimeout(typeLine, speed);
    } else {
        typingElement.innerHTML += "<br>";
        line++;
        char = 0;
        setTimeout(typeLine, 500);
    }
}

typeLine();

});
