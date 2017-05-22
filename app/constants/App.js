import PropTypes from 'prop-types';

export const REQUEST_START = 'REQUEST_START';
export const REQUEST_END = 'REQUEST_END';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const ADD_LOCO = 'ADD_LOCO';
export const DELETE_LOCO = 'DELETE_LOCO';
export const LocoTypes = ['3ЭС5К', '3ЭС4К', '2ЭС4К', 'ЭП20'];

export const LocoProps = PropTypes.shape({
	id: PropTypes.number.isRequired,
	type: PropTypes.oneOf(LocoTypes).isRequired,
	plan_date_start: PropTypes.number.isRequired,
	fact_date_start: PropTypes.number.isRequired,
	plan_date_end: PropTypes.number.isRequired,
	fact_date_end: PropTypes.number,
	status: PropTypes.oneOf(['В работе']).isRequired,
});

export const GildProps = PropTypes.shape({
	title: PropTypes.string.isRequired,
});

export const Gilds = [{
	id: 0,
	title: 'Цех 40',
	x: 0,
	y: 0,
	status: 'ready',
}, {
	id: 1,
	title: 'Цех 42',
	x: 0,
	y: 40,
	status: 'problem',
}, {
	id: 2,
	title: 'Цех 43',
	x: 0,
	y: 80,
	status: 'ready',
}, {
	id: 3,
	title: 'Цех 56',
	x: 0,
	y: 120,
	status: 'ready',
}, {
	id: 4,
	title: 'Цех 47',
	x: 0,
	y: 165,
	status: 'problem',
}, {
	id: 5,
	title: 'Цех 42',
	x: 0,
	y: 215,
	status: 'ready',
}, {
	id: 6,
	title: 'Цех 43',
	x: 0,
	y: 255,
	status: 'ready',
}, {
	id: 7,
	title: 'Цех 40',
	x: 0,
	y: 355,
	status: 'ready',
}, {
	id: 8,
	title: 'Цех 56',
	x: 0,
	y: 395,
	status: 'problem',
}, {
	id: 9,
	title: 'Цех 48',
	x: 220,
	y: 460,
	status: 'ready',
}, {
	id: 10,
	title: 'Цех 42',
	x: 220,
	y: 315,
	status: 'ready',
}, {
	id: 11,
	title: 'Цех 43',
	x: 270,
	y: 315,
	status: 'ready',
}, {
	id: 12,
	title: 'Цех 43',
	x: 80,
	y: 0,
	width: 100,
	height: 195,
}, {
	id: 13,
	title: 'Цех 47',
	x: 80,
	y: 215,
	width: 100,
	height: 70,
	status: 'ready',
}, {
	id: 14,
	title: 'Цех 53',
	x: 80,
	y: 355,
	width: 100,
	height: 70,
}, {
	id: 15,
	title: 'Цех 51',
	x: 220,
	y: 215,
	width: 150,
	height: 70,
}, {
	id: 16,
	title: 'Цех 54',
	x: 220,
	y: 355,
	width: 150,
	height: 70,
}, {
	id: 17,
	title: 'Цех 55',
	x: 300,
	y: 0,
	width: 350,
	height: 195,
}, {
	id: 18,
	title: 'Цех 55. Подготовка и сдача на сбыт',
	x: 400,
	y: 355,
	width: 150,
	height: 70,
}]
