import { Component } from "react";
import './AppHeader.css';


class AppHeader extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}



	render() {
		return (
			<div className="appHeader">
				<div className="appHeader__container _container">
					<div className="appHeader__logo">
						<a href="#" className="appHeader__logo">Logo</a>
					</div>
					{/* <div className="search-box">
						<input className="search-txt" type='text' placeholder="Type to search" />
						<button className="button button__main">
							<div className="inner">Search</div>
						</button>
					</div> */}
					<div className="icons">
						<div className="favorites">
							<img src="https://img.icons8.com/material-outlined/32/000000/like--v1.png" />
						</div>
						<div className="basket">
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
}


export default AppHeader;