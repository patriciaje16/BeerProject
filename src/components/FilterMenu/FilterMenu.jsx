import React from 'react'
import "./FilterMenu.scss"
import whiteCross from "../../assets/images/white-cross.png"


const FilterMenu = ({ handleFilterByAlcohol, filterByAlcoholContent, handleFilterByPH, filterByAlcoholPH, handleFilterByClassicAlcohol, filterByClassicAlcohol, toggleFilter}) => {
  return (
    <div className = "filter-menu">
      <div className = "filter-content">
        <img src={whiteCross} alt="Close menu" className="filter-menu-cross" onClick={toggleFilter}/>
        <label htmlFor="ABV filter">ABV 6.0% and above</label>
        <input type="checkbox" className='abv_filter'
          checked={filterByAlcoholContent}
          onChange={handleFilterByAlcohol}
        />
        <label htmlFor="PH filter">PH of 4.0 and above</label>
        <input type="checkbox" className='ph_filter'
          checked={filterByAlcoholPH}
          onChange={handleFilterByPH}
        />
        <label htmlFor="classic range">Classic Range</label>
        <input type="checkbox" className='classic_filter'
          checked={filterByClassicAlcohol}
          onChange={handleFilterByClassicAlcohol}
        />

      </div>
    </div>
  )
}


export default FilterMenu