import React from 'react';
import PropTypes from 'prop-types';
import {LocoProps} from 'app/constants/App';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Home from 'material-ui/svg-icons/action/home';

export default class LocoList extends React.PureComponent {
	static propTypes = {
		changeRoute: PropTypes.func.isRequired,
		locoList: PropTypes.arrayOf(LocoProps).isRequired,
	}

	handleHomeClick = () => {
		this.props.changeRoute('/locolist');
	}

	handleAddLocoClick = () => {
		this.props.changeRoute('/locoadd');
	}

	render() {
		return (
			<div className="ui-page">
				<Toolbar>
					<ToolbarGroup firstChild>
						<FloatingActionButton
							mini
							style={{marginLeft: '20px', boxShadow: 'none'}}
						>
							<Home />
						</FloatingActionButton>
						<RaisedButton
							style={{boxShadow: 'none'}}
							primary
							label="Добавить локомотив"
							onTouchTap={this.handleAddLocoClick}
						/>
					</ToolbarGroup>
					<ToolbarGroup>
						<FlatButton disabled>
							{moment().format('D MMMM YYYY, HH:mm')}
						</FlatButton>
					</ToolbarGroup>
				</Toolbar>
			</div>
		);
	}
}
