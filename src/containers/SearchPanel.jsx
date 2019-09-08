import React from 'react';

import { Button, Input } from './style.js';

const initialState = {
  sortBy: '',
  genre: '',
  title: ''
};

const SearchPanel = ({ handleSubmit, genres }) => {
  const [query, setQuery] = React.useState(initialState);
  const [genresList, setGenresList] = React.useState([{ name: 'choose a genre' }]);

  React.useEffect(() => {
    setGenresList([ ...genresList, ...genres]);
  }, [genres])

  const handleSortOrder = ({ currentTarget }) => {
    const sortOrder = currentTarget.value;
    setQuery({ ...query, sortBy: `&sort_by=${sortOrder}` });
  };

  const handleSelectGenre = ({ currentTarget }) => {
    const genre = currentTarget.value;
    setQuery({ ...query, genre: `&with_genres=${genre}` });
  };

  const handleSearch = ({ currentTarget }) => {
    const title = currentTarget.value;
    setQuery({ ...query, title });
  };

  return (
    <form onSubmit={event => handleSubmit(event, query)}>
      <Input type="text" name="name" onChange={handleSearch} />
      <label htmlFor="date-order-old">
        <input type="radio" id="date-order-old" name="sort-by" value="release_date.asc" onChange={handleSortOrder}></input>
        old first
      </label>
      <label htmlFor="date-order-new">
        <input type="radio" id="date-order-new" name="sort-by" value="release_date.desc" onChange={handleSortOrder}></input>
        new first
      </label>
      <label htmlFor="rating-order-less">
        <input type="radio" id="rating-order-more" name="sort-by" value="popularity.asc" onChange={handleSortOrder}></input>
        less popular first
      </label>
      <label htmlFor="rating-order-more">
        <input type="radio" id="rating-order-more" name="sort-by" value="popularity.desc" onChange={handleSortOrder}></input>
        more popular first
      </label>

      <select onChange={handleSelectGenre}>
        {genresList &&
          genresList.map((item, index) => (
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
