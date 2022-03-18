import { useState, useEffect} from 'react';

import Cupcakes from "../cupecakes/Cupcakes";
import AppContentSec from "../appContentSec/AppContentSec";
import Footer from "../footer/Footer";
import AppHeader from "../header/AppHeader";
import Cards from "../cards/Card";
import Sidebar from "../sidebar/Sidebar";

import './App.css';


const App = () => {
	const [openSidebar, setOpenSidebar] = useState(false);
	const [items, setItems] = useState([]);
   const [cartItems, setCartItems] = useState([]);
	
	
	useEffect(()=>{
      fetch('https://623440b96d5465eaa516b024.mockapi.io/cupecakes')
         .then(res => res.json())
         .then(json => setItems(json))
   }, [])

	const onPlus = (obj)=> {
		setCartItems()

	};
	
	return (
		<div className="wrapper">
			{openSidebar ? <Sidebar cartItems={cartItems} closeSidebar={() => setOpenSidebar(false)} /> : null}
			<AppHeader openSidebar={() => setOpenSidebar(true)} />
			<div className="content">
				<div className="all__content">
					<div className="content__container">
						<Cupcakes />
						<AppContentSec />
					</div>
				</div>
				<Cards data={items} onPlus={onPlus} />
			</div>
			<Footer />
		</div>
	)
}

export default App;
