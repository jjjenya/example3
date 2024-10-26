/* в этот файл добавляются скрипты*/

// Переключатель

const changeSrc = () => {
  const details = document.querySelectorAll('.details');

  details.forEach((detail) => {
    detail.addEventListener('click', () => {
      const img = detail.querySelector('summary img');
      if(detail.hasAttribute('open')) {
        img.src = 'icons/stack.svg#arrow_down';
      } else {
        img.src = 'icons/stack.svg#arrow_up';
      }
    });
  });
};
changeSrc();


// Вставка повторного блока

const cloneBlock = () => {
  const parent = document.querySelector('.main-container');
  const original = document.getElementById('block-original');
  const clone = original.cloneNode(true);
  clone.removeAttribute('block-clone');
  parent.appendChild(clone);
};
cloneBlock();


// Сворачивание теста на desktope

const openDetails = () => {
  const isDesktop = window.matchMedia('(min-width: 1280px)');
  const details = document.querySelectorAll('.details');

  details.forEach((detail) => {
    const img = detail.querySelector('summary img');
    if(isDesktop.matches) {
      detail.setAttribute('open', '1');
      img.src = 'icons/stack.svg#arrow_up';
    }
  });
};
openDetails();

// Попап
// const openPopup = () => {
//   const popupMain = document.querySelector('.popup');
//   const popupToggle = document.querySelector('.popup__toggle');

//   popupMain.classList.remove('popup--nojs');

//   popupToggle.addEventListener('click', () => {
//     if (popupMain.classList.contains('popup--closed')) {
//       popupMain.classList.remove('popup--closed');
//       popupMain.classList.add('popup--opened');
//     } else {
//       popupMain.classList.add('popup--closed');
//       popupMain.classList.remove('popup--opened');
//     }
//   });
// };
// openPopup();
