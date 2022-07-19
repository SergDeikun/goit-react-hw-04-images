import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/imageGalleryItem/imageGalleryItem';
import { ImageGallery } from './imageGallery.styled';

const ImageGaleery = ({ params, bigImage }) => {
  return (
    <ImageGallery>
      {params.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            url={webformatURL}
            alt={tags}
            onOpen={() => bigImage(largeImageURL)}
          />
        );
      })}
    </ImageGallery>
  );
};

ImageGaleery.propTypes = {
  bigImage: PropTypes.func.isRequired,
  params: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGaleery;
