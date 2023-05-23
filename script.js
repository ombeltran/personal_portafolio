let text = document.getElementById("overwrite-text");
let words = ["I am developer", "I am designer"];
let indice = 0;

setInterval(function() {
    text.innerHTML = words[indice];
    indice = (indice + 1) % words.length;
},5000);