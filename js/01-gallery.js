import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
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
getGallatyEl.insertAdjacentHTML("beforebegin", makeGallary);
