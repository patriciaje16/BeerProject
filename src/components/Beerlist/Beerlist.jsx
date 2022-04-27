import {React, useState} from 'react'
import BeerCard from '../BeerCard/BeerCard';
import "./Beerlist.scss"

const Beerlist = ({image, name, description, alcoholContent, tagline, tips, foodPair, volume,unit}) => {
  const [showAboutSection, setShowAboutSection] = useState(false);

  const toggleAbout = () => {
    setShowAboutSection(!showAboutSection)
  }



  return (
    <section>
      <div className='beer-tiles'>
      <img className = "beer-images" src={image} alt={name} />
      <h2 className='beer-name'>{name}</h2>
      <p className='beer-description'>{description}</p>
      <p className='beer-ABV'>ABV: {alcoholContent}%</p>
      <button onClick= {toggleAbout}className='about-button'>About</button>
      {showAboutSection && <BeerCard toggleAbout={toggleAbout} image={image} name={name} description={description} alcoholContent={alcoholContent} tagline={tagline} tips={tips} foodPair={foodPair} volume={volume} unit={unit}/>}
      </div>
    </section>
  )
}

export default Beerlist