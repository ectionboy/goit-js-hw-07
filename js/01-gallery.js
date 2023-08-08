import { galleryItems } from './gallery-items.js';
// Change code below this line



// Create gallery markup
const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
         <a class="gallery__link" href="${original}">
           <img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
           />
         </a>
       </li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

// Open modal on image click
const images = document.querySelectorAll('.gallery__image');

images.forEach((image) => {
  image.addEventListener('click', (event) => {
    event.preventDefault();

    const src = event.target.dataset.source;
    const alt = event.target.alt;

    const modal = basicLightbox.create(`
      <img src="${src}" alt="${alt}">
    `);

    modal.show();
  });
});
