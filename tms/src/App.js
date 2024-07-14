import './App.css';
import Header from './Components/Header/Header';
import Drivers from './pages/Drivers/Drivers';
import { Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import "boxicons";
import { SidebarProvider } from './SidebarContext';
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
