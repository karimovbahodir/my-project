import './Sidebar.css';
const Sidebar = (props) => {
   
   return (
      <div style={{ display: 'none' }} className="overlay">
         <div className="sidebar">
            <h2 className="sidebar__title">
               Корзина
               <img className="cart__btn" src="https://img2.freepng.ru/20180422/bre/kisspng-computer-icons-cross-delete-button-desktop-wallpap-treasure-map-5adce4c8e8b284.6651471215244259289531.jpg" alt="esc" />
            </h2>

            <div className="cart__items">
               <div className="cart__item">
                  <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt="cake" className="cart__item-img" />
                  <div className="cart__item-text">
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                     <b>555 $</b>
                  </div>
                  <img className="cart__btn" src="https://img2.freepng.ru/20180422/bre/kisspng-computer-icons-cross-delete-button-desktop-wallpap-treasure-map-5adce4c8e8b284.6651471215244259289531.jpg" alt="esc" />

               </div>


            </div>
            <div className="cart__footer">
               <div className="sidebar__sum">
                  <p>Итого:</p>
                  <div><b>555 $</b></div>
               </div>
               <button className="cart__footer-btn" >Оформить заказ</button>
            </div>
         </div>
      </div>
   )
}

export default Sidebar;