import './App.css';
import Header from './Components/Header/Header';
import Drivers from './pages/Drivers/Drivers';
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import "boxicons";
import Sidebar from './Components/Sidebar/Sidebar';
import Loadboard from './pages/Loadboard/Loadboard';
import Equipment from './pages/Equipment/Equipment';
import PickDrop from './pages/PickDrop/PickDrop';
import Customer from './pages/Customers/Customers';
import Employee from './pages/Employee/Employees';


function App() {
    const [isActive, setIsActive] = useState(false); // Initial state: false

    const handleClick = () => {
        setIsActive(!isActive); // Toggle active state
    };

    const [isExpanded, setisExpanded] = useState(true);
    const toggleExpanded = () => {
        setisExpanded(!isExpanded);
    }

    const [data, setData] = useState(null);

    const headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjQwanpsNlJUbStmQ3FZa00iLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzIxNTAxMTE2LCJpYXQiOjE3MjE0OTc1MTYsImlzcyI6Imh0dHBzOi8vcGZsbWhwdnhhb3RnbndmZ3d6cnQuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjhjMGU3ZTBlLTliMGMtNDVkYy1hMTA1LTU4NTIxN2RkMDE3OSIsImVtYWlsIjoibGVuYXh0ZWNobm9sb2d5QGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnsiZW1haWwiOiJsZW5heHRlY2hub2xvZ3lAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwaG9uZV92ZXJpZmllZCI6ZmFsc2UsInN1YiI6IjhjMGU3ZTBlLTliMGMtNDVkYy1hMTA1LTU4NTIxN2RkMDE3OSJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNzIxNDk3NTE2fV0sInNlc3Npb25faWQiOiJmYWI4MTY0OS00ZDlmLTQ3MDktYTZkZi04ODBhZjM2ODg5ZTciLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.y1fUsS4sq0JsmRPkgrdmuq9chJduC0nNLhnfO_xZWs8'
      };

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     fetch('https://tsa-backend-production.up.railway.app/employees?page=1&limit=10', {
    //         method: 'GET',
    //         headers: headers,
    //       })
    //       .then(response => response.json()) // Parse response as JSON
    //       .then(data => console.log(data)) // Handle successful response
    //     }
    //       catch(error) {console.error(error)};
    // };

    // fetchData();
  }, []);

    return (
        <div className="App">
            <Header />
            <div className='mainGrid' style={{ gridTemplateColumns: isExpanded ? '20% 80%' : '8% 92%' }} >
                <div>
                    <Sidebar toggleExpanded={toggleExpanded} isExpanded={isExpanded} />
                </div>
                <div className='routesContainer' >
                    <Routes>
                        <Route path='/' element={<Loadboard />} />
                        <Route path='/loadboard' element={<Loadboard />} />
                        <Route path='/drivers' element={<Drivers />} />
                        <Route path='/equipment' element={<Equipment />} />
                        <Route path='/locations' element={<PickDrop />} />
                        <Route path='/customers' element={<Customer />} />
                        <Route path='/employees' element={<Employee />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;


// DONE - Left off: Complete the dropdowns and correct links for each.


// TODO:
// DONE - 1. Make a safety section where drivers, trailers, and Tractors can be created
// DONE - 2. Make Employees a section, which has a dropdown for Employees/Agents and Drivers
// 3. Create a Dispatch section that has LoadBoard, Pick/Drop, and Bill to Customers as the dropdowns
// 4. Update all Add/Edit menus
    // - Loadboard
    // - Drivers (Safety)
    // - Pick/Drop
    // - Tractors
    // - Trailers
    // - Company Employees/ Agents
    // - Bill to Customers
    // - Drivers (Employees)

// 5. Login Page
// 6. Integrate Frontend/Backend
// 7. Debug
// 8. Create Driver Revenue/Pay