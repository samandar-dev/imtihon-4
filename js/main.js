const secInner = document.querySelector('.sec__inner');
let arr = []

object.forEach((obj) => {
  let li = document.createElement('li');
  li.className = "item"
  li.innerHTML = `
  <div class="sec__box">
    <button class="sec__box-left-btn btn-hov btns-l-r">
      <i class='bx bx-chevron-left'></i>
    </button>
    <div class="img-box">
      <img class="img" src="${obj.mediya[0]}" alt="img">
    </div>
    <div class="sec__header head">
      <div class="head__top-anim col-12 row-cols-1 d-flex align-items-center">
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
    <button class="sec__box-right-btn btn-hov btns-l-r">
      <i class='bx bx-chevron-right'></i>
    </button>
  </div>`;

  arr.push(li);
  secInner.appendChild(li)
})

let timeout;
let count = 1;
let n = 1;

function myFunction() {
  timeout = setTimeout(alertFunc, 3000);
}

let sBox = document.querySelectorAll('.sec__box');
let animSpan = document.querySelectorAll('.head__anim-span');
let secHeader = document.querySelectorAll('.sec__header');

myFunction();

sBox[0].classList.add("act");
animSpan[0].classList.add('anim');
secInner.style.transform = 'translateX(630px)';

sBox.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.add("click");
    checkIt();
  });
});

function checkIt() {
  sBox.forEach((item, inx) => {
    if (item.classList.contains("click")) {
      item.classList.add("act");
      item.classList.remove("click");
      listFunc(inx)
    } else {
      item.classList.remove("act")
    }
  });
}

function listFunc(lis) {
  count = lis;
  alertFunc();

  if (lis == 0) {
    secInner.style.transform = 'translateX(630px)';
  }
  else if (lis == 1) {
    secInner.style.transform = 'translateX(260px)';
  }
  else if (lis == 2) {
    secInner.style.transform = 'translateX(-80px)';
  }
  else if (lis == 3) {
    secInner.style.transform = 'translateX(-440px)';
  }
  else if (lis == 4) {
    secInner.style.transform = 'translateX(-800px)';
  }
  else if (lis == 5) {
    secInner.style.transform = 'translateX(-1170px)';
  }
  else if (lis == 6) {
    secInner.style.transform = 'translateX(-1490px)';
  }
  else if (lis == 7) {
    secInner.style.transform = 'translateX(-1850px)';
  }
  else if (lis == 8) {
    secInner.style.transform = 'translateX(-2070px)';
  }
  else if (lis == 9) {
    secInner.style.transform = 'translateX(-2410px)';
  }
}

function alertFunc() {
  if (count == 0) {
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

    animSpan[0].classList.add('anim');
    animSpan[1].classList.remove('anim');
    animSpan[2].classList.remove('anim');
    animSpan[3].classList.remove('anim');
    animSpan[4].classList.remove('anim');
    animSpan[5].classList.remove('anim');
    animSpan[6].classList.remove('anim');
    animSpan[7].classList.remove('anim');
    animSpan[8].classList.remove('anim');
    animSpan[9].classList.remove('anim');

    secInner.style.transform = 'translateX(630px)';
    count++
    myFunction()
  }
  else if (count == 1) {
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

    animSpan[0].classList.remove('anim');
    animSpan[1].classList.add('anim');
    animSpan[2].classList.remove('anim');
    animSpan[3].classList.remove('anim');
    animSpan[4].classList.remove('anim');
    animSpan[5].classList.remove('anim');
    animSpan[6].classList.remove('anim');
    animSpan[7].classList.remove('anim');
    animSpan[8].classList.remove('anim');
    animSpan[9].classList.remove('anim');

    secInner.style.transform = 'translateX(300px)';
    count++
    myFunction()
  }
  else if (count == 2) {
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

    animSpan[0].classList.remove('anim');
    animSpan[1].classList.remove('anim');
    animSpan[2].classList.add('anim');
    animSpan[3].classList.remove('anim');
    animSpan[4].classList.remove('anim');
    animSpan[5].classList.remove('anim');
    animSpan[6].classList.remove('anim');
    animSpan[7].classList.remove('anim');
    animSpan[8].classList.remove('anim');
    animSpan[9].classList.remove('anim');

    secInner.style.transform = 'translateX(-50px)';
    count++
    myFunction()
  }
  else if (count == 3) {
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

    animSpan[0].classList.remove('anim');
    animSpan[1].classList.remove('anim');
    animSpan[2].classList.remove('anim');
    animSpan[3].classList.add('anim');
    animSpan[4].classList.remove('anim');
    animSpan[5].classList.remove('anim');
    animSpan[6].classList.remove('anim');
    animSpan[7].classList.remove('anim');
    animSpan[8].classList.remove('anim');
    animSpan[9].classList.remove('anim');

    secInner.style.transform = 'translateX(-390px)';
    count++
    myFunction()
  }
  else if (count == 4) {
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

    animSpan[0].classList.remove('anim');
    animSpan[1].classList.remove('anim');
    animSpan[2].classList.remove('anim');
    animSpan[3].classList.remove('anim');
    animSpan[4].classList.add('anim');
    animSpan[5].classList.remove('anim');
    animSpan[6].classList.remove('anim');
    animSpan[7].classList.remove('anim');
    animSpan[8].classList.remove('anim');
    animSpan[9].classList.remove('anim');

    secInner.style.transform = 'translateX(-720px)';
    count++
    myFunction()
  }
  else if (count == 5) {
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

    animSpan[0].classList.remove('anim');
    animSpan[1].classList.remove('anim');
    animSpan[2].classList.remove('anim');
    animSpan[3].classList.remove('anim');
    animSpan[4].classList.remove('anim');
    animSpan[5].classList.add('anim');
    animSpan[6].classList.remove('anim');
    animSpan[7].classList.remove('anim');
    animSpan[8].classList.remove('anim');
    animSpan[9].classList.remove('anim');

    secInner.style.transform = 'translateX(-1050px)';
    count++
    myFunction()
  }
  else if (count == 6) {
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

    animSpan[0].classList.remove('anim');
    animSpan[1].classList.remove('anim');
    animSpan[2].classList.remove('anim');
    animSpan[3].classList.remove('anim');
    animSpan[4].classList.remove('anim');
    animSpan[5].classList.remove('anim');
    animSpan[6].classList.add('anim');
    animSpan[7].classList.remove('anim');
    animSpan[8].classList.remove('anim');
    animSpan[9].classList.remove('anim');

    secInner.style.transform = 'translateX(-1390px)';
    count++
    myFunction()
  }
  else if (count == 7) {
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

    animSpan[0].classList.remove('anim');
    animSpan[1].classList.remove('anim');
    animSpan[2].classList.remove('anim');
    animSpan[3].classList.remove('anim');
    animSpan[4].classList.remove('anim');
    animSpan[5].classList.remove('anim');
    animSpan[6].classList.remove('anim');
    animSpan[7].classList.add('anim');
    animSpan[8].classList.remove('anim');
    animSpan[9].classList.remove('anim');

    secInner.style.transform = 'translateX(-1730px)';
    count++
    myFunction()
  }
  else if (count == 8) {
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

    animSpan[0].classList.remove('anim');
    animSpan[1].classList.remove('anim');
    animSpan[2].classList.remove('anim');
    animSpan[3].classList.remove('anim');
    animSpan[4].classList.remove('anim');
    animSpan[5].classList.remove('anim');
    animSpan[6].classList.remove('anim');
    animSpan[7].classList.remove('anim');
    animSpan[8].classList.add('anim');
    animSpan[9].classList.remove('anim');

    secInner.style.transform = 'translateX(-2070px)';
    count++
    myFunction()
  }
  else if (count == 9) {
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

    animSpan[0].classList.remove('anim');
    animSpan[1].classList.remove('anim');
    animSpan[2].classList.remove('anim');
    animSpan[3].classList.remove('anim');
    animSpan[4].classList.remove('anim');
    animSpan[5].classList.remove('anim');
    animSpan[6].classList.remove('anim');
    animSpan[7].classList.remove('anim');
    animSpan[8].classList.remove('anim');
    animSpan[9].classList.add('anim');

    secInner.style.transform = 'translateX(-2410px)';
    count = 0
    myFunction()
  }
}