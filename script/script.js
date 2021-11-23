const scrollElements = document.querySelectorAll(".js-scroll");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});




let Cancel = document.getElementById('Cancel');
let navbare = document.querySelector('.navbare');
let menu_btn = document.querySelector('.menu-btn');
menu_btn.addEventListener('click',()=>{
    navbare.classList.toggle('active');
});

Cancel.addEventListener('click',()=>{
  navbare.classList.toggle('active');
});


var swiper = new Swiper(".slider-events", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    /*autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },*/
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 3,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
    },
  });

let dropbtn_features = document.getElementById('dropbtn_features');
let drop_content_features = document.getElementById('drop_content_features');
dropbtn_features.addEventListener('click',()=>{
drop_content_features.classList.toggle('active');
drop_content_policy.classList.remove('active');
drop_content_categ.classList.remove('active');
});

let dropbtn_policy = document.getElementById('dropbtn_policy');
let drop_content_policy = document.getElementById('drop_content_policy');
dropbtn_policy.addEventListener('click',()=>{
drop_content_policy.classList.toggle('active');
drop_content_features.classList.remove('active');
drop_content_categ.classList.remove('active');
});


let dropbtn_categ = document.getElementById('dropbtn_categ');
let drop_content_categ = document.getElementById('drop_content_categ');
dropbtn_categ.addEventListener('click',()=>{
drop_content_categ.classList.toggle('active');
drop_content_features.classList.remove('active');
drop_content_policy.classList.remove('active');
});


var scrollPosition = window.scrollY;
var logoContainer = document.getElementsByClassName('header')[0];
window.addEventListener('scroll', function() {

    scrollPosition = window.scrollY;

    if (scrollPosition > 0){
        logoContainer.classList.add('active');
    } else {
        logoContainer.classList.remove('active');
    }

});


