const imgWhats = document.getElementById("whatsapp");
const imgUp = document.getElementById("up");
const slideBar = document.getElementById("slide-bar");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const menuResponsive = document.querySelector(".menu-responsive");
const listA = document.getElementsByTagName("a");

imgUp.addEventListener("click", ()=>{
  window.scrollTo({top: 0, behavior:"smooth"});
});

//Evento para mostrar el menu cuando esta responsive
slideBar.addEventListener("click", ()=>{
  line1.classList.toggle("activeline1");
  line2.classList.toggle("activeline2");
  line3.classList.toggle("activeline3");
  menuResponsive.classList.toggle("activemenu-responsive");
  listA[0].classList.toggle("active");
  listA[1].classList.toggle("active");
  listA[2].classList.toggle("active");
  listA[3].classList.toggle("active");
});

document.addEventListener("scroll", ()=>{
    let scrollY = this.scrollY;
    if(scrollY == 0){
        imgWhats.style.opacity = "0";
        imgUp.style.opacity = "0";
    }
    else{
        imgWhats.style.opacity = "1";
        imgUp.style.opacity = "1";
    }
});

var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 25.5,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });