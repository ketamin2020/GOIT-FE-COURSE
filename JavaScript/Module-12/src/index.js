import './styles.css';
import '@pnotify/core/dist/BrightTheme.css';
import fetchCountries from './fetchCountries.js';
import countriesItemTemplate from '../src/templates/countriesItem.hbs';
import countryTemplate from '../src/templates/country.hbs';
const debounce = require('lodash.debounce');
const { error } = require('@pnotify/core');
const queryInput = document.querySelector('.input');
const item = document.querySelector('.item');
const bodyRef = document.querySelector('.body');
queryInput.addEventListener('input', debounce(searchFormInput, 500));

function searchFormInput(event) {
  event.preventDefault();
  clearList();
  const searchText = event.target.value;
  fetchCountries
    .searchCountries(searchText)
    .then(data => {
      if ((data.length > 10 && data.length !== 0) || data.length === 0) {
        error({
          text: 'Уточните параметры поиска!',
          delay: 1000,
        });
      } else if (data.length < 10 && data.length > 1) {
        const murkup = countriesListMarkup(data);
        buildCountriesList(murkup);
      } else if (data.length === 1) {
        const oneCountry = buildCountry(data);
        countryMarkup(oneCountry);
      }
    })
    .catch(error => console.warn(error));
}
function countryMarkup(items) {
  bodyRef.insertAdjacentHTML('beforeend', items);
}

function buildCountry(items) {
  return countryTemplate(items);
}

function countriesListMarkup(items) {
  return countriesItemTemplate(items);
}

function buildCountriesList(items) {
  item.insertAdjacentHTML('beforeend', items);
}

function clearList() {
  item.innerHTML = '';
  bodyRef.innerHTML = '';
}
