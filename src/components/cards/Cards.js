import {useState} from 'react';
import Card from '../card/Card';
import Spinner from '../spinner/Spinner';
import './Cards.css';

const Cards = ({onPlus, data, onLike, loadingCard}) => {
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
      onLike={()=> onLike(item)}
      loadingCard
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
            {loadingCard ? <Spinner /> : card}
            
         </div>
      </div>
   )
}


export default Cards;
