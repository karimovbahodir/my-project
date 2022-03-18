import './footer.css';

const AppFooter = () => {
	return (
		<div className="appFooter">
			<div className="appFooter__container">
				<div className='appFooter__adress'>
					<a href='#' className='phone__number'>Phone number: +79061234567</a>
					<a href='#' className='adress'>Adress: город Казань, ул. Братьев Касимовых</a>
				</div>
				<a href='#' className='appFooter__logo'>Logo</a>
				<div className='social__media'>
					<div><a href='#' className='vk'><img src="https://img.icons8.com/ios/50/000000/vk-circled--v2.png" /></a></div>
					<div><a href='#' className='instagram'><img src="https://img.icons8.com/ios/50/000000/instagram-new--v2.png" /></a></div>
					<div><a href='#' className='twitter'><img src="https://img.icons8.com/ios/50/000000/twitter-circled--v4.png" /></a></div>
					<div><a href='#' className='facebook'><img src="https://img.icons8.com/ios/50/000000/facebook--v2.png"/></a></div>
					</div>
			</div>
		</div>
	)
}

export default Footer;