
import Main from './containers/Main/Main'
import Nav from './containers/Nav/Nav'
import React, { useState, useEffect } from 'react'

const App = () => {
  const [beerProducts, setBeerProducts] = useState([])
  const [defaultBeerArray, setDefaultBeerArray] = useState([])
  const [searchBox, setSearchBox] = useState("")
  const [filterByAlcoholContent, setFilterByAlcoholContent] = useState(false)
  const [filterByAlcoholPH, setFilterByAlcoholPH] = useState(false)
  const [filterByClassicAlcohol, setFilterByClassicAlcohol] = useState(false)

  const handleFilterByAlcohol = (event) => {
    let state = !filterByAlcoholContent

    if (state) {
      const filterAlcoholLevel = beerProducts.filter(beer => {

        return beer.abv >= 6.0
      })
      console.log(defaultBeerArray)

      setFilterByAlcoholContent(state)
      setBeerProducts(filterAlcoholLevel)
    } else {

      setFilterByAlcoholContent(state)
      setBeerProducts(defaultBeerArray)
    }


    console.log(beerProducts)
  }



  const handleFilterByPH = (event) => {
    let state = !filterByAlcoholPH

    if (state) {
      const filterAlcoholPH = beerProducts.filter(beer => {

        return beer.ph < 4.0
      })

      setFilterByAlcoholPH(state)
      setBeerProducts(filterAlcoholPH)
    } else {
      setFilterByAlcoholPH(state)
      setBeerProducts(defaultBeerArray)
    }
  }


  const handleFilterByClassicAlcohol = (event) => {
    let state = !filterByClassicAlcohol

    if (state) {
      const filterByClassic = beerProducts.filter(beer => {
        return beer.first_brewed.includes("/2010", "/2009", "/2008", "/2007", "/2006", "/2005")
      })

      setFilterByClassicAlcohol(state)
      setBeerProducts(filterByClassic)
    } else {
      setFilterByClassicAlcohol(state)
      setBeerProducts(defaultBeerArray)
    }
  }
  //copy array into new constant to plug into the handles 


  const handleInputForSearchBox = (event) => {

    if (!searchBox.includes(event.target.value)) {

      let filteredBeerProducts = beerProducts.filter(beer => {
        return beer.name.toUpperCase().startsWith(event.target.value.toUpperCase())

      })
      setBeerProducts(filteredBeerProducts)
    setSearchBox(event.target.value)

    }else {
      setBeerProducts(defaultBeerArray)
      setSearchBox(event.target.value)

    }

  }


  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?per_page=50")
      .then(response => response.json())
      .then(userObjects => {

        setBeerProducts(userObjects)
        setDefaultBeerArray(userObjects)


      })

  }, [])



  return (
    <div>
      <Nav searchBox={searchBox} handleInputForSearchBox={handleInputForSearchBox} handleFilterByAlcohol={handleFilterByAlcohol} filterByAlcoholContent={filterByAlcoholContent} handleFilterByPH={handleFilterByPH} filterByAlcoholPH={filterByAlcoholPH} handleFilterByClassicAlcohol={handleFilterByClassicAlcohol} filterByClassicAlcohol={filterByClassicAlcohol} />
      <Main beerProducts={beerProducts} />
    </div>
  )
}

export default App