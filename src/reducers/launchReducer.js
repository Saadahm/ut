import { LAUNCHES_T } from '../constants/actionTypes';

const iState = [];

const launchReducer = (state = iState, action) => {
  switch (action.type) {
    case LAUNCHES_T:
      return action.payload;
    default:
      return state;
  }
};

export default launchReducer;
