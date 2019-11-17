'use strict'
const countryBtn = document.querySelector(".country-item");
const modalBackdrop = document.querySelector(".modal-backdrop");
const closeBtn = document.querySelector(".close-btn");
const modalWindow = document.querySelector(".modal-window");
const sliderBtnRight = document.querySelector(".slider-btn-right");
const sliderBtnLeft = document.querySelector(".slider-btn");
const slide = document.querySelector(".slide")


const toggleModal = () => {
modalWindow.classList.toggle("hidden")
modalBackdrop.classList.toggle("hidden")
};

const sliderHello = () => {
    const numberSlide = Number(slide.textContent) + 1;
    slide.textContent = "0"+ numberSlide;
    // alert(numberSlide);

    // alert("wha");
}

sliderBtnLeft.addEventListener("click" , sliderHello);
sliderBtnRight.addEventListener("click" , sliderHello);
countryBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);
modalBackdrop.addEventListener("click", toggleModal)