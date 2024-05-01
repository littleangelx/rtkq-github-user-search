import { useRef } from "react";

import searchIcon from "/assets/icon-search.svg";
import { useGetUserQuery } from "../api/apiSlice";

const SearchBar = ({ onSearch, searchUserName }) => {
  const inputRef = useRef();

  const { isError } = useGetUserQuery(searchUserName);

  return (
    <div className="searchBar">
      <div className="lhs">
        <img src={searchIcon} />
        <input ref={inputRef} placeholder="Search GitHub username..." />
      </div>
      {isError && searchUserName && <p className="errorMessage">No results</p>}
      <button onClick={() => onSearch(inputRef.current.value)}>Search</button>
    </div>
  );
};

export default SearchBar;
