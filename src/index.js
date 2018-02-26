import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { injectGlobal } from 'styled-components';

//eslint-disable-next-line
injectGlobal`
	body {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
	}
	a {
		color: #6699CC;
	}
	p {
		line-height: 150%;
	}
`;

ReactDOM.render(<App />, document.getElementById('root'));
