import React from 'react';
import PropTypes from 'prop-types';
import {LocoProps} from 'app/constants/App';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import Home from 'material-ui/svg-icons/action/home';
import Close from 'material-ui/svg-icons/navigation/close';
import ReactTable from 'react-table';

const columns = [{
	Header: 'Общая информация',
	columns: [{
		Header: 'Тип локомотива',
		id: 'type',
		accessor: d => d.type,
	}, {
		Header: '№ локомотива',
		id: 'id',
		accessor: d => d.id,
	}]
}, {
	Header: 'Дата начала производства',
	columns: [{
		Header: 'План',
		id: 'plan_date_start',
		accessor: d => moment.unix(d.plan_date_start).format('DD.MM.YYYY'),
	}, {
		Header: 'Факт',
		id: 'fact_date_start',
		accessor: d => moment.unix(d.fact_date_start).format('DD.MM.YYYY'),
		Cell: (row) => (
			<div
				style={{
					padding: '5px 10px',
					backgroundColor: row.row.fact_date_start > row.row.plan_date_start
						? '#ff6666'
						: '#88e188'
				}}
			>{row.value}</div>
		)
	}]
}, {
	Header: 'Дата сдачи локомотива ОАО «РЖД»',
	columns: [{
		Header: 'План',
		id: 'plan_date_end',
		accessor: d => moment.unix(d.plan_date_end).format('DD.MM.YYYY'),
	}, {
		Header: 'Факт',
		id: 'fact_date_end',
		accessor: d => d.fact_date_end
	}]
}, {
	Header: '',
	accessor: 'delete',
	minWidth: 30,
	Cell: () => <Close />
}];

export default class LocoList extends React.PureComponent {
	static propTypes = {
		changeRoute: PropTypes.func.isRequired,
		locoList: PropTypes.arrayOf(LocoProps).isRequired,
		deleteLoco: PropTypes.func.isRequired,
	}

	handleHomeClick = () => {
		this.props.changeRoute('/locolist');
	}

	handleAddLocoClick = () => {
		this.props.changeRoute('/locoadd');
	}

	handleColumnClick = (column, rowInfo) => {
		if (column.id === 'delete') {
			if (confirm('Удалить запись?')) this.props.deleteLoco({id: rowInfo.row.id});
		} else {
			this.props.changeRoute(`/locoitem/${rowInfo.row.id}`);
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
						<div className="toolbar-header">
							{moment().format('D MMMM YYYY, HH:mm')}
						</div>
					</ToolbarGroup>
				</Toolbar>
				<div className="ui-page-content">
					<ReactTable
						className="-striped -highlight"
						data={this.props.locoList}
						columns={columns}
						defaultPageSize={this.props.locoList.length > 10 ? this.props.locoList.length : 10}
						showPagination={false}
						filterable
						noDataText="Записи отсутствуют"
						getTdProps={(state, rowInfo, column) => ({
							onClick: () => this.handleColumnClick(column, rowInfo)
						})}
					/>
				</div>
			</div>
		);
	}
}
