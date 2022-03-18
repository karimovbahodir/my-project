import './Sidebar.css';
const Sidebar = ({closeSidebar, cartItems=[]}) => {
   
   return (
      <div className="overlay">
         <div className="sidebar">
            <h2 className="sidebar__title">
               Корзина
               <img 
               className="cart__btn" 
               src="https://img2.freepng.ru/20180422/bre/kisspng-computer-icons-cross-delete-button-desktop-wallpap-treasure-map-5adce4c8e8b284.6651471215244259289531.jpg" alt="esc" 
               onClick={closeSidebar}   
               />
            </h2>

            <div className="cart__items">
               {cartItems.map(item => (
                  <div className="cart__item">
                  <img src={item.img} alt="cake" className="cart__item-img" />
                  <div className="cart__item-text">
                     <p>{item.name}</p>
                     <b>{item.price}</b>
                  </div>
                  <img className="cart__btn" src="https://img2.freepng.ru/20180422/bre/kisspng-computer-icons-cross-delete-button-desktop-wallpap-treasure-map-5adce4c8e8b284.6651471215244259289531.jpg" alt="esc" />

               </div>
               ))}
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