import React from 'react';
import { BrowserRouter as Router, Routes, Switch,
  RedirectRoute, Route, Redirect,Link } from 'react-router-dom';
import axios from 'axios';
import LaunchTable from './components/LandingPage';
import LandingPage from './components/LandingPage';
import AnalyticsPage from './components/AnalyticsPage'

const App = () => {
 

  return (
    <div>
      <Router>
        <div>
         

        <h1>SpaceX Launch Dashboard</h1>
        
        <nav>
            <ul>
              <li>
              <Link to="/">Home</Link>
              </li>
            
              <li>
              <Link to="/analytics">Analytics</Link>
              </li>
            </ul>
       </nav>
        <Routes>
       <Route exact path = '/' element={<LandingPage/>} />
       <Route exact path = '/analytics' element={<AnalyticsPage/>} />
      

    </Routes>
    </div>
      </Router>

    </div>
  );
};

export default App;
