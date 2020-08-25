const API_KEY = '?key=18038475-d13b74e7e60d256e98f342690';
const BASE_URL = 'https://pixabay.com/api/';
const URL = BASE_URL + API_KEY + '&image_type=photo&orientation=horizontal&q=';
export default {
  page: 1,
  query: '',
  fetchToPixabay() {
    const requestParams = `${this.query}&page=${this.page}&per_page=12`;
    if (!this.query) {
      return;
    }
    return fetch(URL + requestParams)
      .then(response => response.json())
      .then(data => {
        this.icrementPage();
        return data.hits;
      });
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },

  icrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};
