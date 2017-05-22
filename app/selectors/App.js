import {Gilds} from 'app/constants/App';

export const getLocoList = (state) => state.App.locoList;
export const getLocoByID = (state, id) => _.find(getLocoList(state), {id});
export const getGildByID = (id) => _.find(Gilds, {id});
