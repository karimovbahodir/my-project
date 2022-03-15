import { Component } from "react";
import './AppHeader.css';


class AppHeader extends Component {
	constructor(props){
		super(props)
		this.state={
			
		}
	}



	render() {
		return (
			<div className="appHeader">
				<div className="appHeader__container __container">
					<a href="#" className="appHeader__logo">Logo</a>
					<div className="search-box">
						<input className="search-txt" type='text' placeholder="Type to search" />
						<button className="button button__main">
							<div className="inner">Search</div>
						</button>
					</div> 
					<div className="icons">
					<div className="logIn">
						<button className="button button__main">
							<div className="inner">Sign up</div>
						</button>
					</div>
					<div className="favorites">
					<img src="https://img.icons8.com/material-outlined/32/000000/like--v1.png"/>
					</div>
					<div className="basket">
						<img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-basket-2.png" />
					</div>
					</div>
				</div>
			</div>
		)
	}
}


export default AppHeader;