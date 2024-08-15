"use strict";
let isminput = document.querySelector(".ism"),
  textArea = document.querySelector(".textArea"),
  btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  textArea.style.color = "black";
});

isminput.addEventListener("input", function () {
  textArea.value = `mening ismim ${isminput.value}`;
});
