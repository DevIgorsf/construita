const botaoMenu = document.querySelector('.header__menu')
const menu = document.querySelector('.header__navegacao')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('header__navegacao--ativo')
})

let slideIndex = 1;
galeriaShowSlides(slideIndex);

function galeriaPlusSlides(n) {
  galeriaShowSlides(slideIndex += n);
}

function galeriaCurrentSlide(n) {
  galeriaShowSlides(slideIndex = n);
}

function galeriaShowSlides(n) {
  let i;
  let slides = document.getElementsByClassName("galeria__slideshow__mySlides");
  let dots = document.getElementsByClassName("galeria__dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
