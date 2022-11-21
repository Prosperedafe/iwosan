const toggleButton = document.querySelector('.open-nav')
const navbarLinks = document.querySelector('.header__nav__ul')
const closeBtn = document.querySelector(".close-nav")

toggleButton.addEventListener("click", () => {
  navbarLinks.style.display = "block"
})

closeBtn.addEventListener("click", () => {
  navbarLinks.style.display = "none"
})

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 6000);
}