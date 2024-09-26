import React from 'react'

const Search = () => {
  return (
    <div class="header__search">
      <input
        class="input header__input"
        type="text"
        id="search"
        placeholder="Пошук"
      ></input>
      <label class="sr-only tr" for="search">
        Пошук по сайту
      </label>
    </div>
  )
}

export default Search