import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';

/**
  |============================
  | Div
  |============================
*/

// let myDiv = document.getElementById('my-div');
// //Detect touch device
// function isTouchDevice() {
//   try {
//     //We try to create TouchEvent. It would fail for desktops and throw error
//     document.createEvent('TouchEvent');
//     return true;
//   } catch (e) {
//     return false;
//   }
// }
// const move = e => {
//   //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
//   try {
//     //PageX and PageY return the position of client's cursor from top left of screen
//     var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
//     var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
//   } catch (e) {}
//   //set left and top of div based on mouse position
//   myDiv.style.left = x - 50 + 'px';
//   myDiv.style.top = y - 50 + 'px';
// };
// //For mouse
// document.addEventListener('mousemove', e => {
//   move(e);
// });
// //For touch
// document.addEventListener('touchmove', e => {
//   move(e);
// });

/**
  |============================
  | Hearts
  |============================
*/

const container = document.querySelector('.container');
let drawHearts;
let mouseX = 0,
  mouseY = 0;
let hearts = [];
//Red Shades
let colors = ['#ff0000', '#dc143c', '#ff4040', '#ed2939', '#fe2712', '#ed1c24'];
//Events Object
let events = {
  mouse: {
    move: 'mousemove',
    stop: 'mouseout',
  },
  touch: {
    move: 'touchmove',
    stop: 'touchend',
  },
};
let deviceType = '';
//Detect touch device
const isTouchDevice = () => {
  try {
    //We try to create TouchEvent (It would fail for desktops and throw error)
    document.createEvent('TouchEvent');
    deviceType = 'touch';
    return true;
  } catch (e) {
    deviceType = 'mouse';
    return false;
  }
};
//Random number between given range
function randomNumberGenerator(min, max) {
  return Math.random() * (max - min) + min;
}
//Create Hearts
function startCreation() {
  //If drawHearts = true only then start displaying hearts. This is done to stop hearts creation when mouse is not on the screen.
  if (drawHearts) {
    //Create Div
    let div = document.createElement('div');
    div.classList.add('heart-container');
    //Set left and top based on mouse X and Y
    div.style.left = mouseX + randomNumberGenerator(5, 50) + 'px';
    div.style.top = mouseY + randomNumberGenerator(5, 50) + 'px';
    //Random shade of Red
    let randomColor =
      colors[Math.floor(randomNumberGenerator(0, colors.length - 1))];
    //heart dic
    div.innerHTML = `<div class="heart"></div>`;
    div.style.opacity = 1;
    //Set the value of variable --size to random number
    let root = document.querySelector(':root');
    let sizeValue = randomNumberGenerator(10, 20);
    //Random height/width value
    //You can change this
    root.style.setProperty('--size', sizeValue + 'px');
    root.style.setProperty('--color', randomColor);
    container.appendChild(div);
    //set visible flag for div
    hearts.push({
      visible: true,
    });
  }
  updateHearts();
  window.setTimeout(startCreation, 50);
}
function updateHearts() {
  for (let i in hearts) {
    //get div at current index
    let heartContainer = document.getElementsByClassName('heart-container')[i];
    //If visible
    if (hearts[i].visible) {
      heartContainer.style.opacity = +heartContainer.style.opacity - 0.1;
      //If 0 set visible to false
      if (heartContainer.style.opactiy == 0) {
        hearts[i].visible = false;
      }
    } else {
      //if div is not visible remove it and remove entry from hearts array
      heartContainer.remove();
      hearts.splice(i, 1);
    }
  }
}
isTouchDevice();
document.addEventListener(events[deviceType].move, function (e) {
  mouseX = isTouchDevice() ? e.touches[0].pageX : e.pageX;
  mouseY = isTouchDevice() ? e.touches[0].pageY : e.pageY;
  drawHearts = true;
});
document.addEventListener(events[deviceType].stop, function (e) {
  drawHearts = false;
});
window.onload = () => {
  drawHearts = false;
  startCreation();
};

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
