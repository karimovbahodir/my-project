import { useState } from 'react';
import Cupcakes from "../cupecakes/Cupcakes";
import Cakes from '../cakes/Cakes';
import AppFooter from "../appFooter/AppFooter";
import AppHeader from "../appHeader/AppHeader";
import Cards from "../Cards/Card";
import Sidebar from "../sidebar/Sidebar";
import { ModalProvider } from "../context";



import './App.css';



const App = () => {


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
	)
}

export default App;
