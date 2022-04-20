import beers from "../../data/beers"
import React from 'react'
import Beerlist from "../../components/Beerlist/Beerlist";
import "./Main.scss"

const Main = () => {

  const beersJSX = beers.map(beer => {
    return <Beerlist image = {beer.image_url} name = {beer.name} description = {beer.description} />
  })

  return (
    <div>
      <h1 className = "mainTitle">List of Beers</h1>
      <div className = "gallerySection">{beersJSX}</div>
    </div>
  )
}

export default Main