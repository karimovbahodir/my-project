import {Link} from 'react-router-dom';
import './Cupecakes.css';


const Cupecakes = (props) => {
	return (
		<div className='cupecakes__container'>
			<div className='cupecakes__block cupecakes-view'>
				<Link to='/cards'><img src='https://www.gourmetfoodstore.com/images/Product/large/dark-chocolate-halloween-cupcakes-gold-dust-recipe-1S-7149.jpg' className='cupecake' /></Link>
				<div className='content'><Link to='/cards'>cupcakes</Link></div>
			</div>
		</div>
	)
}

export default Cupecakes; 