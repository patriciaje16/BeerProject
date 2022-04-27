
import Beerlist from "../../components/Beerlist/Beerlist";
import "./Main.scss"


const Main = ({beerProducts}) => {


  const beersJSX = beerProducts.map(beer => {
    return <Beerlist image = {beer.image_url} name = {beer.name} description = {beer.description} alcoholContent = {beer.abv}/>

  

  })




  return (
    <div>
      <h1 className = "mainTitle">Checkout the wide range of brews below!</h1>
      <div className = "gallerySection">{beersJSX} </div>
    </div>
  )
}

export default Main