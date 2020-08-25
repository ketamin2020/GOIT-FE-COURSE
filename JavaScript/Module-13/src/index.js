import './styles.css';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';
import searchApi from './apiService';
import searchForm from '../src/templates/searchForm.hbs';
import galleryTemplates from '../src/templates/galleryTemplate.hbs';
const debounce = require('lodash.debounce');
const basicLightbox = require('basiclightbox');
const bodyRef = document.querySelector('body');
bodyRef.insertAdjacentHTML('afterbegin', searchForm());
const loadMoreBtnRef = document.querySelector('.btn-load');
const galleryItemRef = document.querySelector('.gallery');
const inputRef = document.querySelector('#search-form');
loadMoreBtnRef.addEventListener('click', loadMoreImagesHandler);
bodyRef.addEventListener('click', onClickTargetImg);
inputRef.addEventListener('input', debounce(searchFormInput, 500));

function searchFormInput(e) {
  clearSearchList();
  const searchText = e.target.value;
  searchApi.resetPage();
  searchApi.searchQuery = searchText;
  searchApi.fetchToPixabay().then(insertGallery);
}

function insertGallery(item) {
  const markup = galleryTemplates(item);
  galleryItemRef.insertAdjacentHTML('beforeend', markup);
}

function loadMoreImagesHandler() {
  searchApi.fetchToPixabay().then(insertGallery);
  scrollToNewImages();
}

function clearSearchList() {
  galleryItemRef.innerHTML = '';
}

function onClickTargetImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.target.src = event.target.dataset.large;
  const img = `<img width="1400" height="900" src=${event.target.src}/>`;
  const instance = basicLightbox.create(img);
  instance.show();
}

function scrollToNewImages() {
  const heightOfScroll = window.innerHeight - 640;
  window.scrollBy({
    top: heightOfScroll,
    behavior: 'smooth',
  });
}
