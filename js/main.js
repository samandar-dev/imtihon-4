const secInner = document.querySelector('.sec__inner');

let arr = []
let box = []

object.forEach((obj, index) => {
  // let secBox = document.createElement('div');
  // secBox.className = "sec__box"
  let li = document.createElement('li');
  li.className = "item"
  li.innerHTML = `
  <div class="sec__box">
    <button class="sec__box-left-btn btn-hov">
      <i class='bx bx-chevron-left'></i>
    </button>
    <div class="img-box">
      <img class="img" src="${obj.mediya[0]}" alt="img">
    </div>
    <div class="sec__header head">
      <div class="head__top-anim col-12 row-cols-2 d-flex align-items-center">
        <div class="head__anim-box">
          <span class="head__anim-span anim"></span>
        </div>
        <div class="head__anim-box">
          <span class="head__anim-span"></span>
        </div>
      </div>
      <div class="sec__avatar-box ava d-flex align-items-center justify-content-between">
        <div class="ava__box d-flex align-items-center">
          <button class="ava__btn-user">
            <img class="ava__user-img" src="${obj.avatar}" alt="img">
          </button>
          <p class="ava__user-name">Lorem, ipsum. Lorem.</p>
          <span class="ava__time">21 ч.</span>
        </div>
        <div class="ava__btn-box d-flex align-items-center">
          <button class="ava__btn">
            <i class='bx bx-play'></i>
          </button>
          <button class="ava__btn">
            <i class='bx bx-volume-mute'></i>
          </button>
          <button class="ava__btn">•••</button>
        </div>
      </div>
    </div>
    <div class="sec__input">
      <form class="form d-flex align-items-center" action="#">
        <input class="form__inp" type="text" name="text" id="form-input" placeholder="Ответьте lorem ipsum…">
        <button class="form__btn" type="submit">
          <i class='bx bxl-telegram'></i>
        </button>
      </form>
    </div>
    <button class="sec__box-right-btn btn-hov">
      <i class='bx bx-chevron-right'></i>
    </button>
  </div>`;

  arr.push(li);
  secInner.appendChild(li)
})

let sBox = document.querySelectorAll('.sec__box');

sBox[0].classList.add('act');
secInner.style.transform = 'translateX(600px)';

arr[0].addEventListener('click', () => {
  sBox[0].classList.add('act');
  sBox[1].classList.remove('act');
  sBox[2].classList.remove('act');
  sBox[3].classList.remove('act');
  sBox[4].classList.remove('act');
  sBox[5].classList.remove('act');
  sBox[6].classList.remove('act');
  sBox[7].classList.remove('act');
  sBox[8].classList.remove('act');
  sBox[9].classList.remove('act');

  secInner.style.transform = 'translateX(600px)';
})

arr[1].addEventListener('click', () => {
  sBox[0].classList.remove('act');
  sBox[1].classList.add('act');
  sBox[2].classList.remove('act');
  sBox[3].classList.remove('act');
  sBox[4].classList.remove('act');
  sBox[5].classList.remove('act');
  sBox[6].classList.remove('act');
  sBox[7].classList.remove('act');
  sBox[8].classList.remove('act');
  sBox[9].classList.remove('act');
  secInner.style.transform = 'translateX(100px)';

})

arr[2].addEventListener('click', () => {
  sBox[0].classList.remove('act');
  sBox[1].classList.remove('act');
  sBox[2].classList.add('act');
  sBox[3].classList.remove('act');
  sBox[4].classList.remove('act');
  sBox[5].classList.remove('act');
  sBox[6].classList.remove('act');
  sBox[7].classList.remove('act');
  sBox[8].classList.remove('act');
  sBox[9].classList.remove('act');
  secInner.style.transform = 'translateX(-400px)';
})

arr[3].addEventListener('click', () => {
  sBox[0].classList.remove('act');
  sBox[1].classList.remove('act');
  sBox[2].classList.remove('act');
  sBox[3].classList.add('act');
  sBox[4].classList.remove('act');
  sBox[5].classList.remove('act');
  sBox[6].classList.remove('act');
  sBox[7].classList.remove('act');
  sBox[8].classList.remove('act');
  sBox[9].classList.remove('act');
  secInner.style.transform = 'translateX(-950px)';
})

arr[4].addEventListener('click', () => {
  sBox[0].classList.remove('act');
  sBox[1].classList.remove('act');
  sBox[2].classList.remove('act');
  sBox[3].classList.remove('act');
  sBox[4].classList.add('act');
  sBox[5].classList.remove('act');
  sBox[6].classList.remove('act');
  sBox[7].classList.remove('act');
  sBox[8].classList.remove('act');
  sBox[9].classList.remove('act');
  secInner.style.transform = 'translateX(-1450px)';
})

arr[5].addEventListener('click', () => {
  sBox[0].classList.remove('act');
  sBox[1].classList.remove('act');
  sBox[2].classList.remove('act');
  sBox[3].classList.remove('act');
  sBox[4].classList.remove('act');
  sBox[5].classList.add('act');
  sBox[6].classList.remove('act');
  sBox[7].classList.remove('act');
  sBox[8].classList.remove('act');
  sBox[9].classList.remove('act');
  secInner.style.transform = 'translateX(-2000px)';
})

arr[6].addEventListener('click', () => {
  sBox[0].classList.remove('act');
  sBox[1].classList.remove('act');
  sBox[2].classList.remove('act');
  sBox[3].classList.remove('act');
  sBox[4].classList.remove('act');
  sBox[5].classList.remove('act');
  sBox[6].classList.add('act');
  sBox[7].classList.remove('act');
  sBox[8].classList.remove('act');
  sBox[9].classList.remove('act');
  secInner.style.transform = 'translateX(-2550px)';
})

arr[7].addEventListener('click', () => {
  sBox[0].classList.remove('act');
  sBox[1].classList.remove('act');
  sBox[2].classList.remove('act');
  sBox[3].classList.remove('act');
  sBox[4].classList.remove('act');
  sBox[5].classList.remove('act');
  sBox[6].classList.remove('act');
  sBox[7].classList.add('act');
  sBox[8].classList.remove('act');
  sBox[9].classList.remove('act');
  secInner.style.transform = 'translateX(-3100px)';
})

arr[8].addEventListener('click', () => {
  sBox[0].classList.remove('act');
  sBox[1].classList.remove('act');
  sBox[2].classList.remove('act');
  sBox[3].classList.remove('act');
  sBox[4].classList.remove('act');
  sBox[5].classList.remove('act');
  sBox[6].classList.remove('act');
  sBox[7].classList.remove('act');
  sBox[8].classList.add('act');
  sBox[9].classList.remove('act');
  secInner.style.transform = 'translateX(-3600px)';
})

arr[9].addEventListener('click', () => {
  sBox[0].classList.remove('act');
  sBox[1].classList.remove('act');
  sBox[2].classList.remove('act');
  sBox[3].classList.remove('act');
  sBox[4].classList.remove('act');
  sBox[5].classList.remove('act');
  sBox[6].classList.remove('act');
  sBox[7].classList.remove('act');
  sBox[8].classList.remove('act');
  sBox[9].classList.add('act');
  secInner.style.transform = 'translateX(-4000px)';
})
