// // слайдер секции Authors
// const items = document.querySelectorAll(".people__item");
// const itemContents = Array.from(items).map((item) => item.innerHTML);

// let currentIndexA = 1; // Центральный элемент

// function updateSlidesA() {
//   items.forEach((item, index) => {
//     const contentIndex =
//       (currentIndexA + index - 1 + itemContents.length) % itemContents.length;
//     item.innerHTML = itemContents[contentIndex];
//     if (index === 1) {
//       // Центральный элемент
//       item.classList.add("active");
//     } else {
//       item.classList.remove("active");
//     }
//   });
// }

// function showNextSlide() {
//   currentIndexA = (currentIndexA + 1) % itemContents.length;
//   updateSlidesA();
// }

// function showPreviousSlide() {
//   currentIndexA = (currentIndexA - 1 + itemContents.length) % itemContents.length;
//   updateSlidesA();
// }

// document.querySelector(".people__item").addEventListener("wheel", (event) => {
//   if (event.deltaY > 0) {
//     showNextSlide();
//   } else {
//     showPreviousSlide();
//   }
//   event.preventDefault(); // Предотвращаем прокрутку страницы
// });

// // Инициализация слайдера
// updateSlidesA();

// // слайдер секции opinions
// const slides = document.querySelectorAll(".slide");

// // Сохраняем изначальное содержимое слайдов
// const slideContentsB = Array.from(slides).map((slide) => slide.innerHTML);

// let currentIndex = 1; // Начальный индекс, центральный слайд

// function updateSlides() {
//   slides.forEach((slide, index) => {
//     const contentIndex =
//       (currentIndex + index - 1 + slideContentsB.length) % slideContentsB.length;
//     slide.innerHTML = slideContentsB[contentIndex];
//     if (index === 1) {
//       slide.classList.add("active");
//     } else {
//       slide.classList.remove("active");
//     }
//   });
// }

// function showNextSlide() {
//   currentIndex = (currentIndex + 1) % slideContentsB.length;
//   updateSlides();
// }

// function showPreviousSlide() {
//   currentIndex =
//     (currentIndex - 1 + slideContentsB.length) % slideContentsB.length;
//   updateSlides();
// }

// document.querySelector(".slider").addEventListener("wheel", (event) => {
//   if (event.deltaY > 0) {
//     showNextSlide();
//   } else {
//     showPreviousSlide();
//   }
//   event.preventDefault(); // предотвращаем прокрутку страницы
// });

// // Инициализация слайдера
// updateSlides();

// Функция-конструктор для создания слайдера
function Slider(sliderElement, slideSelector, activeClassName) {
  this.sliderElement = sliderElement;
  this.slides = sliderElement.querySelectorAll(slideSelector);
  this.slideContents = Array.from(this.slides).map((slide) => slide.innerHTML);
  this.currentIndex = 1; // Центральный элемент
  this.activeClassName = activeClassName;

  // Метод для обновления содержимого слайдов
  this.updateSlides = function () {
    this.slides.forEach((slide, index) => {
      // Вычисляем индекс содержимого
      const contentIndex =
        (this.currentIndex + index - 1 + this.slideContents.length) %
        this.slideContents.length;
      slide.innerHTML = this.slideContents[contentIndex];
      // Добавляем/удаляем класс active
      if (index === 1) {
        slide.classList.add(this.activeClassName);
      } else {
        slide.classList.remove(this.activeClassName);
      }
    });
  };

  // Метод для отображения следующего слайда
  this.showNextSlide = function () {
    this.currentIndex = (this.currentIndex + 1) % this.slideContents.length;
    this.updateSlides();
  };

  // Метод для отображения предыдущего слайда
  this.showPreviousSlide = function () {
    this.currentIndex =
      (this.currentIndex - 1 + this.slideContents.length) %
      this.slideContents.length;
    this.updateSlides();
  };

  // Обработчик событий прокрутки
  this.sliderElement.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
      this.showNextSlide();
    } else {
      this.showPreviousSlide();
    }
    event.preventDefault(); // Предотвращаем прокрутку страницы
  });

  // Инициализация слайдера
  this.updateSlides();
}

// Инициализация первого слайдера
const slider1 = new Slider(
  document.querySelector(".opinions .slider"), // Родительский элемент слайдера
  ".slide", // Класс слайда
  "active" // Класс для активного слайда
);

// Инициализация второго слайдера
const slider2 = new Slider(
  document.querySelector(".ulslider .people__list"), // Родительский элемент слайдера
  ".people__item", // Класс слайда
  "active" // Класс для активного слайда
);