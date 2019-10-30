'use strict'
console.log('ha');
const countryBtn = document.querySelector(".country-item");
const modalWindow = document.querySelector(".modal-backdrop");
const closeBtn = document.querySelector(".close-btn");


const openModal = () => {
modalWindow.classList.toggle("hidden")
};

countryBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", openModal);