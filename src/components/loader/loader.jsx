import { Bars } from 'react-loader-spinner';
import { Spiner } from './loader.styled';

const Loader = () => {
  return (
    <Spiner>
      <Bars
        heigth="100"
        width="100"
        color="blue"
        ariaLabel="loading-indicator"
      />
    </Spiner>
  );
};

export default Loader;
