import React, { useState } from 'react'
import Classes from './Sidebar.module.css'
import "boxicons";
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [activeNav, setactiveNav] = useState(1);

    const handleClick = (value) => {
        setactiveNav(value);
    }

    return (
        <div className={Classes.sidebar} >
            <div className={Classes.sidebarTop} >
                <div className='flexAlign5' >
                    <div>
                        <box-icon className="logo-icon" name="rocket"></box-icon>
                    </div>
                    <div>
                        <h3>TMS</h3>
                    </div>
                </div>
                <div>
                    <svg fill='black' height='20px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                </div>
            </div>
            <div className='mt10 mb20' >
                <h4>John Doe</h4>
            </div>
            <div className={Classes.navigationCon}>

                <Link to='/loadboard'
                    className={`${Classes.navItem} ${activeNav === 1 ? Classes.navActive : ''}`}
                    onClick={() => { handleClick(1) }}
                >
                    <box-icon className="icon" name="truck" type="solid"></box-icon>
                    <h5>LoadBoard</h5>
                </Link>

                <Link to='/locations'
                    className={`${Classes.navItem} ${activeNav === 2 ? Classes.navActive : ''}`}
                    onClick={() => { handleClick(2) }}
                >
                    <box-icon className="icon" name="map-pin" type="solid"></box-icon>
                    <h5>Pick/Drop</h5>
                </Link>

                <Link to='/drivers'
                    className={`${Classes.navItem} ${activeNav === 3 ? Classes.navActive : ''}`}
                    onClick={() => { handleClick(3) }}
                >
                    <box-icon className="icon" name="group" type="solid"></box-icon>
                    <h5>Drivers</h5>
                </Link>

                <Link to='/equipment'
                    className={`${Classes.navItem} ${activeNav === 4 ? Classes.navActive : ''}`}
                    onClick={() => { handleClick(4) }}
                >
                    <box-icon className="icon" name="factory" type="solid"></box-icon>
                    <h5>Equipment</h5>
                </Link>

                <Link to='/revenue'
                    className={`${Classes.navItem} ${activeNav === 5 ? Classes.navActive : ''}`}
                    onClick={() => { handleClick(5) }}
                >
                    <box-icon className="icon" name="money" type="solid"></box-icon>
                    <h5>Revenue</h5>
                </Link>

                <Link to='/expenses'
                    className={`${Classes.navItem} ${activeNav === 6 ? Classes.navActive : ''}`}
                    onClick={() => { handleClick(6) }}
                >
                    <box-icon className="icon" name="receipt" type="solid"></box-icon>
                    <h5>Expenses</h5>
                </Link>

            </div>
        </div>
    )
}
