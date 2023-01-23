import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector(".gallery");

const makeGallaryList = galleryItems
  .map((item) => {
    console.log(item.original);
    return `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`;
  })
  .join("");
galleryListEl.insertAdjacentHTML("beforeend", makeGallaryList);

const lightbox = new SimpleLightbox(".gallery a", {
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
