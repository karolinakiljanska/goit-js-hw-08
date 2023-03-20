import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/common.css';
import '../css/01-gallery.css';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('afterbegin', createGalleryItems(galleryItems));

function createGalleryItems(image) {
  return image
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
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
    .join('');
}
gallery.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  let lightbox = new SimpleLightbox('.gallery a', {
    scrollZoom: false,
    captionDelay: 250,
    captionsData: 'alt',
    doubleTapZoom: 1,
  });
  instanse.show();

  function modalClose(event) {
    console.log(event.code);
    if (event.code === 'Escape') {
      instanse.close();
    }
  }
}
