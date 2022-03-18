import {useState} from 'react';

import './Card.css';


const Card = ({name, price, img, onPlus}) => {
   const [add, setAdd] = useState(false);
   return (
      <div className="card">
         <div className="favorite">
            <img src="https://endlessicons.com/wp-content/uploads/2013/06/heart-icon.png" alt="heart" className="favorite__img" />
         </div>
         <img src={img} alt="cake" className="card__img" />
         <p className="card__text">{name}</p>
         <div className="card__info">
            <div className="info__price">
               <span>Цена: </span>
               <b>{price}</b>
            </div>
            <button className="info__button" onClick={()=>{
               onPlus({name, price, img});
               setAdd(!add)
            }}>
               <img src={add ? 'https://cdn.picpng.com/check/check-button-computer-icon-116893.png' : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Feather-core-plus-circle.svg/1200px-Feather-core-plus-circle.svg.png"} alt="plus" />
            </button>
         </div>
      </div>
   )
}

const Cards = ({onPlus, data}) => {
   const [searching, setSearching] = useState('');

   const getSearchingValue = (e)=>{
      setSearching(e.target.value)
   }
   const searchItem = (items, searching)=>{
      if(searching.length === 0){
         return items;
      }
      return items.filter(item =>{
         return item.name.toLowerCase().indexOf(searching) > -1
      })
   }
   const filteredData = searchItem(data, searching);
   const card = filteredData.map(item =>{
    return <Card 
      key={item.id} 
      name={item.name} 
      price={item.price} 
      img={item.img}
      onPlus={() => onPlus(item)}
    />
   });
   return (
      <div className="cards _container">
         <div className="cards__title">
            <h1 className="title">Капкейки</h1>
            <div className="search__block">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" alt="search" />
               <input 
                  placeholder="Поиск позиции..." 
                  className="search__input" 
                  onChange={getSearchingValue}
                  />
            </div>
         </div>

         <div className="cards__list">
            {card}
         </div>
      </div>
   )
}


export default Cards;


// http://www.clker.com/cliparts/s/d/K/E/X/d/red-heart.svg
// https://cdn.picpng.com/check/check-button-computer-icon-116893.png
// https://endlessicons.com/wp-content/uploads/2013/06/heart-icon.png