import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import Classes from "./AddCustomer.module.css";

const AddCustomer = ({ handleClosePopup }) => {
    const [formdata, setformdata] = useState({
        field1: '',
    });
    function changeValue(event) {
        const { name, value } = event.target;
        setformdata({
            ...formdata,
            [name]: value,
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    const handlePopupClick = (e) => {
        e.stopPropagation(); // Prevent the click event from reaching the popupBackground
    };
    const handleBackgroundClick = (e) => {
        e.stopPropagation(); // Prevent the click event from reaching the popupBackground
        handleClosePopup();
    };

    return (
        <>
            <div className={Classes.popupBackground} onClick={handleBackgroundClick}>
                <form onSubmit={handleSubmit} className={Classes.popup} onClick={handlePopupClick}>
                    <div className="flexBetween ml20 mr30" >
                        <div><h2>Add Bill To Customer</h2></div>
                        <div>
                            <button className="add-button BGgreen" > <h5>Confirm</h5> </button>
                        </div>
                    </div>
                    <div>
                        <div className={Classes.form} >
                            <div className={Classes.tableHeader} >
                                <h4>Driver Profile</h4>
                            </div>
                            <div className={Classes.tableBody} >
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>First  Name *</h5> </label>
                                        <input
                                            placeholder='1-124-6549889'
                                            name='first_name'
                                            type='text'
                                            onChange={changeValue}
                                            disabled
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Last Name *</h5> </label>
                                        <input
                                            placeholder='1-124-6549889'
                                            name='last_name'
                                            type='text'
                                            onChange={changeValue}
                                            disabled
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Date of Birth*</h5> </label>
                                        <input
                                            placeholder='1-124-6549889'
                                            name='date_of_birth'
                                            type='date'
                                            onChange={changeValue}
                                            disabled
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Employee Code</h5> </label>
                                        <input
                                            placeholder='e_code'
                                            name='Employee Code'
                                            type='text'
                                            onChange={changeValue}
                                            style={{width:'6rem'}}
                                        />
                                    </div>
                                </div>
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Cell Number*</h5> </label>
                                        <input
                                            placeholder='111-111-1111'
                                            name='cell_num'
                                            type='text'
                                            onChange={changeValue}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Phone Number</h5> </label>
                                        <input
                                            placeholder='1-124-6549889'
                                            name='phone_num'
                                            type='text'
                                            onChange={changeValue}
                                            disabled
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Email</h5> </label>
                                        <input
                                            placeholder='Email Address'
                                            name='email'
                                            type='text'
                                            onChange={changeValue}
                                            style={{width:'6rem'}}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Driver Type</h5> </label>
                                        <select>
                                            <option>Solo</option>
                                            <option>Team</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Driver SSN*</h5> </label>
                                        <input
                                            placeholder='Enter SSN'
                                            name='SSN'
                                            type='numeric'
                                            onChange={changeValue}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>CDL Number*</h5> </label>
                                        <input
                                            placeholder='Enter CDL Number'
                                            name='cdl_num'
                                            type='numeric'
                                            onChange={changeValue}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>CDL State</h5> </label>
                                        <input
                                            placeholder=''
                                            name='cdl_state'
                                            type='text'
                                            onChange={changeValue}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>CDL Type/Class*</h5> </label>
                                        <select>
                                            <option>A</option>
                                            <option>B</option>
                                            <option>C</option>
                                        </select>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className={Classes.subclass}>
                                <div className={Classes.flexAlign2} >
                                        <div>
                                            <label> <h5>Driver Ownership</h5> </label>
                                            <select>
                                                <option>Driver</option>
                                                <option>Company</option>
                                            </select>
                                        </div>

                                        <div>
                                        <label> <h5>Passport</h5> </label>
                                        <select>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                        </div>
                                    </div>
                                </div>

                                <hr></hr>
                                    <div className={Classes.subclass}>
                                    <div className={Classes.flexAlign2} >
                                        <div>
                                            <label> <h5>Address</h5> </label>
                                            <input
                                            placeholder='Street Number and Name'
                                            name='address'
                                            type='text'
                                            onChange={changeValue}
                                            style={{width:'12rem'}}
                                            />
                                        </div>

                                        <div>
                                            <label> <h5>City</h5> </label>
                                            <input
                                            placeholder='City'
                                            name='city'
                                            type='text'
                                            onChange={changeValue}
                                            style={{width:'8rem'}}
                                            />
                                        </div>
                                        <div>
                                            <label> <h5>State</h5> </label>
                                            <input
                                            placeholder='State'
                                            name='state'
                                            type='text'
                                            onChange={changeValue}
                                            style={{width:'6rem'}}
                                            />
                                        </div>
                                        <div>
                                            <label> <h5>Country</h5> </label>
                                            <input
                                            placeholder='Country'
                                            name='country'
                                            type='text'
                                            onChange={changeValue}
                                            style={{width:'6rem'}}
                                            />
                                        </div>
                                        <div>
                                            <label> <h5>Zipcode</h5> </label>
                                            <input
                                            placeholder='Zip'
                                            name='zipcode'
                                            type='text'
                                            onChange={changeValue}
                                            style={{width:'6rem'}}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className={Classes.subclass}>
                                    <div className={Classes.flexAlign2}>
                                        <div>
                                            <label> <h5>Status</h5> </label>
                                            <select>
                                                <option>Inactive</option>
                                                <option>Active</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label> <h5>Approved</h5> </label>
                                            <select>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={Classes.tableHeader} >
                                <h4>Driver Experience</h4>
                            </div>
                            <div className={Classes.tableBody} >
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>CDL Driver Since</h5> </label>
                                        <input
                                                placeholder='mm-dd-yy'
                                                name='cdl_since'
                                                type='date'
                                                onChange={changeValue}
                                                style={{ width: '9rem' }}
                                            />
                                    </div>
                                    <div>
                                        <label> <h5>CDL for YY/MM</h5> </label>
                                        <input
                                                placeholder='YY/MM'
                                                name='cdl_time'
                                                type='text'
                                                onChange={changeValue}
                                                style={{ width: '9rem' }}
                                            />
                                    </div>
                                    <div>
                                        <label> <h5>Driving School Name</h5> </label>
                                        <input
                                                placeholder='Enter School Name'
                                                name='school_name'
                                                type='text'
                                                onChange={changeValue}
                                                style={{ width: '9rem' }}
                                            />
                                    </div>
                                    <div>
                                        <label> <h5>Types of Equipment Operated</h5> </label>
                                        <textarea
                                            placeholder='Notes'
                                            name='equipment_notes'
                                            type='text'
                                            onChange={changeValue}
                                            rows={3}
                                            style={{ width: '15rem' }}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Experience Details</h5> </label>
                                        <textarea
                                            placeholder='Notes'
                                            name='experience_notes'
                                            type='text'
                                            onChange={changeValue}
                                            rows={3}
                                            style={{ width: '16rem' }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={Classes.tableHeader} >
                                <h4>Employment</h4>
                                <div>
                                </div>
                            </div>
                            <div className={Classes.tableBody} >
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Applied Date</h5> </label>
                                        <input
                                            placeholder='mm-dd-yy'
                                            name='applied_date'
                                            type='date'
                                            onChange={changeValue}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Hired Date</h5> </label>
                                        <input
                                            placeholder='mm-dd-yy'
                                            name='hire_date'
                                            type='date'
                                            onChange={changeValue}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Drive Test Date</h5> </label>
                                        <input
                                            placeholder='mm-dd-yy'
                                            name='test_date'
                                            type='date'
                                            onChange={changeValue}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Termination Date</h5> </label>
                                        <input
                                        placeholder="mm-dd-yy"
                                        name="termination"
                                        type="date"
                                        onChange={changeValue}
                                        />
                                    </div>
                                </div>
                                <div className={Classes.flexAlign2}>
                                    <div>
                                        <label> <h5>Rehireable</h5> </label>
                                        <div className="flexAlign10" >
                                            <select>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>  
                                        </div>
                                    </div>

                                    <div>
                                        <label><h5>Pre-Employment Drug Test Done</h5></label>
                                        <input
                                            placeholder="mm-dd-yy"
                                            name="pre_drug_test"
                                            type="date"
                                            onChange={changeValue}
                                        />
                                    </div>
                                    <div>
                                        <label><h5>Hiring Notes</h5></label>
                                        <textarea
                                            placeholder='Notes'
                                            name='hire_notes'
                                            type='text'
                                            onChange={changeValue}
                                            rows={3}
                                            style={{ width: '20rem' }}
                                        />
                                    </div>


                                </div>
                            </div>
                            <div className={Classes.tableHeader} >
                                <h4>Employment History</h4>
                                <div>
                                    <div className="add-button-mini" > <h5>+ Add Item</h5> </div>
                                </div>
                            </div>
                            <div className={Classes.tableBody} >
                                <div className={Classes.flexAlign2} >
                                    
                                </div>
                                <div className={Classes.flexAlign2} >
                                </div>
                                <div className={Classes.flexAlign2} >

                                </div>
                                <div className={Classes.flexAlign2} >
                                    <div>
        
                                    </div>

                                </div>
                            </div>
                            <div className={Classes.tableHeader} >
                                <h4>Safety</h4>
                            </div>
                            <div className={Classes.tableBody} >
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>CDL Expiration Date</h5> </label>
                                        <input
                                            placeholder="mm-dd-yy"
                                            name="cdl_expire"
                                            type="date"
                                            onChange={changeValue}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Medical Card Expiration Date</h5> </label>
                                        <input
                                            placeholder="mm-dd-yy"
                                            name="med_expire"
                                            type="date"
                                            onChange={changeValue}
                                        />
                                    </div>

                                    <div>
                                        <label> <h5>Hazmat Endorsement Expiration</h5> </label>
                                        <input
                                            placeholder="mm-dd-yy"
                                            name="hazmat_expire"
                                            type="date"
                                            onChange={changeValue}
                                        />
                                    </div>

                                    <div>
                                        <label> <h5>TWIC Card Expiration</h5> </label>
                                        <input
                                            placeholder="mm-dd-yy"
                                            name="twic_expire"
                                            type="date"
                                            onChange={changeValue}
                                        />
                                    </div>
                                </div>
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Last Road Test</h5> </label>
                                        <input
                                            placeholder='mm-dd-yy'
                                            name='road_test'
                                            type='date'
                                            onChange={changeValue}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Last Random Drug Test</h5> </label>
                                        <input
                                            placeholder="mm-dd-yy"
                                            name="rand_drug_test"
                                            type="date"
                                            onChange={changeValue}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Last Alcohol Test</h5> </label>
                                        <input
                                            placeholder="mm-dd-yy"
                                            name="alc_test"
                                            type="date"
                                            onChange={changeValue}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Pull Notice Date</h5> </label>
                                        <input
                                            placeholder="mm-dd-yy"
                                            name="pull_notice"
                                            type="date"
                                            onChange={changeValue}
                                        />
                                    </div>
                                </div>
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Notes</h5> </label>
                                        <textarea
                                            placeholder='Notes'
                                            name='safety_notes'
                                            type='text'
                                            onChange={changeValue}
                                            rows={5}
                                            style={{ width: '31rem' }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={Classes.tableHeader} >
                                <h4>Emergency Contacts</h4>
                                <div>
                                    <div className="add-button-mini" > <h5>+ Add Item</h5> </div>
                                </div>
                            </div>
                            <div className={Classes.tableBody} >
                                <div className={Classes.flexAlign2} >
                                    
                                </div>
                                <div className={Classes.flexAlign2} >
                                    
                                </div>
                                <div className={Classes.flexAlign2} >
                                    
                                </div>
                            </div>

                            <div className={Classes.tableHeader} >
                                <h4>Violations</h4>
                                <div>
                                    <div className="add-button-mini" > <h5>+ Add Item</h5> </div>
                                </div>
                            </div>
                            <div className={Classes.tableBody} >
                                <div className={Classes.flexAlign2} >
                                    
                                </div>
                                <div className={Classes.flexAlign2} >
                                    
                                </div>
                                <div className={Classes.flexAlign2} >
                                    
                                </div>
                            </div>

                            <div className={Classes.tableHeader} >
                                <h4>Driver Documents</h4>
                            </div>
                            <div className={Classes.tableBody}>
                                <div className={Classes.flexAlign2}>
                                    <div>
                                        <label> <h5>Checklist</h5> </label>
                                    </div>
                                </div>
                                <div className={Classes.flexAlign2}>
                                    <div>
                                        <label> <h5>Check All</h5> </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <svg
                        className={Classes.xMark}
                        onClick={handleClosePopup}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                    >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                    <div className={Classes.line_con} ></div>
                </form >
            </div >
        </>
    );
};

export default AddCustomer;
