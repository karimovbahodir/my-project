
import './Favorites.css';
import Card from '../card/Card';


const Favorites = ({favoriteItems, onPlus}) => {
   const card = favoriteItems.map(item =>{
      return <Card 
        key={item.id} 
        name={item.name} 
        price={item.price} 
        img={item.img}
        onPlus={() => onPlus(item)}
        favorite={true}

      />
     });
   return (
      <div className="cards _container">
         <div className="favorites">
            <h1 className="favorites__title">Избранное</h1>
            <div className="cards__list">
            {card}
         </div>
         </div>
      </div>
   )
}


export default Favorites;
