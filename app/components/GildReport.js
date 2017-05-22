import React from 'react';
import PropTypes from 'prop-types';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Home from 'material-ui/svg-icons/action/home';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import {LocoProps, GildProps} from 'app/constants/App';
import ReactTable from 'react-table';

const columns = [{
	Header: 'Технологический этап производства',
}, {
	Header: 'Выявленные несоответствия',
}, {
	Header: 'Дата начала этапа',
	columns: [{
		Header: 'План',
		minWidth: 30,
	}, {
		Header: 'Факт',
		minWidth: 30,
	}]
}, {
	Header: 'Дата окончания этапа',
	columns: [{
		Header: 'План',
		minWidth: 30,
	}, {
		Header: 'Факт',
		minWidth: 30,
	}]
}];

export default class GildReport extends React.PureComponent {
	static propTypes = {
		loco: LocoProps.isRequired,
		gild: GildProps.isRequired,
		changeRoute: PropTypes.func.isRequired,
	}

	handleHomeClick = () => {
		this.props.changeRoute('/locolist');
	}

	handleBackClick = () => {
		this.props.changeRoute(`/locoitem/${this.props.loco.id}`);
	}

	render() {
		const {id, type} = this.props.loco;
		const {title} = this.props.gild;

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
						<FloatingActionButton
							mini
							style={{marginLeft: '20px', boxShadow: 'none'}}
							onTouchTap={this.handleBackClick}
						>
							<ArrowBack />
						</FloatingActionButton>
					</ToolbarGroup>
					<ToolbarGroup>
						<div className="toolbar-header">
							Электровоз {type} №{id}
						</div>
					</ToolbarGroup>
					<ToolbarGroup>
						<div className="toolbar-header">
							{title}
						</div>
					</ToolbarGroup>
					<ToolbarGroup>
						<div className="toolbar-header">
							{moment().format('D MMMM YYYY, HH:mm')}
						</div>
					</ToolbarGroup>
				</Toolbar>
				<div className="ui-page-content">
					<ReactTable
						className="-striped -highlight"
						columns={columns}
						defaultPageSize={10}
						showPagination={false}
						noDataText="Записи отсутствуют"
					/>
				</div>
			</div>
		);
	}
}
