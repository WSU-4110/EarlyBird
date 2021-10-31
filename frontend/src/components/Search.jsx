import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import './Search.css';


function Search() {
  const [searchTerm, setTerm] = useState("");
  const history = useHistory();

  function handleChange(event) {
    setTerm(event.target.value);
  }

  function handleClick(event) {
    
  if (searchTerm.length > 0) {
    history.push({
      pathname:'/Results',
      state: {searchTerm}
    })
  }

  event.preventDefault();
}

return (
  <div>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid justify-content-end">
        <form class="d-flex">
          <input onChange={handleChange} value={searchTerm} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button onClick={handleClick} class="btn btn-outline-success">Search</button>
        </form>
      </div>
    </nav>
  </div>
);

}

export default Search;