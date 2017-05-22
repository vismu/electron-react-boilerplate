import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {goBack} from 'react-router-redux';
import {changeRoute} from 'app/actions/App';
import {getLocoByID, getGildByID} from 'app/selectors/App';
import GildReport from 'app/components/GildReport';

const mapStateToProps = (state, {match: {params: {locoID, gildID}}}) => ({
	loco: getLocoByID(state, parseInt(locoID, 10)),
	gild: getGildByID(parseInt(gildID, 10)),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
	changeRoute,
	goBack,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GildReport);
