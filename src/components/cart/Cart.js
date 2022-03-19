import './Cart.css';
const Cart = ({ closeCart, cartItems = [], onDelete }) => {
   const summary = cartItems.reduce((summ, obj) => parseFloat(obj.price) + summ, 0);
   console.log(summary);
   return (
      <div className="overlay">
         <div className="cart">
            <h2 className="cart__title">
               Корзина
               <img
                  className="cart__btn"
                  src="https://img2.freepng.ru/20180422/bre/kisspng-computer-icons-cross-delete-button-desktop-wallpap-treasure-map-5adce4c8e8b284.6651471215244259289531.jpg" alt="esc"
                  onClick={closeCart}
               />
            </h2>
            {cartItems.length <= 0 ? (
               <div className="cart__empty">
                  <h3 className="cart__empty-title">Корзина на данный момент пуста :(</h3>
                  <img src="https://cdn.dribbble.com/users/44167/screenshots/4199208/media/e2f1188c18430f9ab0af074ae7a88ee8.png?compress=1&resize=400x300&vertical=top" alt="emptyCart" />
               </div>
            ) : (
               <>
                  <div className="cart__items">
                     {cartItems.map(item => (
                        <div className="cart__item" key={item.id}>
                           <img src={item.img} alt="cake" className="cart__item-img" />
                           <div className="cart__item-text">
                              <p>{item.name}</p>
                              <b>{item.price}</b>
                           </div>
                           <img onClick={() => onDelete(item.id)} className="cart__btn" src="https://img2.freepng.ru/20180422/bre/kisspng-computer-icons-cross-delete-button-desktop-wallpap-treasure-map-5adce4c8e8b284.6651471215244259289531.jpg" alt="esc" />

                        </div>
                     ))}
                  </div>
                  <div className="cart__footer">
                     <div className="cart__sum">
                        <p>Итого:</p>
                        <div><b>{summary + ' рублей'}</b></div>
                     </div>
                     <button className="cart__footer-btn" >Оформить заказ</button>
                  </div>
               </>
            )}
         </div>
      </div>
   )
}

export default Cart;