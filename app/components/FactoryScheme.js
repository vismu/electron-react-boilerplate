import React from 'react';
import PropTypes from 'prop-types';
import Gild from 'app/containers/Gild';
import Action from 'app/components/Action';
import Arrow from 'app/components/Arrow';
import {Gilds} from 'app/constants/App';

export default class FactoryScheme extends React.PureComponent {
	static propTypes = {
		locoID: PropTypes.number.isRequired,
	}

	render() {
		const scale = (window.innerHeight - 100) / 500;
		return (
			<div className="scheme" style={{transform: `scale(${scale}, ${scale})`}}>
				{_.map(Gilds, ({id, title, status, x, y, width, height}) => (
					<Gild
						key={id}
						locoID={this.props.locoID}
						id={id}
						title={title}
						status={status}
						x={x}
						y={y}
						width={width}
						height={height}
					/>
				))}

				<Action title="Окраска перед монтажем" x={172} y={80} orientation="vertical" />
				<Action title="Окраска после монтажа" x={640} y={80} orientation="vertical" />

				<Arrow x={40} y={12} />
				<Arrow x={40} y={53} />
				<Arrow x={40} y={93} />
				<Arrow x={40} y={133} />
				<Arrow x={40} y={173} />
				<Arrow x={40} y={227} />
				<Arrow x={40} y={267} />
				<Arrow x={40} y={367} />
				<Arrow x={40} y={407} />
				<Arrow x={180} y={390} />
				<Arrow x={180} y={250} />
				<Arrow x={180} y={95} />
				<Arrow x={259} y={95} />
				<Arrow x={649} y={95} />
				<Arrow x={550} y={388} />

				<Arrow x={460} y={326} rotate="90" />
				<Arrow x={693} y={180} rotate="90" />

				<Arrow x={320} y={198} rotate="-90" />
				<Arrow x={276} y={298} rotate="-90" />
				<Arrow x={225} y={298} rotate="-90" />
				<Arrow x={325} y={325} rotate="-90" />
				<Arrow x={225} y={443} rotate="-90" />
			</div>
		);
	}
}
