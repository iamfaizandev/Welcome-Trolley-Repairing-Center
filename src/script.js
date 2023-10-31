"use strict";

const navList = document.querySelector(".nav_list");
const navBar = document.querySelector("nav");
const btnClose = document.querySelector(".hide_btn");
const btnShow = document.querySelector(".show_btn");
const searchBtn = document.querySelector(".search_btn");
const searchBar = document.querySelector(".searh_bar");
const submitBtn = document.querySelector(".submit_btn");
const container = document.querySelector(".container");

// const navBox = document.querySelector(".middle");

// hide and show navList
const show = function () {
  btnShow.classList.add("hidden");
  btnClose.classList.remove("hidden");
  navList.classList.remove("nav_show");
  navList.classList.add("nav_css-phone");
};

const close = function () {
  btnShow.classList.remove("hidden");
  btnClose.classList.add("hidden");
  navList.classList.add("nav_show");
};

btnShow.addEventListener("click", show);
btnClose.addEventListener("click", close);

// Hide btn
searchBtn.addEventListener("click", function () {
  searchBar.classList.remove("hidden");
  searchBtn.classList.add("hidden");
  submitBtn.classList.remove("hidden");
});
// Outside Click Hide
document.addEventListener("mouseup", function (e) {
  if (!navBar.contains(e.target)) {
    searchBtn.classList.remove("hidden");
    searchBar.classList.add("hidden");
    submitBtn.classList.add("hidden");
  }
});

// Dark Mode

const btnDarkMode = document.querySelector(".dark_mode");
const btnLightMode = document.querySelector(".light_mode");
// light
btnLightMode.addEventListener("click", function () {
  document.body.classList.toggle("light");
  // navList.classList.toggle("nav_light");
  btnLightMode.classList.add("hidden");
  btnDarkMode.classList.remove("hidden");
});
// dark
btnDarkMode.addEventListener("click", function () {
  document.body.classList.remove("light");
  // nav.classList.toggle("nav_dark");
  btnLightMode.classList.remove("hidden");
  btnDarkMode.classList.add("hidden");
});
