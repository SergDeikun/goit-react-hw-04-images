import PropTypes from 'prop-types';

const URL = 'https://pixabay.com/api/';
const KEY = '27490276-ab5b5e1d2864396bd713e71df';

export const ImageApi = ({ searchQuery, currentPage, perPage }) => {
  return fetch(
    `${URL}?q=${searchQuery}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

ImageApi.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
};
