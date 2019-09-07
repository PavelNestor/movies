import React from 'react';

import { Button, Input } from "./style.js";

const SearchPanel = ({ handleSubmit, handleSearch, handleSelectGenre, genres }) => {

  return (
    <form onSubmit={handleSubmit}>
        <Input type="text" name="name" onChange={handleSearch}/>
        <input type="checkbox" ></input>
        
        <select onChange={handleSelectGenre}>
          {genres && genres.map((item, index) => <option key={index} value={item.id}>{item.name}</option>)}
        </select>

        <Button type="submit" >Search</Button>
    </form>
  );
};
export default SearchPanel;