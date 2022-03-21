import './ModalPass.css'

const ModalPass = (props) => {
	return (
		<div className="modalPass">
			<div className="modalPass__container">
				<div className="form">	
					<p>Пожалуйста, введите ваш адрес электронной почты, на который мы отправим ссылку для восстановления пароля</p>
					<div className="input-form">
						<input type="text" placeholder='Введите свой email' />
					</div>
					<button className="button button__main button__main-inner">
						<div className="inner">Отправить</div>
					</button>
				</div>
			</div>
		</div>
	)
}

export default ModalPass;