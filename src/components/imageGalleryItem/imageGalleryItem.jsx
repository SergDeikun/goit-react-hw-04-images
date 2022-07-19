import PropTypes from 'prop-types';

import { Item, Image } from './imageGalleryItem.styled';

const ImageGalleryItem = ({ url, alt, onOpen }) => {
  return (
    <Item>
      <Image src={url} alt={alt} onClick={onOpen} />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
