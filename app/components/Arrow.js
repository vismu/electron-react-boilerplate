import React from 'react';
import PropTypes from 'prop-types';

export default class Arrow extends React.PureComponent {
	static propTypes = {
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
		rotate: PropTypes.string,
	};

	static defaultProps = {
		rotate: '0'
	}

	render() {
		const {x, y, rotate} = this.props;

		return (<div
			className="arrow"
			style={{
				left: x,
				top: y,
				transform: `rotate(${rotate}deg)`,
			}}
		/>);
	}
}

