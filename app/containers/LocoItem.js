import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeRoute} from 'app/actions/App';
import {getLocoByID} from 'app/selectors/App';
import LocoItem from 'app/components/LocoItem';

const mapStateToProps = (state, {match: {params: {id}}}) => ({
	locoItem: getLocoByID(state, parseInt(id, 10)),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
	changeRoute,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LocoItem);
