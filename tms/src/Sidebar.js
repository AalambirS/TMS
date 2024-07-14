import React, { useState } from 'react';
import './Sidebar.css';
import "boxicons";
import { BoxIconElement } from 'boxicons';
import { Link } from 'react-router-dom';


function Sidebar() {
    const [isActive, setIsActive] = useState(false); // Initial state: false

    const handleClick = () => {
        setIsActive(!isActive); // Toggle active state
    };

    return (
        <div id="btn" className={`Sidebar ${isActive ? 'active' : ''}`}>
            <div className='top'>
                <div className='logo'>
                    <box-icon className="logo-icon" name="rocket"></box-icon>
                    <span> TMS</span>
                </div>

                <button id='btn' className='my-button' onClick={handleClick}>
                    <box-icon className='nav_box'
                        name="menu"></box-icon>
                </button>

            </div>
            <div className='user'>
                <img source="" alt="User" className='user-img' />
                <div>
                    <p className='bold'>Aalambir S.</p>
                </div>
            </div>

            <ul>
                {/* <li>
            <a to='#'>
                <box-icon className="icon" name="truck" type="solid"></box-icon>
                <span className='nav-item'>Dispatch</span>
            </a>
            <span className='tooltip'>Dispatch</span>
            </li> */}

                <li>
                    <Link to='/loadboard'>
                        <box-icon className="icon" name="truck" type="solid"></box-icon>
                        <span className='nav-item'>LoadBoard</span>
                    </Link>
                    <span className='tooltip'>LoadBoard</span>
                </li>

                <li>
                    <Link to='/locations'>
                        <box-icon className="icon" name="map-pin" type="solid"></box-icon>
                        <span className='nav-item'>Pick/Drop</span>
                    </Link>
                    <span className='tooltip'>Pick/Drop</span>
                </li>

                <li>
                    <Link to='/drivers'>
                        <box-icon className="icon" name="group" type="solid"></box-icon>
                        <span className='nav-item'>Drivers</span>
                    </Link>
                    <span className='tooltip'>Drivers</span>
                </li>

                <li>
                    <Link to='/customers'>
                        <box-icon className="icon" name="wallet" type="solid"></box-icon>
                        <span className='nav-item'>Bill to Customers</span>
                    </Link>
                    <span className='tooltip'>Bill to Customers</span>
                </li>

                <li>
                    <Link to='/equipment'>
                        <box-icon className="icon" name="factory" type="solid"></box-icon>
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
                        <box-icon className="icon" name="money" type="solid"></box-icon>
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
    )
}

function CustomLink({ to, children, ...props }) {
    const path = window.location.pathname;

    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>

        </li>
    )

}
export default Sidebar





