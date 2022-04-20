import React from 'react'
import "./SearchBox.scss"

const SearchBox = ({label}) => {

  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);
  return (
    <form className='search-box'>
      <label htmlFor={label}>{capitalizedLabel}</label>
      <input type="text" name={label} value= "" className="searchInput"/>
    </form>
  )
}

export default SearchBox