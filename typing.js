document.addEventListener("DOMContentLoaded", function () {

    const lines = [
        "Initializing operator profile...",
        "Loading tools...",
        "Establishing persistence...",
        "Welcome, Oussama Zehri."
    ];

    let lineIndex = 0;
    let charIndex = 0;
    const typingSpeed = 35;
    const lineDelay = 500;

    const typingEl = document.getElementById("typing");

    if (!typingEl) return;

    function typeLine() {
        if (lineIndex >= lines.length) return;

        const currentLine = lines[lineIndex];

        if (charIndex < currentLine.length) {
            typingEl.innerHTML += currentLine.charAt(charIndex);
            charIndex++;
            setTimeout(typeLine, typingSpeed);
        } else {
            typingEl.innerHTML += "<br>";
            lineIndex++;
            charIndex = 0;
            setTimeout(typeLine, lineDelay);
        }
    }

    typeLine();

});
