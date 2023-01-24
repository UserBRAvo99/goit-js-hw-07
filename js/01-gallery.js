import { galleryItems } from "./gallery-items.js";
// Change code below this line

const getGallatyEl = document.querySelector(".gallery");

const makeGallary = galleryItems
  .map((element) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`;
  })
  .join("");

getGallatyEl.insertAdjacentHTML("beforeend", makeGallary);

getGallatyEl.addEventListener("click", (event) => {
  //прибираємо відкривання нового вікна у посилань
  event.preventDefault();
  //перевіряємо клік по картинці(інверсія)
  if (!event.target.closest(".gallery__image")) {
    return;
  }
  //додаємо basicLightbox
  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
  `);
  instance.show();
  const visible = basicLightbox.visible();
  //перевіряємо чи модальне вікно відкрите
  if (visible) {
    //додаємо слухача на кнопку
    //на відміну від другого варіанту, тут ми використовуємо слухач
    document.addEventListener("keydown", (event) => {
      console.dir(event.key);
      //перевірка на натискання потрібної кнопки
      if (event.key === "Escape") {
        //закриваємо вікно при натисканні "Escape"
        instance.close();
        //знімаємо слухача з клавіатури, після закінчення роботи
        document.removeEventListener("keydown", event);
      }
    });
  }
});
