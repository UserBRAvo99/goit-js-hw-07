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
  event.preventDefault();
  if (!event.target.closest(".gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
  `);
  instance.show();
  const visible = basicLightbox.visible();
  //перевіряємо чи модальне вікно відкрите
  if (visible) {
    //додаємо слухача на кнопку
    document.addEventListener("keydown", (event) => {
      console.dir(event.key);
      if (event.key === "Escape") {
        //закриваємо вікно при натисканні "Escape"
        instance.close();
        document.removeEventListener("keydown", event);
      }
    });
  }
});
