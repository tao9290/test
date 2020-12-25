let slides = document.querySelectorAll(".slide");
let opts = document.querySelectorAll(".opt");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let silder = document.querySelector(".slider");

let index = 0;

prev.addEventListener("click", prevSilde);
next.addEventListener("click", nextSilde);

function clearCurrent() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("current");
    }
    for (let i = 0; i < opts.length; i++) {
        opts[i].classList.remove("active");
    }
}

function goNext() {
    clearCurrent();

    slides[index].classList.add("current");
    opts[index].classList.add("active");
}

function nextSilde() {
    if (index >= slides.length - 1) {
        index = 0;
    } else {
        index++;
    }

    goNext();
}

function prevSilde() {
    if (index <= 0) {
        index = slides.length - 1;
    } else {
        index--;
    }

    goNext();
}

for (let i = 0; i < opts.length; i++) {
    opts[i].addEventListener("click", function () {
        optIndex = this.getAttribute("option-index");
        index = optIndex;

        goNext();
    });
}

let timer = null;
function autoPlay() {
    timer = setInterval(() => {
        nextSilde();
    },3000);
}
autoPlay();

silder.addEventListener('mouseenter', () => {
    clearInterval(timer);
});

silder.addEventListener('mouseleave', () => {
    autoPlay();
});