import React from 'react'
import Main from './containers/Main/Main'
import Nav from './containers/Nav/Nav'
import beerArray from './data/beers'

const App = () => {
  return (
    <div>
      <Nav beerArray={beerArray}/>
      <Main /> 
    </div>
  )
}

export default App