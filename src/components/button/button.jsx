import PropTypes from 'prop-types';
import { LoadBtn } from './button.styled';

const LoadMoreBtn = ({ onClick, title }) => {
  return (
    <LoadBtn type="button" onClick={onClick}>
      {title}
    </LoadBtn>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default LoadMoreBtn;
