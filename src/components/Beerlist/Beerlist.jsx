import React from 'react'
import "./Beerlist.scss"

const Beerlist = ({image, name, description}) => {
  return (
    <section>
      <div className='beer-tiles'>
      <img className = "beer-images" src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      </div>
    </section>
  )
}

export default Beerlist