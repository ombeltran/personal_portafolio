let text = document.getElementById("overwrite-text");
let words = ["Designer", "Freelancer", "Engineer"];
let indice = 0;

setInterval(function() {
    text.innerHTML = words[indice];
    indice = (indice + 1) % words.length;
},1500);


// Manage menu bar
const toggleMenuHamb = document.getElementById("menuHamburguer");
const toggleMenuClose = document.getElementById("menuClose");
const navMenu = document.querySelector("nav");
let miSize = 0;

toggleMenuHamb.addEventListener('click', () => {
    navMenu.style.display = 'flex';
    toggleMenuHamb.style.display = 'none';
    toggleMenuClose.style.display = 'flex';
    miSize = 1;
});

navMenu.addEventListener('click',() => {
    if (miSize === 1){
        navMenu.style.display = 'none';
        toggleMenuClose.style.display = 'none';
        toggleMenuHamb.style.display = 'flex';
    }
});

toggleMenuClose.addEventListener('click', () => {
    if (miSize === 1){
        navMenu.style.display = 'none';
        toggleMenuClose.style.display = 'none';
        toggleMenuHamb.style.display = 'flex';
    }
})