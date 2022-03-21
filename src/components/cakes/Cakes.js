import './Cakes.css';
import {Link} from 'react-router-dom';


const Cakes = (props) => {
	return (
		<div className='cakes__container'>
			<div className='cakes__block cakes-view'>
			<Link to='/'><img src='https://mykaleidoscope.ru/uploads/posts/2020-01/1579936217_37-p-fruktovie-torti-77.jpg' className='cakes' /></Link>
			<div className='content'><Link to='/' >cakes</Link></div>
			</div>
		</div>
	)
}

export default Cakes;