import axios from 'axios';
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Cupecakes from "../cupecakes/Cupecakes";
import Cakes from '../cakes/Cakes';
import Cards from "../cards/Cards";
import { ModalProvider } from "../context";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Cart from "../cart/Cart";
import Favorites from '../favorites/Favorites';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import NoPage from '../noPage/NoPage'

import './App.css';




const App = () => {
	const [openCart, setOpenCart] = useState(false);
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [favoriteItems, setFavoriteItems] = useState([]);
	const [loadingCard, setLoadingCart] = useState(true);

	useEffect(() => {
		async function data() {
			const cupecakesData = await axios.get('https://623440b96d5465eaa516b024.mockapi.io/cupecakes');
			const cartData = await axios.get('https://623440b96d5465eaa516b024.mockapi.io/cart');
			const favoriteData = await axios.get('https://623440b96d5465eaa516b024.mockapi.io/myfavorite');
			setLoadingCart(false)

			setCartItems(cartData.data)
			setFavoriteItems(favoriteData.data)
			setItems(cupecakesData.data)

		}
		data()

	}, [])


	const onPlus = (obj) => {

		axios.post('https://623440b96d5465eaa516b024.mockapi.io/cart', obj);

		if (cartItems.find(item => item.id === obj.id)) {
			axios.delete(`https://623440b96d5465eaa516b024.mockapi.io/cart/${obj.id}`);
			setCartItems(prev => prev.filter(item => item.id !== obj.id))
		} else {
			setCartItems(prev => [...prev, obj])
		}
	};

	const onDelete = (id) => {
		if (cartItems.find(item => item.id === id)) {
			axios.delete(`https://623440b96d5465eaa516b024.mockapi.io/cart/${id}`);
			setCartItems(items => items.filter(item => item.id !== id))
		}
	}

	const onLike = async (obj) => {
		try {
			if (favoriteItems.find(item => item.id === obj.id)) {
				axios.delete(`https://623440b96d5465eaa516b024.mockapi.io/myfavorite/${obj.id}`);
				setFavoriteItems(prev => prev.filter(item => item.id !== obj.id))
			} else {
				const { data } = await axios.post('https://623440b96d5465eaa516b024.mockapi.io/myfavorite', obj);
				setFavoriteItems(prev => [...prev, data])
			}
		} catch (error) {
			console.log(`We are have a promlem like ${error}`);
		}
	};

	return (
		<ModalProvider>
			<div className="wrapper">
				{openCart ? <Cart onDelete={onDelete} cartItems={cartItems} closeCart={() => setOpenCart(false)} /> : null}
				<Header openCart={() => setOpenCart(true)} />
				<div className="content">
					<Routes>
						<Route path="/" element={<div className="all__content">
							<div className="content__container">
								<Cupecakes />
								<ErrorBoundary>
									<Cakes />
								</ErrorBoundary>
							</div>
						</div>} />
						<Route path="/cards" element={<Cards data={items} onPlus={onPlus} onLike={onLike} loadingCard={loadingCard} />} />
						<Route path="/favorites" element={<Favorites favoriteItems={favoriteItems} onLike={onLike} onPlus={onPlus} />} />
						<Route path="*" element={<NoPage />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</ModalProvider>
	)
}

export default App;
