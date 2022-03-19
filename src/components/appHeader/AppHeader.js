import { useContext } from "react";
import { ModalContext } from "../context";
import ModalReg from '../modalReg/ModalReg';
import ModalPass from "../modalPass/ModalPass"; 
import './AppHeader.css';


const AppHeader =(props)=> {

	const { openModal } = useContext(ModalContext);

	const handlarReg=()=>{
		openModal({
			title: "регистрация",
			children: <ModalReg/>
		})
	}

	const handlarPass=()=>{
		openModal({
			title: "ВОССТАНОВЛЕНИЕ ПАРОЛЯ",
			children: <ModalPass/>
		})
	}

	const handlerClick = () => {
		openModal({
			title: "вход",
			children: <>
				<div className="input-form">
					<input type="text" placeholder='Введите номер телефона или email' />
				</div>
				<div className="input-form">
					<input type="text" placeholder='Пароль' />
				</div>
				<button className="button button__main">
					<div className="inner">Войти</div>
				</button>
				<div className="submit">
					<a href='#' className='forget'
					onClick={handlarPass}>Забыли пароль?</a>
					<a href='#' className='reg'
					onClick={handlarReg}>Создать аккаунт</a>
				</div>
			</>
		});
	}

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
							<div className="inner" onClick={handlerClick}>Войти</div>
						</button>
					</div>
				</div> 
			</div>
		)
}


export default AppHeader;