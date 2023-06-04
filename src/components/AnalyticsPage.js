import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto';

import { useDispatch, useSelector } from 'react-redux';
import { setRocketsData, setYearsData } from '../actions/analyticsActions';

const AnalyticsPage = () => {
  const dispatch = useDispatch();
  const rocketsData = useSelector((state) => state.analytics.rocketsData);
  const yearsData = useSelector((state) => state.analytics.yearsData);

  useEffect(() => {
    const fetchRocketsData = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v3/rockets');
        const rockets = await response.json();

       
        const rocketsChartData = {
          labels: rockets.map((rocket) => rocket.rocket_name),
          datasets: [
            {
              label: 'Success',
              data: rockets.map((rocket) => rocket.success_rate_pct),
              backgroundColor: 'blue',
            },
            {
              label: 'Failure',
              data: rockets.map((rocket) => 100 - rocket.success_rate_pct),
              backgroundColor: 'yellow',
            },
          ],
        };

        dispatch(setRocketsData(rocketsChartData));
      } catch (error) {
        console.error(error);
      }
    };

    const fetchYearsData = async () => {
      try {

        const response = await fetch('https://api.spacexdata.com/v3/launches');
        const launches = await response.json();

        const years = ['2018', '2019', '2020', '2021'];
        const successCounts = years.map((year) => {
          return launches.filter((launch) => launch.launch_year === year && launch.launch_success).length;
        });
        const failureCounts = years.map((year) => {
          return launches.filter((launch) => launch.launch_year === year && !launch.launch_success).length;
        });

        const yearsChartData = {
          labels: years,
          datasets: [
            {
              label: 'Success',
              data: successCounts,
              backgroundColor: 'blue',
            },
            {
              label: 'Failure',
              data: failureCounts,
              backgroundColor: 'yellow',
            },
          ],
        };

        dispatch(setYearsData(yearsChartData));
      } catch (error) {
        console.error(error);
      }
    };

    fetchRocketsData();
    fetchYearsData();
  }, [dispatch]);

  return (
    <div>
      <h1>Analytics Page</h1>
      <h2>Rockets' wise success/failure rate</h2>
      {rocketsData && <Bar data={rocketsData} options={{ scales: { x: { type: 'category' } } }} />}

      <h2>Success/failure rate year wise</h2>
      {yearsData && <Bar data={yearsData} />}
    </div>
  );
};

export default AnalyticsPage;

