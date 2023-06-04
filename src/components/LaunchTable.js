import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import './LaunchTable.css';

const f1 = (object, property) => {
  const properties = property.split('.');
  let value = object;
  for (let i = 0; i < properties.length; i++) {
    value = value[properties[i]];
  }
  return value;
};

const f2 = (a, b) => {
  if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b);
  } else {
    return a - b;
  }
};

const LaunchTable = ({ launches }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filteredLaunches, setFilteredLaunches] = useState(launches);
  const [currentPage, setCurrentPage] = useState(1);
  const [launchesPerPage] = useState(10);

  const searchfunc = (event) => {
    setSearchTerm(event.target.value);
  };

  const sortIt = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  useEffect(() => {
    let filtered = launches.filter((launch) =>
      launch.mission_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortColumn) {
      filtered.sort((a, b) => {
        const aValue = f1(a, sortColumn);
        const bValue = f1(b, sortColumn);
    
        if (sortOrder === 'asc') {
          return f2(aValue, bValue);
        } else {
          return f2(bValue, aValue);
        }
      });
    }

    setFilteredLaunches(filtered);
  }, [launches, searchTerm, sortColumn, sortOrder]);

  const indexOfLastLaunch = currentPage * launchesPerPage;
  const indexOfFirstLaunch = indexOfLastLaunch - launchesPerPage;
  const currentLaunches = filteredLaunches.slice(indexOfFirstLaunch, indexOfLastLaunch);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="FirstBut">
        <input type="text" value={searchTerm} onChange={searchfunc} placeholder="Search any Mission-Name" />
      </div>
      <table className="launch-table">
        <thead>
          <tr>
            <th>
              <div className="column-header">
                <span>Flight-Number</span>
                <button onClick={() => sortIt('flight_number')}>Sort</button>
              </div>
            </th>
            <th>
              <div className="column-header">
                <span>Rocket-Name</span>
                <button onClick={() => sortIt('rocket.rocket_name')}>Sort</button>
              </div>
            </th>
            <th>
              <div className="column-header">
                <span>Launch-Date</span>
                <button onClick={() => sortIt('launch_date_utc')}>Sort</button>
              </div>
            </th>
            <th>
              <div className="column-header">
                <span>Mission-Name</span>
                <button onClick={() => sortIt('mission_name')}>Sort</button>
              </div>
            </th>
            <th>
              <div className="column-header">
                <span>Success</span>
                <button onClick={() => sortIt('launch_success')}>Sort</button>
              </div>
            </th>
            <th>
              <div className="column-header">
                <span>Launch-Site</span>
                <button onClick={() => sortIt('launch_site.site_name_long')}>Sort</button>
              </div>
            </th>
            <th>
              <div className="column-header">
                <span>Article-Link</span>
                <button onClick={() => sortIt('links.article_link')}>Sort</button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentLaunches.map((launch) => (
            <tr key={launch.flight_number}>
              <td>{launch.flight_number}</td>
              <td>{f1(launch, 'rocket.rocket_name')}</td>
              <td>{launch.launch_date_utc}</td>
              <td>{launch.mission_name}</td>
              <td>{launch.launch_success ? 'Success' : 'Failure'}</td>
              <td>{f1(launch, 'launch_site.site_name_long')}</td>
              <td>
                {launch.links.article_link ? (
                  <a href={launch.links.article_link} target="_blank" rel="noopener noreferrer">
                    Article Link
                  </a>
                ) : (
                  'N/A'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Pages</h4>
      <Pagination
        launchesPerPage={launchesPerPage}
        totalLaunches={filteredLaunches.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default LaunchTable;
