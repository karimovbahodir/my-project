import './Card.css';
const Cards = () => {
   return (
      <div className="cards _container">
         <div className="cards__title">
            <h1 className="title">Cakes</h1>
            <div className="search__block">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" alt="search" />
               <input type="text" placeholder="Поиск позиции..." className="search__input"/>
            </div>
         </div>
         
         <div className="cards__list">
            <div className="card">
               <div className="favorite">
                  <img src="https://endlessicons.com/wp-content/uploads/2013/06/heart-icon.png" alt="heart" className="favorite__img"/>
               </div>
               <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt="cake" className="card__img"/>
               <p className="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <div className="card__info">
                  <div className="info__prise">
                     <span>Prise</span>
                     <b>555 $</b> 
                  </div>
                  <button className="info__button">
                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Feather-core-plus-circle.svg/1200px-Feather-core-plus-circle.svg.png" alt="plus" />
                  </button>
               </div>
            </div>
            
         
         </div>
      </div>
   )
}

export default Cards;


// http://www.clker.com/cliparts/s/d/K/E/X/d/red-heart.svg
// https://cdn.picpng.com/check/check-button-computer-icon-116893.png
// https://endlessicons.com/wp-content/uploads/2013/06/heart-icon.png