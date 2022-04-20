import React from 'react'
import "./Nav.scss"
import SearchBox from '../../components/SearchBox/SearchBox'


const Nav = () => {
  
  return (
    <nav className='nav'>
      <h2 className='navHeading'>Beers</h2>
      <SearchBox label={"beers"}/>
      
    </nav>
  )
}

export default Nav