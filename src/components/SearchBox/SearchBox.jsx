import React from 'react'
import "./SearchBox.scss"

const SearchBox = ({label, searchBox, handleInputForSearchBox}) => {


  return (
    <form className='search-box'>
      <label htmlFor={label}></label>
      <input type="text" placeholder="Search..." name={label} className="searchInput" onInput={handleInputForSearchBox} value={searchBox}/>
    </form>
  )
}

export default SearchBox