import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeRoute} from 'app/actions/App';
import Login from 'app/components/Login';

const mapDispatchToProps = (dispatch) => bindActionCreators({
	changeRoute,
}, dispatch);

export default connect(null, mapDispatchToProps)(Login);
