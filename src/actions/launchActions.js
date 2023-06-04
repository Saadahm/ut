import axios from 'axios';
import { LAUNCHES_T } from '../constants/actionTypes';

export const setLaunches = (launches) => ({
  type: LAUNCHES_T,
  payload: launches,
});

export const fetchLaunches = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v3/launches');
      const launches = response.data;
      dispatch(setLaunches(launches));
    } catch (error) {
      console.error(error);
    }
  };
};
