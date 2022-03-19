import './Card.css';
import {useState} from 'react';

const Card = ({id, name, price, img, onPlus, onLike, favorite=false}) => {
   const [add, setAdd] = useState(false);
   const [like, setLike] = useState(favorite);
  const favoriteLike = ()=>{
     return setLike(!like);
  }
  
   return (
      <div className="card">
         <div className="favorite" onClick={()=>{
            favoriteLike();
            onLike({id, name, price, img})
         }}>
            <img src={like ? "https://freepngimg.com/thumb/heart/2-2-heart-png-hd.png" : "https://icons-for-free.com/iconfiles/png/512/heart+like+love+valentine+icon-1320084901929215407.png"} alt="heart" className="favorite__img"/>
         </div>
         <img src={img} alt="cake" className="card__img" />
         <p className="card__text">{name}</p>
         <div className="card__info">
            <div className="info__price">
               <span>Цена: </span>
               <b>{price}</b>
            </div>
            <button className="info__button" onClick={()=>{
               onPlus({id, name, price, img});
               setAdd(!add)
            }}>
               <img src={add ?  'https://cdn.picpng.com/check/check-button-computer-icon-116893.png' : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Feather-core-plus-circle.svg/1200px-Feather-core-plus-circle.svg.png"} alt="plus" />
            </button>
         </div>
      </div>
   )
}

export default Card;