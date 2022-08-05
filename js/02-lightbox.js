import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const itemsMarkup = galleryItemsMarkup(galleryItems); //передаэмо галерею

galleryRef.insertAdjacentHTML('beforeend', itemsMarkup);

function galleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`;
    })
    .join('');
}

galleryRef.addEventListener('click', galleryRefAddContainerClick)

function galleryRefAddContainerClick(event) {
    
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    event.preventDefault();
   
}

 const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });