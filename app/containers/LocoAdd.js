import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeRoute, addLoco} from 'app/actions/App';
import LocoAdd from 'app/components/LocoAdd';

const mapDispatchToProps = (dispatch) => bindActionCreators({
	changeRoute,
	addLoco,
}, dispatch);

export default connect(null, mapDispatchToProps)(LocoAdd);
