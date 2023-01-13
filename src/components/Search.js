import React from "react";

//material ui icon
import SearchIcon from "@mui/icons-material/Search";

//style
import "./Search.css";

function Search() {
  return (
    <div className="search">
      <div className="search-input">
        <SearchIcon className="search-icon" />
        <input type="text" placeholder="Enter a Telegram username..." />
      </div>
    </div>
  );
}

export default Search;
