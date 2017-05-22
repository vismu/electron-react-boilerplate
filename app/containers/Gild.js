import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeRoute} from 'app/actions/App';
import Gild from 'app/components/Gild';

const mapDispatchToProps = (dispatch) => bindActionCreators({
	changeRoute,
}, dispatch);

export default connect(null, mapDispatchToProps)(Gild);
