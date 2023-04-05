import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';

/**
  |============================
  | Mentors modal
  |============================
*/

const openBtn = document.getElementById('open-gallery');
const modal = document.getElementById('gallery-modal');
const closeBtn = document.getElementsByClassName('close')[0];
const body = document.body;

function openModal() {
  body.classList.add('no-scroll');
  modal.style.display = 'block';
  body.classList.add('modal-open');
}

function closeModal() {
  body.classList.remove('no-scroll');

  modal.style.display = 'none';
  body.classList.remove('modal-open');
}

openBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', function (event) {
  if (event.target == modal) {
    closeModal();
  }
});

/**
  |============================
  | Clean Storage btn
  |============================
*/

const clearBtn = document.getElementById('clear-local-storage');

clearBtn.addEventListener('click', function () {
  localStorage.clear();
  Notify.success(`Local Storage was cleaned. Enjoy!`);
});

/**
  |============================
  | Features popUp logic
  |============================
*/

document.querySelector('.menu').style.display = 'none';
document.querySelector('.top').style.display = 'none';

document
  .querySelector('.footer-feature__hide')
  .addEventListener('click', () => {
    document.querySelector('.menu').style.display = 'block';
    document.querySelector('.top').style.display = 'block';
  });
