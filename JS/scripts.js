let navMenu = document.querySelector(".menuList");
let menuBtn = document.querySelector(".menu");
let btn = document.querySelector(".btn");
let landing = document.querySelector(".landingContainer");

menuBtn.addEventListener("click", ()=> {
    navMenu.classList.toggle("showNav");
})