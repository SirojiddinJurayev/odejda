function classToggle() {
    const navs = document.querySelectorAll('.navbar-items')
    
    navs.forEach(nav => nav.classList.toggle('navbar-toggleshow'));
  }
  
  document.querySelector('.navbar-link-toggle')
    .addEventListener('click', classToggle);

let width = (window.width > 0) ? window.width : screen.width;
const carusel = document.querySelector('#carusel');
console.log(carusel.classList)
if (width < 750) {
  carusel.classList.remove('main__top-carusel');
  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    wrapAround:true,
    freeScroll: true,
    autoPlay: 3000,
    // groupCells: 2
  });
}
console.log(width)