let text = document.getElementById("overwrite-text");
let words = ["Designer", "Freelancer", "Engineer"];
let indice = 0;

setInterval(function() {
    text.innerHTML = words[indice];
    indice = (indice + 1) % words.length;
},1500);