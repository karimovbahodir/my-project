import { useContext, useState } from 'react';
import './ModalReg.css'

const ModalPass = ({ checkOut}) => {
	const [name, setName]=useState('');
	const [surname, setSurname]=useState('');
	const [email, setEmail]=useState('');
	const [pass, setPass]=useState('');


	const onChangeName=(e)=>{
		setName(e.target.value)
	}

	const onChangeSurname=(e)=>{
		setSurname(e.target.value)
	}

	const onChangeEmail=(e)=>{
		setEmail(e.target.value)
	}

	const onChangePass=(e)=>{
		setPass(e.target.value)
	}

	return (
		<div className="modalPass">
			<div className="modalPass__container">
				<div className="form">	
					<div className="input-form">
						<input name='name' type="text" value={name} placeholder='Имя' onChange={onChangeName}/>
					</div>
					<div className="input-form">
						<input name='surname' type="text" value={surname} placeholder='Фамилия' onChange={onChangeSurname}/>
					</div>
					<div className="input-form">
						<input name='email' type="text" value={email} placeholder='Email' onChange={onChangeEmail}/>
					</div>
					<div className="input-form">
						<input name='pass' type="text" value={pass} placeholder='Пароль' onChange={onChangePass}/>
					</div>
					<button className="button button__main">
						<div className="inner" onClick={checkOut}>Создать</div>
					</button>
				</div>
			</div>
		</div>
	)
}

export default ModalPass;