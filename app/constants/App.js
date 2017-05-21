import PropTypes from 'prop-types';

export const REQUEST_START = 'REQUEST_START';
export const REQUEST_END = 'REQUEST_END';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const ADD_LOCO = 'ADD_LOCO';
export const DELETE_LOCO = 'DELETE_LOCO';
export const LocoTypes = ['3ЭС5К', '2ЭС4К', 'ЭП20'];

export const LocoProps = PropTypes.shape({
	id: PropTypes.number.isRequired,
	type: PropTypes.oneOf(LocoTypes).isRequired,
	plan_date_start: PropTypes.number.isRequired,
	fact_date_start: PropTypes.number.isRequired,
	plan_date_end: PropTypes.number.isRequired,
	fact_date_end: PropTypes.number,
	status: PropTypes.oneOf(['В работе']).isRequired,
});
