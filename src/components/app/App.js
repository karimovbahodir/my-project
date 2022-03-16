import Cupcakes from "../cupecakes/Cupcakes";
import AppContentSec from "../appContentSec/AppContentSec";
import AppFooter from "../appFooter/AppFooter";
import AppHeader from "../appHeader/AppHeader";
import Cards from "../cards/Card";
import Sidebar from "../sidebar/Sidebar";


import './App.css';


const App = ({data}) => {
	
	return (
		<div className="wrapper">
			<Sidebar />
			<AppHeader />
			<div className="content">
				<div className="all__content">
					<div className="content__container">
						<Cupcakes />
						<AppContentSec />
					</div>
				</div>
				<Cards data={data}/>
			</div>
			<AppFooter />
		</div>
	)
}

export default App;
