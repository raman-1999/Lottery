const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');
const main = document.querySelector('.main');
const description = document.querySelector('.description');

let isActive = false

hamburger.addEventListener('click', ()=>{
  isActive = !isActive
  hamburger.classList.toggle('active')
  navbar.classList.toggle(isActive ? 'expand' : 'collapse');
  navbar.classList.remove(isActive ? 'collapse' : 'expand');
  navMenu.classList.toggle(isActive ? 'active' : 'inactive');
  navMenu.classList.remove(isActive ? 'inactive' : 'active');
  main.classList.toggle(isActive ? 'down' : 'up');
  main.classList.remove(isActive ? 'up' : 'down');

})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', ()=>{
  hamburger.classList.remove('active');
  isActive = !isActive
  navbar.classList.toggle(isActive ? 'expand' : 'collapse');
  navbar.classList.remove(isActive ? 'collapse' : 'expand');
  navMenu.classList.toggle(isActive ? 'active' : 'inactive');
  navMenu.classList.remove(isActive ? 'inactive' : 'active');
  main.classList.toggle(isActive ? 'down' : 'up');
  main.classList.remove(isActive ? 'up' : 'down');
}))

window.addEventListener('scroll', function() {
  let header = document.querySelector('header');
  let bar = document.querySelectorAll('span');
  let text = document.querySelectorAll('.text')
  let navLink = document.querySelectorAll('.nav-link');
  let toTop = document.getElementById('upward');
  header.classList.toggle('sticky', window.scrollY > 0);
  bar.forEach(x => x.classList.toggle('sticky', window.scrollY > 0));
  navMenu.classList.toggle('darken', window.scrollY > 0);
  main.classList.toggle('darken', window.scrollY > 0);
  text.forEach(x => x.classList.toggle('lighten', window.scrollY > 0));
  navLink.forEach(x => x.classList.toggle('darken', window.scrollY > 0));
  toTop.classList.toggle('visible', window.scrollY > 0);

  
});

function gotoTop(){
  window.scrollTo(0,0)
}

function gotoResults(){
  window.scrollTo(0,425)
}