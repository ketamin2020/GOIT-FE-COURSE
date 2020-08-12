const baseUrl = 'https://restcountries.eu/rest/v2/name/';
export default {
  searchCountries(query) {
    const searchString = baseUrl + `${query}`;

    return fetch(searchString).then(response => {
      if (query && response.ok) {
        return response.json();
      } else {
        return [];
      }
    });
  },
};
