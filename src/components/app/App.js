import axios from 'axios';
import { useState, useEffect } from 'react';
import Cupecakes from "../cupecakes/Cupecakes";
import Cakes from '../cakes/Cakes';
import Cards from "../cards/Cards";
import { ModalProvider } from "../context";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Cart from "../cart/Cart";
import Favorites from '../favorites/Favorites';

import './App.css';




const App = () => {
	const [openCart, setOpenCart] = useState(false);
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [favoriteItems, setFavoriteItems] = useState([]);
	const [favotiteContent, setFavoriteContent] = useState(false);


	useEffect(() => {

		axios.get('https://623440b96d5465eaa516b024.mockapi.io/cupecakes')
			.then(res => setItems(res.data))
	}, [])

	const onPlus = (obj) => {
		if (cartItems.find(item => item.id === obj.id)) {
			setCartItems(prev => prev.filter(item => item.id !== obj.id))
		} else {
			setCartItems(prev => [...prev, obj])
		}

	};

	const onDelete = (id) => {
		setCartItems(items => items.filter(item => item.id !== id))
	}
	const onLike = (obj) => {
		if (favoriteItems.find(item => item.id === obj.id)) {
			setFavoriteItems(prev => prev.filter(item => item.id !== obj.id))
		} else {
			setFavoriteItems(prev => [...prev, obj])
		}

	};
	const openFavorites = () => {
		setFavoriteContent(true)
	}


	return (
		<ModalProvider>
		<div className="wrapper">
			{openCart ? <Cart  onDelete={onDelete} cartItems={cartItems} closeCart={() => setOpenCart(false)} /> : null}
			<Header openCart={() => setOpenCart(true)} openFavorites={openFavorites} />
			<div className="content">
				<div className="all__content">
					{favotiteContent ? <Favorites favoriteItems={favoriteItems} onPlus={onPlus} /> : <div className="content__container">
						<Cupecakes />
						<Cakes />
					</div>}

				</div>
				<Cards data={items} onPlus={onPlus} onLike={onLike} />

			</div>
			<Footer />
		</div>
		</ModalProvider>
	)
}

export default App;
