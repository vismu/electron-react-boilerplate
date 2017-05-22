import React from 'react';
import Gild from 'app/containers/Gild';

export default class FactoryScheme extends React.PureComponent {
	render() {
		return (
			<div className="scheme">
				<Gild title="Цех 40" status="ready" x={0} y={0} />
				<Gild title="Цех 42" status="problem" x={0} y={40} />
				<Gild title="Цех 43" status="ready" x={0} y={80} />
				<Gild title="Цех 56" status="ready" x={0} y={120} />
				<Gild title="Цех 47" status="problem" x={0} y={165} />
				<Gild title="Цех 42" status="ready" x={0} y={215} />
				<Gild title="Цех 43" status="ready" x={0} y={255} />
				<Gild title="Цех 40" status="ready" x={0} y={355} />
				<Gild title="Цех 56" status="problem" x={0} y={395} />
				<Gild title="Цех 48" status="ready" x={220} y={460} />
				<Gild title="Цех 42" status="ready" x={220} y={315} />
				<Gild title="Цех 43" status="ready" x={270} y={315} />

				<Gild title="Цех 43" x={80} y={0} width={100} height={195} />
				<Gild title="Цех 47" status="ready" x={80} y={215} width={100} height={70} />
				<Gild title="Цех 53" x={80} y={355} width={100} height={70} />

				<Gild title="Цех 51" x={220} y={215} width={150} height={70} />
				<Gild title="Цех 54" x={220} y={355} width={150} height={70} />
			</div>
		);
	}
}
