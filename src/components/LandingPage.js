import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLaunches } from '../actions/launchActions';
import LaunchTable from './LaunchTable';
import  "./LandingPage.css"
const LandingPage = () => {
  const dispatch = useDispatch();
  const launches = useSelector((state) => state.launches);

  useEffect(() => {
    dispatch(fetchLaunches());
  }, [dispatch]);

  return (
    <div>
      <h2>Landing Page</h2>
      <LaunchTable launches={launches} />
    </div>
  );
};

export default LandingPage;
