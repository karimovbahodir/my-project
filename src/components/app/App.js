import {useState} from 'react';
import Cupcakes from "../cupecakes/Cupcakes";
import AppContentSec from "../appContentSec/AppContentSec";
import AppFooter from "../appFooter/AppFooter";
import AppHeader from "../appHeader/AppHeader";
import Cards from "../Cards/Card";
import Sidebar from "../sidebar/Sidebar";
import Modal from "../modal/Modal";

import './App.css';


const App = () => {

	const [modalActive, setModalActive, children]=useState(false);
	
	return (
		<div className="wrapper">
			<Modal active={modalActive} setActive={setModalActive}> {children} </Modal>
			<Sidebar />
			<AppHeader setModalActive={setModalActive}/>
			<div className="content">
				<div className="all__content">
					<div className="content__container">
						<Cupcakes />
						<AppContentSec />
					</div>
				</div>
				<Cards />
			</div>
			<AppFooter />
		</div>
	)
}

export default App;
