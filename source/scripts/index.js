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
const openPopup = () => {
  const dialog = document.querySelector('.popup__page');
  const dialogOpener = document.querySelector('.popup--opened');
  const dialogCloser = dialog.querySelector('.popup__button--closed');

  const closeOnBackDropClick = ({ currentTarget, target }) => {
    const dialog2 = currentTarget;
    const isClickedOnBackDrop = target === dialog2;
    if (isClickedOnBackDrop) {
      close();
    }
  };

  const openModalAndLockScroll = () => {
    dialog.showModal();
    document.body.classList.add('popup__scroll-lock');
  };

  const returnScroll = () => {
    document.body.classList.remove('popup__scroll-lock');
  };

  function close() {
    dialog.close();
    returnScroll();
  }

  dialog.addEventListener('click', closeOnBackDropClick);
  dialog.addEventListener('cancel', () => {
    returnScroll();
  });
  dialogOpener.addEventListener('click', openModalAndLockScroll);
  dialogCloser.addEventListener('click', (event) => {
    event.stopPropagation();
    close();
  });
};

openPopup();
