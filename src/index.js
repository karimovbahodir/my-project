import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';

const data = [
   {id: 1, name: 'Cupecakes', price: '21$', img: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'},
   {id: 2, name: 'Cupecakes', price: '20$', img: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'},
   {id: 3, name: 'Cupecakes', price: '19$', img: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'},
   {id: 4, name: 'Cupecakes', price: '23$', img: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'},
]


ReactDOM.render(
	<React.StrictMode>
		<App data={data}/>
	</React.StrictMode>,
	document.getElementById('root')
);

