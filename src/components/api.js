import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const API_KEY = '35090195-afdc7158e936cde28bec4d744';
const PER_PAGE = 12;

export const fetchImages = async (searchQuery, page) => {
  const params = {
    orientation: 'horizontal',
    per_page: '12',
    image_type: 'photo',
    page: page,
    q: searchQuery,
  };
  const response = await axios.get(`/?key=${API_KEY}&page=${page}`, { params });

  const responseImages = normalisedImages(response.data.hits);
  const totalPages = Math.ceil(response.data.totalHits / PER_PAGE);
  return { responseImages, totalPages };
};

const normalisedImages = responseImages =>
  responseImages.map(({ id, webformatURL, largeImageURL, tags }) => ({
    id,
    webformatURL,
    largeImageURL,
    tags,
  }));