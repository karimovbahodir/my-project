import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../context";
import ModalReg from "../modalReg/ModalReg";
import ModalPass from "../modalPass/ModalPass";
import './Header.css';


const Header = ({ openCart, openFavorites, handleClose }) => {
	const [avatar, setAvatar] = useState(false);

	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [emailDirty, setEmailDirty] = useState(false);
	const [passDirty, setPassDirty] = useState(false);
	const [emailError, setEmailError] = useState('Email не может быть пустым');
	const [passError, setPassError] = useState('Пароль не может быть пустым');
	const [formValid, setFormValid]=useState(false);



	const { openModal, closeModal } = useContext(ModalContext);

	useEffect (()=>{
		if( emailError || passError){
			setFormValid(false)
		}else{
			setFormValid(true)
		}
	}, [emailError, passError])

	const blurHandler = (e) => {
		switch (e.target.name) {
			case "email":
				setEmailDirty(true)
				break
			case "pass":
				setPassDirty(true)
				break
		}
	}

	const checkOut=()=> {
		closeModal();
		setAvatar(true);
	}


	const onChangeEmail = (e) => {
		setEmail(e.target.value)
		const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if(!re.test(String(e.target.value).toLowerCase())){
			setEmailError('Некорректный email');
		}else{
			setEmailError("")
		}
	}

	const onChangePass = (e) => {
		setPass(e.target.value)
		if(e.target.value.length<3 || e.target.value.length > 8){
			setPassError("Пароль должен быть длиннее 3 и меньше 8")
			if(!e.target.value){
				setPassError("Пароль не может быть пустым")
			}
		}else{
			setPassError('')
		}
	}

	const handlerReg = () => {
		openModal({
			title: "регистрация",
			children: <ModalReg checkOut={checkOut} />
		})
	}

	const handlerPass = () => {
		openModal({
			title: "ВОССТАНОВЛЕНИЕ ПАРОЛЯ",
			children: <ModalPass closeModal={closeModal} onChangeEmail={onChangeEmail} blurHandler={blurHandler} formValid={formValid} />
		})
	}

	const handlerClick = () => {
		openModal({
			title: "вход",
			children: <>

				<div className="input-form">
					{(emailDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>}
					<input onBlur={e=> blurHandler(e)} 
					onChange={e => onChangeEmail(e)} 
					
					neme="email" type="text" 
					velue={email} 
					placeholder='Введите номер телефона или email'/>
				</div>
				<div className="input-form">
					{(passDirty && passError) && <div style={{ color: "red" }}>{passError}</div>}
					<input 
					onChange={e => onChangePass(e)} 
					onBlur={e => blurHandler(e)} 
					name="pass" type="password" 
					velue={pass} 
					placeholder='Пароль'/>
				</div>
				
				<button className="button button__main">
					<div className="inner" disabled={!formValid} onClick={checkOut} >Войти</div>
				</button>
				<div className="submit">
					<a href='#' className='forget'
						onClick={handlerPass}>Забыли пароль?</a>
					<a href='#' className='reg'
						onClick={handlerReg}>Создать аккаунт</a>
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
				<div className="icons">
					<div className="favorites" onClick={openFavorites}>
						<img src="https://img.icons8.com/material-outlined/32/000000/like--v1.png" />
					</div>
					<div className="basket" onClick={openCart}>
						<img src="https://cdn.icon-icons.com/icons2/1580/PNG/128/2849824-basket-buy-market-multimedia-shop-shopping-store_107977.png" />
					</div>

					<div className="avatar">
						{avatar ? <img src="https://statrielt.ru/images/kisspng-computer-icons-user-profile-clip-art-portable-netw-c-svg-png-icon-free-download-389-86-onlineweb-5c6f7efde29670.9426602115508108779281.png" /> : <button className="button button__main"><div className="inner" onClick={handlerClick}>Войти</div></button>}

					</div>
				</div>
			</div>
		</div>
	)
}


export default Header;