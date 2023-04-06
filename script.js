// image slider
let slideIndex = 0;

const updateSlide = (n) => {
  slideIndex += n;
  showSlide(slideIndex);
}

const showSlide = (n) => {
  const slides = document.getElementsByClassName("slider-item");
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

showSlide(slideIndex);

// accordion
const accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    const panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const modal = document.getElementById("myModal");
  const openButton = document.getElementById("modalButton");
  const closeIcon = document.getElementById("closeModalIcon");


  openButton.addEventListener('click', () => {
    modal.style.display = "block";
  });


  closeIcon.addEventListener('click', () => {
    modal.style.display = "none";
  });