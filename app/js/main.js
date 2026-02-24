// WOW JS Конфликтует с оверфлоу хайден на бади или секций
window.onscroll = function showHeader() {
  let header = document.querySelector('.header');
  if (window.pageYOffset > 500) {
    header.classList.add('header__fixed');
  } else {
    header.classList.remove('header__fixed');
  }
}


$(function () {

  $('.menu__btn').on('click', (function () {
    if (!$('.nav').hasClass('active')) {
      $('.nav').addClass('active');
      $('.menu__btn').addClass('active');
      $('body').addClass('menu-opened');
      // $('.menu__list-drop').addClass('active');
      // $('.menu__list-drop').on('click', (e) => {
      //   e.target.classList.toggle('active');
      // })

    } else {
      $('.nav').removeClass('active');
      $('.menu__btn').removeClass('active');
      $('body').removeClass('menu-opened');
      // $('.menu__list-drop').removeClass('active');
      // $('.menu__list-drop').on('click', (e) => {
      //   e.target.classList.toggle('active');
      // })
    }


  }));

  lightGallery(document.querySelector('.gallery'));
  lightGallery(document.querySelector('.portfolio'));

  const container = document.querySelector(".warning");
  if (document.cookie.indexOf("warning") != -1) {
    container.classList.remove("warning--active");
  }

  if (document.querySelector(".warning")) {
    const apply = container.querySelector(".warning__apply");
    apply.addEventListener("click", () => {
      container.classList.remove("warning--active");
      document.cookie = "warning=true; max-age=2592000; path=/";
    });
  };

  
});

const modalTrigger = document.querySelectorAll('[data-modal]'),
  modal = document.querySelector('.modal'),
  modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  });
});

function clossModel() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', clossModel);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    clossModel();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === "Escape" && modal.classList.contains('show')) {
    clossModel();
  }
});