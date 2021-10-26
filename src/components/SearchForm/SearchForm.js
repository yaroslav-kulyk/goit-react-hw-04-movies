import { useState } from 'react';

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
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input
        // className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
      </button>
    </form>
  );
}
