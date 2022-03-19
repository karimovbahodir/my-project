<<<<<<< HEAD
import { useState } from 'react';
import Cupcakes from "../cupecakes/Cupcakes";
import Cakes from '../cakes/Cakes';
import AppFooter from "../appFooter/AppFooter";
import AppHeader from "../appHeader/AppHeader";
import Cards from "../Cards/Card";
import Sidebar from "../sidebar/Sidebar";
import { ModalProvider } from "../context";


=======
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cupcakes from "../cupecakes/Cupcakes";
import AppContentSec from "../appContentSec/AppContentSec";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Cards from "../cards/Cards";
import Cart from "../cart/Cart";
>>>>>>> ee7ccec04ff85d901befd85ef1866b531f4a4047

import './App.css';
import Favorites from '../favorites/Favorites';



const App = () => {
<<<<<<< HEAD


	return (
		<ModalProvider>
			<div className="wrapper">
				<Sidebar />
				<AppHeader />
				<div className="content">
					<div className="all__content">
						<div className="content__container">
							<Cupcakes />
							<Cakes />
						</div>
					</div>
					<Cards />
				</div>
				<AppFooter />
			</div>
		</ModalProvider>
=======
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
		<div className="wrapper">
			{openCart ? <Cart  onDelete={onDelete} cartItems={cartItems} closeCart={() => setOpenCart(false)} /> : null}
			<Header openCart={() => setOpenCart(true)} openFavorites={openFavorites} />
			<div className="content">
				<div className="all__content">
					{favotiteContent ? <Favorites favoriteItems={favoriteItems} onPlus={onPlus} /> : <div className="content__container">
						<Cupcakes />
						<AppContentSec />
					</div>}

				</div>
				<Cards data={items} onPlus={onPlus} onLike={onLike} />

			</div>
			<Footer />
		</div>
>>>>>>> ee7ccec04ff85d901befd85ef1866b531f4a4047
	)
}

export default App;
