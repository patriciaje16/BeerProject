import React from 'react'
import "./Beerlist.scss"

const Beerlist = ({image, name, description, alcoholContent}) => {
  return (
    <section>
      <div className='beer-tiles'>
      <img className = "beer-images" src={image} alt={name} />
      <h2 className='beer-name'>{name}</h2>
      <p className='beer-description'>{description}</p>
      <p className='beer-ABV'>ABV: {alcoholContent}%</p>
      </div>
    </section>
  )
}

export default Beerlist