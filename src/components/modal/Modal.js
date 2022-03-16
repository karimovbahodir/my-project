import './Modal.css'

const Modal = ({ active, setActive }) => {
	return (
		<div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
			<div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
				<div className="form">
					<h2>ВХОД</h2>
					<div className="input-form">
						<input type="text" placeholder='Введите телефон лил email' />
					</div>
					<button className="button button__main">
						<div className="inner">Войти</div>
					</button>
					<div className="submit">
						<a href='#' className='forget'>Забыли пароль?</a>
						<br/>
						<a href='#' className='reg'>Создайте аккаунт</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal;