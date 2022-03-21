import { useState } from 'react';
import './ModalPass.css'

const ModalPass = ({closeModal, email, onChangeEmail, blurHandler, formValid, emailDirty, emailError}) => {


	return (
		<div className="modalPass">
			<div className="modalPass__container">
				<div className="form">	
					<p>Пожалуйста, введите ваш адрес электронной почты, на который мы отправим ссылку для восстановления пароля</p>
					<div className="input-form">
					{(emailDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>}
						<input type="text" name='email' placeholder='Введите свой email' 
						value={email}
						onChange={e => onChangeEmail(e)}
						onBlur={e=>blurHandler(e)}
						/>
					</div>
					<button className="button button__main" disabled={!formValid} >Отправить</button>
				</div>
			</div>
		</div>
	)
}

export default ModalPass;