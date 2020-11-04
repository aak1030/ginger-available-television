
let buttonsBox = document.querySelector("Buttons");

let b1 = document.querySelector("Buttons-One");
let b2 = document.querySelector("Buttons-Two");
let b3 = document.querySelector("Buttons-Three");
let b4 = document.querySelector("Buttons-Four");
let b5 = document.querySelector("Buttons-Five");
let b6 = document.querySelector("Buttons-Six");
let b7 = document.querySelector("Buttons-Seven");
let b8 = document.querySelector("Buttons-Eight");
let b9 = document.querySelector("Buttons-Nine");


/*
gsap.from (Buttons, {
    opacity: 0,

    duration: 4,
    ease: Power2.easeIn,
}); */


let tl = gsap.timeline ()

tl.from(b1, {
    opacity: 0,
    x: -50,
    y: -50,
    duration: 1,
    ease: Power2.easeIn
});

tl.from(b2, {
    opacity: 0,
    duration: 1,
    ease: Power2.easeIn
});

tl.from (b3, {
    opacity: 0,
    duration: 1,
    ease: Power2.easeIn
});

tl.from (b4, {
    opacity: 0,
    duration: 1,
    ease: Power2.easeIn
});

tl.from (b5, {
    opacity: 0,
    duration: 1,
    ease: Power2.easeIn
});

tl.from (b6, {
    opacity: 0,
    duration: 1,
    ease: Power2.easeIn
});

tl.from (b7, {
    opacity: 0,
    duration: 1,
    ease: Power2.easeIn
});

tl.from (b8, {
    opacity: 0,
    duration: 1,
    ease: Power2.easeIn
});

tl.from (b9, {
    opacity: 0,
    duration: 1,
    ease: Power2.easeIn
});

