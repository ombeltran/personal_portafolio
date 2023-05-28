let text = document.getElementById("overwrite-text");
let words = ["Designer", "Freelancer", "Engineer"];
let indice = 0;

setInterval(function() {
    text.innerHTML = words[indice];
    indice = (indice + 1) % words.length;
},1500);


// Manage menu bar
const toggleMenu = document.getElementById("toggle-menu");
const navMenu = document.querySelector("nav");
let miSize = 0;

toggleMenu.addEventListener('click', () => {
    navMenu.style.visibility = 'visible';
    miSize = 1;
});

navMenu.addEventListener('click',() => {
    if (miSize === 1){
        navMenu.style.visibility = 'hidden';
    }
});