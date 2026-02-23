const text = [
"Initializing operator profile...",
"Loading tools...",
"Establishing persistence...",
"Welcome, Oussama Zehri."
];

let line = 0;
let char = 0;
const speed = 40;

function type() {
    if (line < text.length) {
        if (char < text[line].length) {
            document.getElementById("typing").innerHTML += text[line][char];
            char++;
            setTimeout(type, speed);
        } else {
            document.getElementById("typing").innerHTML += "<br>";
            line++;
            char = 0;
            setTimeout(type, 400);
        }
    }
}

type();
