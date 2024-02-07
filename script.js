const openMenu = document.querySelector('#open'); //Open
const closeMenu = document.querySelector('#close'); //Close
const navbar = document.querySelector('.nav-left ul'); //navbar
const fullNavbar = document.querySelector('.navbar');

openMenu.addEventListener('click', ()=>{
  navbar.style.display = 'flex'; //Enable
  openMenu.style.display = 'none'; //close
  closeMenu.style.display = 'block'; //open
});

closeMenu.addEventListener('click', ()=>{
  navbar.style.display = 'none'; //Enable
  openMenu.style.display = 'block'; //open
  closeMenu.style.display = 'none'; //close
  fullNavbar.style.backgroundColor = '#1414144f';
});

document.addEventListener('DOMContentLoaded', () => {
  const arrows = document.querySelectorAll('.cards');

  arrows.forEach(card => {
    const arrow = card.querySelector('#arrow');
    const movies = card.querySelector('.movies');

    arrow.addEventListener('click', () => {
      const targetScroll = movies.scrollLeft + 100;

      movies.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    });
  });
});
