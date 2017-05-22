import React from 'react';
import PropTypes from 'prop-types';

export default class Action extends React.PureComponent {
	static propTypes = {
		title: PropTypes.string.isRequired,
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
		width: PropTypes.number,
		height: PropTypes.number,
		orientation: PropTypes.oneOf(['horizontal', 'vertical']),
		status: PropTypes.oneOf(['ready', 'problem', 'pending']),
	};

	static defaultProps = {
		width: 135,
		height: 40,
		status: 'pending',
		orientation: 'horizontal',
	}

	render() {
		const {title, x, y, width, height, status, orientation} = this.props;

		return (
			<div
				className={`gild gild--${status}`}
				style={{
					minWidth: width,
					maxWidth: width,
					minHeight: height,
					maxHeight: height,
					left: x,
					top: y,
					fontSize: width === 135 ? 10 : 14,
					transform: orientation === 'vertical' ? 'rotate(-90deg)' : null
				}}
			>
				<span className="gild__title">{title}</span>
			</div>
		);
	}
}
