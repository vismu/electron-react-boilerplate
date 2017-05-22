import React from 'react';
import PropTypes from 'prop-types';

export default class Gild extends React.PureComponent {
	static propTypes = {
		title: PropTypes.string.isRequired,
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
		width: PropTypes.number,
		height: PropTypes.number,
		status: PropTypes.oneOf(['ready', 'problem', 'pending']),
	};

	static defaultProps = {
		width: 40,
		height: 30,
		status: 'pending',
	}

	render() {
		const {title, x, y, width, height, status} = this.props;

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
					fontSize: width === 40 ? 10 : 14
				}}
			>
				<span className="gild__title">{title}</span>
			</div>
		);
	}
}
