import React from 'react';

import { Button, Input } from './style.js';

const initialState = {
  dateOrder: 'desc',
  genre: '',
  query: ''
};

const SearchPanel = ({ handleSubmit, genres }) => {
  const [query, setQuery] = React.useState(initialState);

  const handleDateOrder = ({ currentTarget }) => {
    const dateOrder = currentTarget.checked ? 'asc' : 'desc';
    setQuery({ ...query, dateOrder });
  };

  const handleSelectGenre = ({ currentTarget }) => {
    const genre = currentTarget.value;
    setQuery({ ...query, genre });
  };

  const handleSearch = ({ currentTarget }) => {
    const title = currentTarget.value;
    setQuery({ ...query, title });
  };

  return (
    <form onSubmit={event => handleSubmit(event, query)}>
      <Input type="text" name="name" onChange={handleSearch} />
      <label htmlFor="date-order">
        <input type="checkbox" id="date-order" onChange={handleDateOrder}></input>
        old first
      </label>

      <select onChange={handleSelectGenre}>
        {genres &&
          genres.map((item, index) => (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          ))}
      </select>

      <Button type="submit">Search</Button>
    </form>
  );
};
export default SearchPanel;
