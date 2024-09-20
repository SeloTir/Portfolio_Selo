/* MENU MOBILE */

function menuMobile() {
  const btn = document.querySelector('.burger');
  const header = document.querySelector('.header');

  btn.addEventListener('click', () => {
      header.classList.toggle('show-nav');
  });

  const links = document.querySelectorAll('.navbar a');
  links.forEach(link => {
      link.addEventListener('click', () => {
          header.classList.remove('show-nav');
          header.classList.add('hide-nav');
          setTimeout(() => {
              header.classList.remove('hide-nav');
          }, 500); // Correspond à la durée de transition définie en CSS (0.5s)
      });
  });
}
menuMobile();

/* EFFET */
function animationPage(){
  const sections = document.querySelectorAll('section');

  sections.forEach((section, index) => {
      section.style.opacity = "0.5";
      section.style.transition = "all 1.7s";
    });

  let sectionObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
      let elem = entry.target;
      elem.style.opacity = 1;
      }
  });
  });

  sections.forEach(section => {
      sectionObserver.observe(section);
  });
}

animationPage();

function showProjectDetails() {
  const links = document.querySelectorAll('.card__link');
  const modals = document.querySelectorAll('.modal');
  const btns = document.querySelectorAll('.modal__close');

  const hideModals = () => {
    modals.forEach(modal => {
      modal.classList.remove('show');
    });
  }

  links.forEach(elem => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();

      document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');
    });
  });

  btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      hideModals();
    });
  }); 
}

showProjectDetails();

function animScroll(){
let sections = document.querySelectorAll('section');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -  150;
    let height = sec.offsetHeight;

    if(top >= offset && top < offset + height) {
      sec.classList.add('show-animate');
    }
  });
} 
}

animScroll();

function smoothScroll(){
const links = [...document.querySelectorAll('nav a')];
const sections = [...document.querySelectorAll('section')];

let sectionPos;

function positionCalc(){
  sectionPos = sections.map(section => section.offsetTop);
}

positionCalc();

links.forEach(link => link.addEventListener('click', addScrollSmooth));

function addScrollSmooth(e){
  e.preventDefault();

  const linkIndex = links.indexOf(e.target);
  let navHeight = document.querySelector('nav').offsetHeight; 

  if (window.innerWidth <= 749) {
    navHeight = 40; 
  }
  else{
    navHeight = 80;
  }

  window.scrollTo({
    top: sectionPos[linkIndex] - navHeight, 
    behavior: 'smooth'
  });
}

window.addEventListener('resize', positionCalc);
}

smoothScroll();

function scrollTop() {
const btn = document.querySelector('.btn');

function toggleButtonVisibility() {
  if (window.scrollY >= 2750) { 
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none'; 
  }
}

window.addEventListener('scroll', toggleButtonVisibility);

btn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});
}

scrollTop();