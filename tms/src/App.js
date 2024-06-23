import './App.css';
import Header from './Header';
import Loadboard from './Loadboard';
import Drivers from './pages/Drivers';
import { Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import "boxicons";
import { SidebarProvider } from './SidebarContext';

// I had coded the sidebar in a separate component (Sidebar.js), 
// but I was unable to dynamically adjust the size of the tables to shrink and expand with the sidebar.
// I ended up moving the sidebar code to App.js so that I can use the isActive state to 
// code the css for the other table components

// SidebarProvider is code I used from online that should allow the isActive state to be monitored
//  so that other components can use the state to manipulate the size of their content.


// Feel free to delete the SidebarProvider and reorganize the code in whichever way that follows good coding practices

function App() {
  const [isActive, setIsActive] = useState(false); // Initial state: false

  const handleClick = () => {
    setIsActive(!isActive); // Toggle active state
  };

  return (
    <SidebarProvider>
      <div className="App">
      
      <Header />
      <div className='side'>
      <div id="btn" className={`Sidebar ${isActive ? 'active' : ''}`}>
        <div className='top'>
            <div className='logo'>
                <box-icon className="logo-icon"name="rocket"></box-icon>
                <span> TMS</span>
            </div>
            
            <button id='btn' className='my-button' onClick={handleClick}>
                <box-icon className='nav_box' 
            name="menu"></box-icon>
            </button>
            
        </div>
        <div className='user'>
            <img source="" alt="User" className='user-img'/>
            <div>
                <p className='bold'>Aalambir S.</p>
            </div>
        </div>

        <ul>
            <li>
            <Link to='/loadboard'>
                <box-icon className = "icon" name="truck" type="solid"></box-icon>
                <span className='nav-item'>LoadBoard</span>
            </Link>
            <span className='tooltip'>LoadBoard</span>
            </li>

            <li>
            <Link to='/locations'>
                <box-icon className = "icon" name="map-pin" type="solid"></box-icon>
                <span className='nav-item'>Pick/Drop</span>
            </Link>
            <span className='tooltip'>Pick/Drop</span>
            </li>

            {/* <li>
            <a to='#'>
                <box-icon className="icon" name="factory" type="solid"></box-icon>
                <span className='nav-item'>Company</span>
            </a>
            <span className='tooltip'>Company</span>
            </li> */}

            <li>
            <Link to='/drivers'>
                <box-icon className = "icon" name="group" type="solid"></box-icon>
                <span className='nav-item'>Drivers</span>
            </Link>
            <span className='tooltip'>Drivers</span>
            </li>

            <li>
            <Link to='/equipment'>
                <box-icon className = "icon" name="factory" type="solid"></box-icon>
                <span className='nav-item'>Equipment</span>
            </Link>
            <span className='tooltip'>Equipment</span>
            </li>

            {/* <li>
            <a to='#'>
                <box-icon className="icon" name="calculator" type="solid"></box-icon>
                <span className='nav-item'>Accounting</span>
            </a>
            <span className='tooltip'>Accounting</span>
            </li> */}

            <li>
            <Link to='/revenue'>
                <box-icon className = "icon" name="money" type="solid"></box-icon>
                <span className='nav-item'>Revenue</span>
            </Link>
            <span className='tooltip'>Revenue</span>
            </li>

            <li>
            <Link to='/expenses'>
                <box-icon className="icon" name="receipt" type="solid"></box-icon>
                <span className='nav-item'>Expenses</span>
            </Link>
            <span className='tooltip'>Expenses</span>
            </li>
            
        </ul>
    </div>
    </div>

{/* Sidebar code ends here */}


    <div className='main-content'>
      <div className='container'>
      <Routes>
        <Route path='/loadboard' element={<Loadboard />}/>
        <Route path='/drivers' element={<Drivers />}/>

      {/* Table header */}
      {/* LoadBoard */}

      {/* TODO: get the table to dynamically adjust columns and fit without interfering with sidebar */}
      {/* TODO: Implement Drivers page with similar css */}
      {/* TODO: Implement Revenue Page, Expenses Page, Equipment Page, Pick/Drop */}
      {/* TODO: each table element should be clickable and should open up 
                For example: Loads clickable and open information about load and ability to edit*/}
                {/* All other pages should be clickable */}
                {/* Loads can be added and editted */}

      {/* TODO: Begin Backend Implementation */}

      </Routes>
        
      </div>
    </div>
    </div>
    </SidebarProvider>

    
      

  );
}

export default App;
