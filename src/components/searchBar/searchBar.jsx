import { useState } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';

import { SearchBarWrap } from './searchBar.styled';
import { SearchForm } from './searchBar.styled';
import { SearchButton } from './searchBar.styled';
import { FiSearch } from 'react-icons/fi';
import { SearchInput } from './searchBar.styled';

const Searchbar = ({ onSubmit }) => {
  const [value, setVelue] = useState('');

  const handleChange = e => setVelue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      toast.warn('Pleace, enter a query');
      return;
    }

    onSubmit(value);
    setVelue('');
  };

  return (
    <SearchBarWrap>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <FiSearch size={30} />
        </SearchButton>

        <SearchInput
          type="text"
          autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
      </SearchForm>
    </SearchBarWrap>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
