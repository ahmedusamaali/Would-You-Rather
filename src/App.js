import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Login from './components/Login';
import PrivateApp from './components/PrivateApp';
import { handleInitialData } from './actions/shared';

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		const { authedUser, loadingBar } = this.props;
			return (
				
				<div>
					{!authedUser ? <Login /> : <PrivateApp />}
				</div>
				)
	}
}

function mapStateToProps({ authedUser, loadingBar }) {
	return {
		authedUser,
		loadingBar
	};
}

export default connect(mapStateToProps)(App);
