'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar__dark');
  } else {
    navbar.classList.remove('navbar__dark');
  }
});

// handle scrolling
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if(link == null) {
    return;
  }
  navbarMenu.classList.remove('open');
    scrollIntoView(link);
  });

// Navbar toggle button
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});



  // "contact me" button
  const homeContactBtn = document.querySelector('.home__contact');
  homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
  });

  // home fade
  const home = document.querySelector('.home__container');
  const homeHeight = home.getBoundingClientRect().height;
  document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
  });

  // show "arrow-up button"
  const arrowUp = document.querySelector('.arrow-up');
  document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight /2) {
      arrowUp.classList.add('visible');
    } else {
      arrowUp.classList.remove('visible');
    }
  });

  // Click handler
  arrowUp.addEventListener('click', () => {
    scrollIntoView('#home')
  })
  
  // Projects
  const workBtnContainer = document.querySelector('.work__categories');
  const projectContainer = document.querySelector('.work__projects');
  const Projects = document.querySelectorAll('.project');
  workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null) {
      return;
    }

    // Remove selection
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    e.target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(()=> {
      Projects.forEach((project) => {
        console.log(project.dataset.type);
        if(filter === '*' || filter === project.dataset.type) {
          project.classList.remove('invisible');
        } else {
          project.classList.add('invisible');
        }
      });
      projectContainer.classList.remove('anim-out');
    }, 300);
  });

  function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth' });

  }