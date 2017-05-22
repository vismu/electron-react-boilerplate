import React from 'react';
import PropTypes from 'prop-types';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Home from 'material-ui/svg-icons/action/home';
import {LocoProps} from 'app/constants/App';
import FactoryScheme from 'app/components/FactoryScheme';

export default class LocoItem extends React.PureComponent {
	static propTypes = {
		locoItem: LocoProps.isRequired,
		changeRoute: PropTypes.func.isRequired,
	}

	handleHomeClick = () => {
		this.props.changeRoute('/locolist');
	}

	render() {
		const {id, type} = this.props.locoItem;

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
							Электровоз {type} №{id}
						</div>
					</ToolbarGroup>
					<ToolbarGroup>
						<div className="toolbar-header">
							{moment().format('D MMMM YYYY, HH:mm')}
						</div>
					</ToolbarGroup>
				</Toolbar>
				<div className="ui-page-content ui-page-content--centered">
					<FactoryScheme locoID={id} />
				</div>
			</div>
		);
	}
}
