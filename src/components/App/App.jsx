import { useState, useEffect } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageApi } from 'components/services/api';
import Searchbar from 'components/searchBar/searchBar';
import ImageGaleery from 'components/imageGallery/imageGallery';
import LoadMoreBtn from 'components/button/button';
import Modal from 'components/modal/modal';
import Loader from 'components/loader/loader';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState([]);
  const [largeImg, setLargeImg] = useState('');
  const [totalHits, setTotalHits] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    setLoading(true);

    ImageApi({ searchQuery, currentPage })
      .then(({ hits, totalHits }) => {
        setTotalHits(totalHits);
        setImages(prevState => [...prevState, ...hits]);
      })
      .catch(error => toast.warn(error.message))
      .finally(() => setLoading(false));
  }, [searchQuery, currentPage]);

  const getLargeImage = largeImage => {
    setShowModal(true);
    setLargeImg(largeImage);
  };

  const handleFormSubmit = value => {
    setSearchQuery(value);
    setImages([]);
    setCurrentPage(1);
  };

  const handleLoadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <img src={largeImg} alt="" width="900" height="600" />
        </Modal>
      )}

      <ToastContainer autoClose={1000} />

      <Searchbar onSubmit={handleFormSubmit} />

      {loading && <Loader />}

      <ImageGaleery params={images} bigImage={getLargeImage} />

      {totalHits > images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} title="Load more" />
      )}
    </div>
  );
};

export default App;
