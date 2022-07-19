import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';

import { SearchBarWrap } from './searchBar.styled';
import { SearchForm } from './searchBar.styled';
import { SearchButton } from './searchBar.styled';
import { FiSearch } from 'react-icons/fi';
import { SearchInput } from './searchBar.styled';

class Searchbar extends Component {
  state = { value: '' };

  handleChange = e => {
    this.setState({ value: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.value.trim() === '') {
      toast.warn('Pleace, enter a query');
      return;
    }

    this.props.onSubmit(this.state.value);

    this.reset();
  };

  reset = () => {
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;

    return (
      <SearchBarWrap>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <FiSearch size={30} />
          </SearchButton>

          <SearchInput
            type="text"
            autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            value={value}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchBarWrap>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
