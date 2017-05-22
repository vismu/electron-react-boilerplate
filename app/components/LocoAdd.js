import React from 'react';
import PropTypes from 'prop-types';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import Home from 'material-ui/svg-icons/action/home';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import {LocoTypes} from 'app/constants/App';

export default class LocoAdd extends React.PureComponent {
	static propTypes = {
		changeRoute: PropTypes.func.isRequired,
		addLoco: PropTypes.func.isRequired,
	}

	state = {
		id: NaN,
		type: LocoTypes[0],
		planStart: moment().unix(),
		planEnd: moment().add(30, 'days').unix(),
		error: '',
	}

	componentDidMount() {
		window.addEventListener('keyup', this.handleKeyPress);
	}

	componentWillUnmount() {
		window.removeEventListener('keyup', this.handleKeyPress);
	}

	handleKeyPress = (event) => {
		if (event.keyCode === 13) this.handleAddLocoClick();
	}

	handleHomeClick = () => {
		this.props.changeRoute('/locolist');
	}

	handleIdChange = (event, id) => {
		this.setState({id: parseInt(id, 10)});
	}

	handleTypeChange = (event, index, type) => {
		this.setState({type});
	}

	handlePlanStartChange = (event, date) => {
		this.setState({planStart: moment(date).unix()});
	}

	handlePlanEndChange = (event, date) => {
		this.setState({planEnd: moment(date).unix()});
	}

	hasSameLoco = () => _.find(
		JSON.parse(localStorage.getItem('locoList') || '[]'),
		{id: this.state.id}
	)

	handleAddLocoClick = () => {
		if (!Number.isNaN(this.state.id) && !this.hasSameLoco()) {
			this.props.addLoco({
				id: this.state.id,
				type: this.state.type,
				plan_date_start: this.state.planStart,
				fact_date_start: moment().unix(),
				plan_date_end: this.state.planEnd,
				status: 'В работе',
			});
			this.props.changeRoute('/locolist');
		} else if (this.hasSameLoco()) {
			this.setState({error: 'same'});
		} else {
			this.setState({error: 'id'});
		}
	}

	render() {
		return (
			<div className="ui-page">
				<Toolbar style={{minHeight: '56px', maxHeight: '56px'}}>
					<ToolbarGroup firstChild>
						<FloatingActionButton
							mini
							style={{marginLeft: '20px', boxShadow: 'none'}}
							onTouchTap={this.handleHomeClick}
						>
							<Home />
						</FloatingActionButton>
					</ToolbarGroup>
					<ToolbarGroup>
						<div className="toolbar-header">
							{moment().format('D MMMM YYYY, HH:mm')}
						</div>
					</ToolbarGroup>
				</Toolbar>
				<div className="ui-page-content">
					Номер локомотива:
					<TextField
						value={Number.isNaN(this.state.id) ? '' : this.state.id}
						onChange={this.handleIdChange}
						hintText="Номер локомотива"
						errorText={
							/*eslint-disable */
							this.state.error === 'id'
							? 'Введите номер локомотива'
							: this.state.error === 'same'
							? 'Локомотив с таким номер уже есть'
							: null
							/*eslint-enable */
						}
						style={{marginBottom: '32px'}}
					/>
					Тип локомотива:
					<DropDownMenu
						value={this.state.type}
						onChange={this.handleTypeChange}
						style={{width: '256px', marginBottom: '32px'}}
						underlineStyle={{marginLeft: 0}}
					>
						{_.map(LocoTypes, (type) => (
							<MenuItem key={type} value={type} primaryText={type} />
						))}
					</DropDownMenu>
					Дата начала производства:
					<DatePicker
						value={moment.unix(this.state.planStart).toDate()}
						locale="ru-RU"
						hintText="Дата начала производства"
						DateTimeFormat={global.Intl.DateTimeFormat}
						onChange={this.handlePlanStartChange}
						style={{marginBottom: '32px'}}
					/>
					Дата конца производства:
					<DatePicker
						value={moment.unix(this.state.planEnd).toDate()}
						locale="ru-RU"
						hintText="Дата конца производства"
						DateTimeFormat={global.Intl.DateTimeFormat}
						onChange={this.handlePlanEndChange}
						style={{marginBottom: '32px'}}
					/>
					<RaisedButton
						style={{width: '200px'}}
						label="Добавить"
						onTouchTap={this.handleAddLocoClick}
						primary
					/>
				</div>
			</div>
		);
	}
}
