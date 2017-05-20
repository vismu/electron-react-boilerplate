import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends React.PureComponent {
	static propTypes = {
		changeRoute: PropTypes.func.isRequired,
	}

	state = {
		login: '',
		password: '',
	}

	componentDidMount() {
		window.addEventListener('keyup', this.handleKeyPress);
	}

	componentWillUnmount() {
		window.removeEventListener('keyup', this.handleKeyPress);
	}

	handleLoginChange = (event, login) => {
		this.setState({login});
	}

	handlePasswordChange = (event, password) => {
		this.setState({password});
	}

	handleKeyPress = (event) => {
		if (event.keyCode === 13) this.handleLoginTry();
	}

	handleLoginTry = () => {
		if (this.state.login === 'admin') {
			if (this.state.password === 'admin') {
				this.props.changeRoute('/locolist');
			} else {
				this.setState({error: 'password'});
			}
		} else {
			this.setState({error: 'login'});
		}
	}

	render() {
		return (
			<div className="ui-page-content ui-page-content--centered">
				<TextField
					value={this.state.login}
					onChange={this.handleLoginChange}
					hintText="Имя пользователя"
					errorText={this.state.error === 'login' ? 'Неверный логин' : null}
				/>
				<TextField
					value={this.state.password}
					type="password"
					onChange={this.handlePasswordChange}
					hintText="Пароль"
					errorText={this.state.error === 'password' ? 'Неверный пароль' : null}
				/>
				<RaisedButton
					style={{marginTop: '8px', marginLeft: '160px'}}
					onClick={this.handleLoginTry}
					onKeyPress={this.handleKeyPress}
				>Войти</RaisedButton>
			</div>
		);
	}
}
