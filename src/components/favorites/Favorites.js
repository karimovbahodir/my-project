
import './Favorites.css';
import Card from '../card/Card';


const Favorites = ({favoriteItems, onLike, onPlus}) => {
   const card = favoriteItems.map(item =>{
      return <Card 
        key={item.id}
        name={item.name} 
        price={item.price} 
        img={item.img}
        favorite={true}
        onLike={()=> onLike(item)}
        onPlus={()=> onPlus(item)}
      />
     });
   return (
      <div className="cards _container">
         <div className="favorites">
            <h1 className="favorites__title">Избранное</h1>
            <div className="cards__list">
            {favoriteItems.length > 0 ? card : 
            <img src='https://cdn.dribbble.com/users/1291846/screenshots/3720238/media/f275d62e0db2b53f7e732c6496db6523.png?compress=1&resize=400x300&vertical=top' alt='empty'/>}
         </div>
         </div>
      </div>
   )
}


export default Favorites;
