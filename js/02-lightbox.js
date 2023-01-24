import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector(".gallery");
//Перебираємо об'єкт galleryItems та рендеромо розмітку
const makeGallaryList = galleryItems
  .map((item) => {
    console.log(item.original);
    return `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`;
  })
  .join("");
//додаємо розмітку до потрібного батьківського тега
//уважно обираємо insertAdjacentHTML("beforeend" -- куди саме будемо рендирити розмітку, makeGallaryList)
galleryListEl.insertAdjacentHTML("beforeend", makeGallaryList);
//Додаємо розмітку (читати документацію SimpleLightbox)
//данний варіант не потребує слухача, просто додаємо потрібний код(заздалегіть під'єднаний через посилання в хедері та боді)
const lightbox = new SimpleLightbox(".gallery a", {
  //тут прописуємо потрібні доп опції (набір опцій та їх властивості, описані в документації)
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});

// import { galleryItems } from "./gallery-items.js";
// // Change code below this line
// // console.log(galleryItems);
// const gallery = document.querySelector(".gallery");

// function importGallery(images) {
//   const galleryItems = images
//     .map(
//       (image) =>
//         `<a class="gallery__item" href="${image.original}">
//   <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
// </a>`
//     )
//     .join("");
//   gallery.insertAdjacentHTML("afterbegin", galleryItems);
// }

// importGallery(galleryItems);

// const lightbox = new SimpleLightbox(".gallery a", {
//   captionsData: "alt",
//   captionDelay: 250,
//   captionPosition: "bottom",
// });
