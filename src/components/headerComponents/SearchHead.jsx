import React from "react";

const SearchHead = () => {
  return (
    <div class="container-btn" tabindex="1">
      <div class="search-container" tabindex="1">
        <input type="text" placeholder="Пошук"></input>
        <a class="button-circle">
          <i class="fa fa-search"></i>
        </a>
      </div>
    </div>
  );
};

export default SearchHead;
