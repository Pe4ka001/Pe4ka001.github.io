let burgState = 1;

const burgerOpen = function () {
  let vari = false;
  const img = document.getElementById('img-burger');
  const list = document.querySelector('.menu-list-color');
  const list2 = document.querySelector('.menu-list');

  list.classList.toggle('menu-list-open-color');
  list2.classList.toggle('menu-list-open');

  if (burgState === 1) {
    img.src = 'img/cross.png';
    burgState = 2;
  } else {
    img.src = 'img/burg.png';
    burgState = 1;
  }
};
