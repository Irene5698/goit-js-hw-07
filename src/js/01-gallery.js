import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const imagesContainer = document.querySelector(".gallery");
const imagesMarkup = createGalleryItems(galleryItems);
imagesContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

imagesContainer.addEventListener("click", (evt) => {
  evt.preventDefault();

  if (evt.target.nodeName != "IMG") {
    return;
  }

  const urlBigImage = evt.target.getAttribute("data-source");
  const instance = basicLightbox.create(
    `<img src="${urlBigImage}" width="800" height="600">`
  );

  instance.show();
});
