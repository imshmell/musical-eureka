// Menu start
const hamburger = document.querySelector('.header__hamburger-wrapper');
const nav = document.querySelector('.header__nav');
const navList = document.querySelector('.header__nav-list');
const submenu = document.querySelectorAll('.header__submenu');
const backBtn = document.querySelectorAll('.nav__submenu-back');

// Клик по гамбургеру:

hamburger.addEventListener('click', function() {

  nav.classList.toggle('open');
  // Чтобы не было анимации меню до клика:
  navList.style.transition = 'transform 0.3s linear';

  if (nav.classList.contains('open')) {
    bodyScrollLock.disableBodyScroll(nav);
  } else {
    bodyScrollLock.enableBodyScroll(nav);
  }

});

// Убираем меню по клику на серую часть:

nav.addEventListener('click', function(event) {

  if (event.target === this) {
    if (this.classList.contains('open')) {
        this.classList.remove('open');
        bodyScrollLock.enableBodyScroll(nav);
    }
    // Если открыто сабменю убираем его при закрытии меню:
    submenu.forEach(function(item) {
      if (item.classList.contains('open')) {
        item.classList.remove('open');
      }
    });
  }
});

// Чтобы закрывалось когда меняешь размер экрана:

function handleNavToggle() {
  if (window.innerWidth > 1279) {
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      bodyScrollLock.enableBodyScroll(nav);
    }
    submenu.forEach(function(item) {
      if (item.classList.contains('open')) {
        item.classList.remove('open');
        bodyScrollLock.enableBodyScroll(nav);
      }
    });
  }
}

window.addEventListener('resize', handleNavToggle);
window.addEventListener('load', handleNavToggle);

// Открываем сабменю:

submenu.forEach(function(item, index) {
  item.addEventListener('click', function() {
    this.classList.add('open');
  });

// Кнопка назад:

  backBtn[index].addEventListener('click', function(event) {
    event.stopPropagation();
    const parentSubmenu = item.closest('.header__nav-item.header__submenu.open');
    if (parentSubmenu) {
        parentSubmenu.classList.remove('open');
    }
  });
});

// Menu end

// Hero-swiper start

let heroSwiperInit = false;
let swiperhero;

function swiperSet(_match_) {
  const swiper_block = document.querySelector('.hero__cards-block');
  const nextBtn = swiper_block.querySelector('.hero__buttons-block .hero__button-next');
  const prevBtn = swiper_block.querySelector('.hero__buttons-block .hero__button-prev');
  const swiper_wrapper = swiper_block.querySelector('.hero__card-list');
  const swiper_slides = swiper_wrapper.querySelectorAll('li');

  if (_match_.matches && !heroSwiperInit) {
    heroSwiperInit = true;
    swiper_block.classList.add('swiper');
    swiper_wrapper.classList.add('swiper-wrapper');
    swiper_slides.forEach(_slide_ => _slide_.classList.add('swiper-slide'));
    swiperhero = new Swiper(swiper_block, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 8,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      a11y: {
        slideRole: 'listitem',
      },
    });
  } else if (!_match_.matches && swiperhero) {
    swiper_block.classList.remove('swiper');
    swiper_wrapper.classList.remove('swiper-wrapper');
    swiper_slides.forEach(_slide_ => _slide_.classList.remove('swiper-slide'));
    swiperhero.destroy();
    heroSwiperInit = false;
  }
}

const swiperFunc = () => {
  const match = window.matchMedia("(max-width: 767px)");
  swiperSet(match);
  match.addEventListener('change', swiperSet);
};

swiperFunc();

// Hero-swiper end

// Options swiper start

const swiperOptions = new Swiper(".options__wrapper", {
  speed: 900,
  slidesPerView: 1,
    spaceBetween: 24,
    autoHeight: true,
    navigation: {
      nextEl: ".button-next.options__button-next",
      prevEl: ".button-prev.options__button-prev",
    },
    a11y:{
      slideRole: 'listitem',
    },
    breakpoints: {
    	992: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    }
});
                            
// Options swiper end
                            
                            
const solutionsitems = document.querySelectorAll('.solutions__small-blocks');

solutionsitems.forEach(_item_ => {
  _item_.addEventListener('mouseover', () => {
    if (window.innerWidth > 1279) {
      const text = _item_.querySelector('.solutions__content-text');
      text.style.display = 'block';

      const content = _item_.querySelector('.solutions__content');
      const textHeight = text.offsetHeight;
      content.style.transform = `translateY(-${textHeight}px)`;
    }
  });

  _item_.addEventListener('mouseout', () => {
    if (window.innerWidth > 1279) {
      const text = _item_.querySelector('.solutions__content-text');
      text.style.display = 'none';

      const content = _item_.querySelector('.solutions__content');
      content.style.transform = 'translateY(0)';
    }
  });

});

                            
// Reviews swiper start

const swiperReviews = new Swiper(".reviews-container", {
  speed: 900,
  slidesPerView: 1,
    spaceBetween: 24,
    autoHeight: true,
    navigation: {
      nextEl: ".button-next.reviews__button-next",
      prevEl: ".button-prev.reviews__button-prev",
    },
    a11y:{
      slideRole: 'listitem',
    },
    breakpoints: {
    	992: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    }
});

// Reviews swiper end


// Projects swiper start

const swiperProjects = new Swiper(".projects__swiper", {
  speed: 900,
  loop: true,
  slidesPerView: 1,
    spaceBetween: 24,
    autoHeight: true,
    navigation: {
      nextEl: ".button-next.projects__button-next",
      prevEl: ".button-prev.projects__button-prev",
    },
    a11y:{
      slideRole: 'listitem',
    },
});
                            
// Projects swiper end


// Video start

const video = document.querySelector('.whyus__video');
const btn = document.querySelector('.whyus__video-pb-block');

  btn.addEventListener('click', () => {
    btn.remove();
    video.play();
    video.setAttribute('controls', '');
    video.style.zIndex = "1";
  });

// Video end
                            
                            
// Process start              
                            
const processHeadings = document.querySelectorAll('.process__item-heading');

processHeadings.forEach(function(heading) {
  heading.addEventListener('click', function() {
    const processItem = heading.closest('.process__item');
    if (heading.classList.contains('show')) {
      processItem.style.height = '';
      heading.classList.remove('show');
    } else {
      processItem.style.height = processItem.scrollHeight + 'px';
      heading.classList.add('show');
    }
  });
});

// Process end


// Start - Calendar icon transter input text to label
window.addEventListener('DOMContentLoaded', () => {

const input = document.querySelector('input[type="date"]');
const icon = document.querySelector('.form__field-icon');
const label = document.querySelector('label[for="date"]');

icon.addEventListener('click', () => {
  input.showPicker();  
});

input.addEventListener('input', updateLabel);

function updateLabel() {
  const inputValue = input.value.split('-');
  label.textContent = `${inputValue[1]}/${inputValue[2]}/${inputValue[0]}`;
};
});

// End - Calendar icon transter input text to label


// Select start

// Label двигается наверх:

const formFieldInputs = document.querySelectorAll(".form__field");

formFieldInputs.forEach(function (formField) {

  formField.addEventListener("focus", function (e) {
    e.target.nextElementSibling.classList.add("active");
  });

  formField.addEventListener("blur", function (e) {
    if (e.target.value == '') {
      e.target.nextElementSibling.classList.remove("active");
    }
  });
  
});

// Передаем значение:

  const selectHeading = document.querySelector(".select-custom__heading");
  const selectListItems = document.querySelectorAll(".select-custom__list-item");
  const selectListItemsArray = Array.from(selectListItems);
  // const regularSelect = document.getElementById("service");

  selectListItems.forEach(function (listItem) {
    listItem.addEventListener("click", function () {

      // Обновляем текст в .select-custom__heading
      selectHeading.textContent = listItem.textContent;
      const selectedIndex = selectListItemsArray.indexOf(listItem);
      console.log("Значение выбранного заголовка div",selectHeading);
      console.log('Его индекс: ',selectedIndex);

      // Обновляем значение в обычном select - не уверена, что работает
      // regularSelect.value = selectedValue;
      // console.log("Select value is:",regularSelect.value);

      // Это работает, но может лучше ставить атрибут при submit?:
      const options = Array.from(document.querySelectorAll("#service option"));

      options.forEach(function(option) {
        if (option.hasAttribute("selected")) {
          option.removeAttribute("selected");
        }
      });

      // if (selectedIndex >= 0 && selectedIndex < options.length) {
        options[selectedIndex].setAttribute("selected", "");
        console.log(options[selectedIndex]);
      // }

    });
  });

// Открытие/закрытие выпадающего списка:
  const selectCustom = document.querySelector(".select-custom");
  const selectList = document.querySelector(".select-custom__list");

  selectCustom.addEventListener("click", function () {
      selectList.classList.toggle("open");
      selectHeading.classList.toggle("rotate");
  });

// Select end
