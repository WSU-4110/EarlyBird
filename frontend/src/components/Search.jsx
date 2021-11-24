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
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid justify-content-end">
        <form className="d-flex">
          <input data-testid="key" onChange={handleChange} value={searchTerm} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button data-testid="btn" onClick={handleClick} className="btn btn-outline-success">Search</button>
        </form>
      </div>
    </nav>
  </div>
);

}

export default Search;