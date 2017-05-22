export const getLocoList = (state) => state.App.locoList;
export const getLocoByID = (state, id) => _.find(getLocoList(state), {id});
