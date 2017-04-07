import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import ErrorNotFound from './pages/ErrorNotFound';
import Login from './pages/Login';
import Register from './pages/Register';

import './styles/index.css';

ReactDOM.render(
	<Router>
		<App>
			<Switch>
				<Route exact path="/" component={Login}/>
				<Route path="/login" component={Login}/>
				<Route path="/register" component={Register}/>

				<Route component={ErrorNotFound}/>
			</Switch>
		</App>
	</Router>,
	document.getElementById('root')
);
