
import './Header.css';


const Header =({openCart, openFavorites})=> {
		
		return (
			<div className="appHeader">
				<div className="appHeader__container _container">
					<div className="appHeader__logo">
						<a href="#" className="appHeader__logo">Logo</a>
					</div>
					<div className="icons">
						<div className="favorites" onClick={openFavorites}>
							<img src="https://img.icons8.com/material-outlined/32/000000/like--v1.png" />
						</div>
						<div className="basket" onClick = {openCart}>
							<img src="https://cdn.icon-icons.com/icons2/1580/PNG/128/2849824-basket-buy-market-multimedia-shop-shopping-store_107977.png" />
						</div>
						<button className="button button__main">
							<div className="inner">Sign up</div>
						</button>
					</div>
				</div>
			</div>
		)
}


export default Header;