import React from 'react'
import "./Nav.scss"
import SearchBox from '../../components/SearchBox/SearchBox'
import menu from "../../assets/images/menu-icon.png"
import FilterMenu from '../../components/FilterMenu/FilterMenu'
import { useState } from 'react'



const Nav = ({searchBox, handleInputForSearchBox, handleFilterByAlcohol, filterByAlcoholContent, handleFilterByPH, filterByAlcoholPH, handleFilterByClassicAlcohol, filterByClassicAlcohol}) => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const toggleFilter = () => {
    setShowFilterMenu(!showFilterMenu);
  };
  
  return (
    <nav className='nav'>
      <h2 className='navHeading'>Brewdog</h2>
      <SearchBox  label="search" searchBox={searchBox} handleInputForSearchBox={handleInputForSearchBox}/>
      <img src={menu} className="nav_icon" alt="menu icon" onClick={toggleFilter}/>
      {showFilterMenu && <FilterMenu handleFilterByAlcohol={handleFilterByAlcohol} filterByAlcoholContent={filterByAlcoholContent} handleFilterByPH={handleFilterByPH} filterByAlcoholPH={filterByAlcoholPH} handleFilterByClassicAlcohol={handleFilterByClassicAlcohol} filterByClassicAlcohol={filterByClassicAlcohol} toggleFilter={toggleFilter}/>}
      
    </nav>
  )
}

export default Nav