import { ROCKETS_DATA_G, YEARS_DATA_G } from '../constants/analyticsActionTypes';

const initialState = {
  rocketsData: null,
  yearsData: null,
};

const analyticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROCKETS_DATA_G:
      return {
        ...state,
        rocketsData: action.payload,
      };
    case YEARS_DATA_G:
      return {
        ...state,
        yearsData: action.payload,
      };
    default:
      return state;
  }
};

export default analyticsReducer;
