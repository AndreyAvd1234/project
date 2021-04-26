const errorMessage = () => alert("Введите корректное выражение!");
const calculate = () => {
    let data = prompt("Введите выражение, которое хотите посчитать!", "");
    if (data === null) {
        alert("Ввод отменен!");
    } else {

        try {
            data = data.replace(/,/g, ".");
            let result = eval(data);
            if (data === "") {
                alert("Вы ничего не ввели!");
            } else if (result === Infinity || result === -Infinity) {
                alert("Hа нуль делить нельзя!");
            } else if (isNaN(result)) {
                errorMessage();
            } else {
                alert(result)
            }
        } catch {
            errorMessage();
        }
    }

};
const calculator = document.getElementById("calculator");
// calculator.onclick = () => alert('hello');
calculator.addEventListener("click", calculate);


const menuBurger = document.getElementById("menu-burger");
const menu = document.getElementById("menu");

menuBurger.addEventListener("click", () => toggleclass(menu, "menu-none"));

function toggleclass(elem, className) {
    elem.classList.toggle(className);
}


// slider
const slides = document.getElementById("slides");
const slide = document.querySelectorAll(".slide");
const slideTime = 2000;
const leftToggle = document.getElementById("leftToggle");
const rightToggle = document.getElementById("rightToggle");
const toggleRadio = document.getElementById("toggleRadio");
const toggleInput = toggleRadio.querySelectorAll("input");
const slidesMin = document.getElementById("slidesMin");
const slideMin = slidesMin.querySelectorAll(".slide-min");



slides.addEventListener("mouseover", stopSlide);
slides.addEventListener("mouseout", continueSlideIntervall);
rightToggle.addEventListener("click", showNextSlide);
leftToggle.addEventListener("click", showPreviousSlide);
toggleRadio.addEventListener("input", toggleSlide)
slidesMin.addEventListener("click", toggleMinSlide);




let currentSlide = 0;
let slideIntervall;

function continueSlideIntervall() {

    slideIntervall = setInterval(nextSlide, slideTime);
}
continueSlideIntervall()
function nextSlide() {
    slideReset();
    currentSlide = ++currentSlide % slide.length;
    slideSet();
}
function stopSlide() {
    clearInterval(slideIntervall);
}
function showNextSlide() {
    stopSlide();
    nextSlide();
}
function showPreviousSlide() {
    stopSlide();
    slideReset();
    currentSlide = (currentSlide == 0) ? slide.length - 1 : currentSlide - 1;
    slideSet();

}
function slideReset() {
    slide[currentSlide].className = "slide";
    slideMin[currentSlide].className = "slide-min";
}
function slideSet() {
    slide[currentSlide].className = "slide showing";
    toggleInput[currentSlide].checked = true;
    slideMin[currentSlide].className = "slide-min showing-min";
}
function toggleSlide(event) {
    stopSlide();
    slideReset();
    currentSlide = event.target.value;
    slideSet();

}
function toggleMinSlide(event) {
    if (event.target.tagName === "IMG") {
        stopSlide();
        slideReset();
        currentSlide = event.target.id;
        slideSet();

    }

}






// modal
const modal = document.getElementById("signInModal");
const buttonSignIn = document.getElementById("buttonSignIn");
const closeSignIn = document.getElementById("closeSignIn");



buttonSignIn.addEventListener("click", openModalWindow);
closeSignIn.addEventListener("click", closeModalWindow);




function openModalWindow() {
    modal.style.display = "flex";
    buttonSignIn.disabled = true;
}

function closeModalWindow() {
    modal.style.display = "none";
    buttonSignIn.disabled = false;
}


//появление элементов
const scrollingTransition = (event) => {
    let a = event.target;
    if (a.tagName === "A") {
        for (let i = 0; i < parent.length; i++) {
            elem[i].className = "elem d-block";

        }
        event.preventDefault();
        const blockId = a.getAttribute("href");
        let id = document.querySelector(blockId);
        id.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    }

}

const linkGetstarted = document.querySelector("a[href='#get-started']");
menu.addEventListener("click", scrollingTransition);

// const div = document.querySelectorAll("div");
// console.log(div);

const parent = document.querySelectorAll(".parent");
const elem = document.querySelectorAll(".parent>.elem");


// const sayHello = (userName, passCode) => alert(`Привет, ${userName}! Твой числовой пароль: ${passCode}`);
// sayHello("Vasya", 5648393)

const isVisible = (elem) => {
    let cords = elem.getBoundingClientRect()
    let windowHeight = document.documentElement.clientHeight;
    let topVisible = cords.top > 0 && cords.top < windowHeight;
    let bottomVisible = cords.bottom > 0 && cords.bottom < windowHeight;
    return topVisible && bottomVisible;
}

const showVisible = () => {
    for (let i = 0; i < parent.length; i++) {
        if (isVisible(parent[i])) {
            elem[i].className = "elem d-block";
        }

    }
}
window.addEventListener("scroll", showVisible);







