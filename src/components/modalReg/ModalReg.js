import './ModalReg.css'

const ModalPass = (props) => {
	return (
		<div className="modalPass">
			<div className="modalPass__container">
				<div className="form">	
					<div className="input-form">
						<input type="text" placeholder='Имя' />
					</div>
					<div className="input-form">
						<input type="text" placeholder='Фамилия' />
					</div>
					<div className="input-form">
						<input type="text" placeholder='Email' />
					</div>
					<div className="input-form">
						<input type="text" placeholder='Пароль' />
					</div>
					<button className="button button__main">
						<div className="inner">Создать</div>
					</button>
				</div>
			</div>
		</div>
	)
}

export default ModalPass;