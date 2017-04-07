import React, { Component } from 'react';

import './styles/app.css';

import Login from './pages/Login';

class App extends Component {
	render() {
		return (
			<div className="App">
				{this.props.children}
			</div>
		);
	}
}

export default App;
