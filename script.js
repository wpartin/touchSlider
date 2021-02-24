"use strict";

const slider = document.querySelector(".slider-container"),
  slides = Array.from(document.querySelectorAll(".slide"));

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  previousTranslate = 0,
  animationID = 0,
  currentIndex = 0;

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector("img");
  slideImage.addEventListener("dragstart", (event) => event.preventDefault());

  // Touch Events
  slide.addEventListener("touchstart", touchStart(index));
  slide.addEventListener("touchend", touchEnd);
  slide.addEventListener("touchmove", touchMove);

  // Mouse Events
  slide.addEventListener("mousedown", touchStart(index));
  slide.addEventListener("mouseup", touchEnd);
  slide.addEventListener("mouseleave", touchEnd);
  slide.addEventListener("mousemove", touchMove);
});

//  FUNCTIONS HERE \\

window.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

function touchStart(index) {
  return function (event) {
    currentIndex = index;
    startPos = getPositionX(event);
    console.log(startPos);
    isDragging = true;
  };
}

function touchEnd() {
  isDragging = false;
}

function touchMove() {
  if (isDragging) console.log("move");
}

function getPositionX(event) {
  event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
}
