import { ROCKETS_DATA_G, YEARS_DATA_G } from '../constants/analyticsActionTypes';

export const setRocketsData = (data) => ({
  type: ROCKETS_DATA_G,
  payload: data,
});

export const setYearsData = (data) => ({
  type: YEARS_DATA_G,
  payload: data,
});
    