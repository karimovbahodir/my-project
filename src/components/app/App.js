import { Component } from "react";
import AppContentFirst from "../appContentFirst/AppContentFirst";
import AppContentSec from "../appContentSec/AppContentSec";
import AppFooter from "../appFooter/AppFooter";
import AppHeader from "../appHeader/AppHeader";
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state={
		
		}
	}



	render(){
		return (
			<div className="wrapper">
				<AppHeader />
				<div className="content">
					<div className="all__content">
						<div className="content__container">
							<AppContentFirst />
							<AppContentSec />
						</div>
					</div>
				</div>
				<AppFooter />
			</div>
		)
	}
}

export default App;
