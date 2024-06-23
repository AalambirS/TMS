import './App.css';
import Header from './Components/Header/Header';
import Loadboard from './Loadboard';
import Drivers from './pages/Drivers';
import { Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import "boxicons";
import { SidebarProvider } from './SidebarContext';
import Classes from './App.module.css'
import Sidebar from './Components/Sidebar/Sidebar';
// import Loadboard from './pages/Loadboard/Loadboard';


function App() {
    const [isActive, setIsActive] = useState(false); // Initial state: false

    const handleClick = () => {
        setIsActive(!isActive); // Toggle active state
    };

    return (
        <div className="App">
            <Header />
            <div className={Classes.mainGrid} >
                <div>
                    <Sidebar />
                </div>
                <div className={Classes.routesContainer} >
                    <Routes>
                        <Route path='/loadboard' element={<Loadboard />} />
                        <Route path='/drivers' element={<Drivers />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
