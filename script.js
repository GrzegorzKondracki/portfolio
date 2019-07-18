// Menu
const burger = document.querySelector(".burger");
const iconBars = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const navBelt = document.querySelector(".nav");
const body = document.querySelector("body");

burger.addEventListener("click", function () {
    iconBars.classList.toggle("show");
    iconX.classList.toggle("show");
    navBelt.classList.toggle("show");
    body.classList.toggle("show");
})

// Letters
const h2Text = document.querySelector('.h2text');
const spanCursor = document.querySelector('.cursor');
const text = 'Grzegorz Kondarcki, Web Developer.';

let indexText = 0;
const time = 80;

const addLetter = () => {
    h2Text.textContent += text[indexText];
    indexText++;
    if (indexText === text.length) clearInterval(indexTyping);
}

const cursorAnimation = () => {
    spanCursor.classList.toggle('go');
}

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);



// Scrolling to section


document.querySelector("#about").addEventListener('click', () => window.scrollTo({
    top: 850,
    behavior: 'smooth',
}));