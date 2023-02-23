const images = document.querySelectorAll(".image__box img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const close = document.querySelector(".close");

images.forEach((image) => {
  image.addEventListener("click", () => {
    modalImg.src = image.src;
    modalTxt.innerHTML = image.alt;
    modal.classList.add("appear");

    close.addEventListener("click", () => {
      modal.classList.remove("appear");
    });
  });
});

function scrollleft(){
  var left = document.querySelector(".slider");
  left.scrollBy(-100 , 0)
}
function scrollright(){
  var right = document.querySelector(".slider");
  right.scrollBy(100 , 0)
}

function scrollup(){
  document.documentElement.scrollTop = 0;
}
const scrollUp = document.querySelector('.scrollup');
window.addEventListener('scroll', () => {
  if(window.pageYOffset > 100){
    scrollUp.classList.add("active"); 
  }
  else{
    scrollUp.classList.remove("active")
  }
});




