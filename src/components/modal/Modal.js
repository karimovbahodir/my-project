import './Modal.css';
import { useState } from 'react';
import ModalPass from '../modalPass/ModalPass';


const Modal = ({ active, setActive }) => {
	const [openReg, setOpenReg] = useState(false);


	return (

		<div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
			<div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
			{openReg ? <ModalPass /> : null}
				<div className="form">
					<h2>Вход</h2>
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
						<a href='#' className='forget'>Забыли пароль?</a>
						<a href='#' className='reg'
							onClick={() => setOpenReg(true)}>Создать аккаунт</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal;