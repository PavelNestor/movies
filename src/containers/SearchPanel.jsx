import React from 'react';

import { Button, Input } from './style.js';

import { Radio, Select, SelectWrapper, SearchWrapper, FormGroup } from './style.js';

const initialState = {
  sortBy: '',
  genre: '',
  title: ''
};

const SearchPanel = ({ handleSubmit, genres }) => {
  const [query, setQuery] = React.useState(initialState);
  const [genresList, setGenresList] = React.useState([{ name: 'choose a genre' }]);

  React.useEffect(() => {
    setGenresList([...genresList, ...genres]);
  }, [genres]);

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
    <SearchWrapper>
      <form onSubmit={event => handleSubmit(event, query)}>
        <FormGroup>
          <Radio htmlFor="date-order-old">
            <input
              type="radio"
              id="date-order-old"
              name="sort-by"
              value="release_date.asc"
              onChange={handleSortOrder}
            ></input>
            <span>old first</span>
          </Radio>
          <Radio htmlFor="date-order-new">
            <input
              type="radio"
              id="date-order-new"
              name="sort-by"
              value="release_date.desc"
              onChange={handleSortOrder}
            ></input>
            <span>new first</span>
          </Radio>
          <Radio htmlFor="rating-order-less">
            <input
              type="radio"
              id="rating-order-less"
              name="sort-by"
              value="popularity.asc"
              onChange={handleSortOrder}
            ></input>
            <span>less popular first</span>
          </Radio>
          <Radio htmlFor="rating-order-more">
            <input
              type="radio"
              id="rating-order-more"
              name="sort-by"
              value="popularity.desc"
              onChange={handleSortOrder}
            ></input>
            <span>more popular first</span>
          </Radio>
        </FormGroup>

        <FormGroup>
          <Input type="text" name="name" onChange={handleSearch} placeholder="Enter your query" />
          <SelectWrapper>
            <Select onChange={handleSelectGenre}>
              {genresList &&
                genresList.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </Select>
          </SelectWrapper>

          <Button type="submit">Search</Button>
        </FormGroup>
      </form>
    </SearchWrapper>
  );
};
export default SearchPanel;
