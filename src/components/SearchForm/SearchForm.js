import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

export default function SearchForm({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <div className={styles.SearchBar}>
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
          className={styles.SearchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={value}
          onChange={handleChange}
        />
        <button type="submit" className={styles.SearchButton}>
          Search
        </button>
      </form>
    </div>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
