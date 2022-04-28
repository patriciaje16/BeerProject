import React from 'react'
import blackCross from '../../assets/images/black-cross.png'
import "./BeerCard.scss"

const BeerCard = ({image, name, alcoholContent, tagline, tips, foodPair,toggleAbout}) => {
  return (
    <div className='beer-card'>
      <div className='card-container'>
      <img src={blackCross} alt="Close menu" className="card-display-cross" onClick={toggleAbout}/>
      <img className = "beer-images" src={image} alt={name} />
      <h2 className='beer-name'>{name}</h2>
      
      
      <p className='beer-ABV'>ABV: {alcoholContent}%</p>
      <p className='beer-tagline'>{tagline}</p>
      <p className='beer-foodpair'>Food Pairings: {foodPair +""} . </p>
      <p className='beer-tips'>Tips: {tips}</p>
      </div>
    </div>
  )
}

export default BeerCard