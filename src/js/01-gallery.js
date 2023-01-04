import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function createMarkup(arr) {
  const items = galleryItems
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
 </a></li> `;
    })
    .join('');
  return items;

}

galleryEl.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });

console.log(galleryItems);
