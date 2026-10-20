// мобильное меню
const burger = document.getElementById('burger');
const links = document.getElementById('navlinks');
burger.addEventListener('click',()=>links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
