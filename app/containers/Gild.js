import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeRoute} from 'app/actions/App';
import Gild from 'app/components/Gild';

const mapStateToProps = () => ({
	locoID: parseInt(_.last(window.location.hash.split('/')), 10),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
	changeRoute,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Gild);
