import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import Classes from "./EditLocation.module.css";

const EditLocation = ({ handleClosePopup, rowData }) => {
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
                        <div><h2>Edit Location ({rowData['Company']})</h2></div>
                        <div>
                            <button className="add-button BGgreen" > <h5>Confirm</h5> </button>
                        </div>
                    </div>
                    <div>
                        <div className={Classes.form} >
                            <div className={Classes.tableHeader} >
                                <h4>Location Info</h4>
                            </div>
                            <div className={Classes.tableBody} >
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Company*</h5> </label>
                                        <input
                                            placeholder='Company Name'
                                            name='company_name'
                                            type='text'
                                            onChange={changeValue}
                                            
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Contact*</h5> </label>
                                        <input
                                            placeholder='Contact for Company'
                                            name='company_contact'
                                            type='text'
                                            onChange={changeValue}
                                            
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Phone Number (Primary)*</h5> </label>
                                        <input
                                            placeholder='1-124-6549889'
                                            name='primary_number'
                                            type='numeric'
                                            onChange={changeValue}
                                            
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Ext</h5> </label>
                                        <input
                                            placeholder='Ext.'
                                            name='primary_ext'
                                            type='numeric'
                                            onChange={changeValue}
                                            style={{width:'4rem'}}
                                        />
                                    </div>
                                </div>
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Phone (After Hours)*</h5> </label>
                                        <input
                                            placeholder='111-111-1111'
                                            name='after_hours'
                                            type='numeric'
                                            onChange={changeValue}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Ext</h5> </label>
                                        <input
                                            placeholder='Ext.'
                                            name='second_ext'
                                            type='numeric'
                                            onChange={changeValue}
                                            style={{width: '4rem'}}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Email</h5> </label>
                                        <input
                                            placeholder='Email Address'
                                            name='email'
                                            type='text'
                                            onChange={changeValue}
                                            //style={{width:'10rem'}}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Fax</h5> </label>
                                        <input 
                                            placeholder="111-222-3333"
                                            name='fax'
                                            type="numeric"
                                            onChange={changeValue}
                                        />
                                    </div>
                                </div>
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Address*</h5> </label>
                                        <input
                                            placeholder='Street Number and Name'
                                            name='address'
                                            type='text'
                                            onChange={changeValue}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>City*</h5> </label>
                                        <input
                                            placeholder='City'
                                            name='city'
                                            type='text'
                                            onChange={changeValue}
                                            style={{width: '8rem'}}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>State*</h5> </label>
                                        <input
                                            placeholder='State'
                                            name='state'
                                            type='text'
                                            onChange={changeValue}
                                            style={{width:'8rem'}}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Zip</h5> </label>
                                        <input 
                                            placeholder="00000"
                                            name="zip"
                                            type="numeric"
                                            onChange={changeValue}
                                            style={{width:'5rem'}}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Country</h5> </label>
                                        <input 
                                            placeholder="Country"
                                            name="country"
                                            type="text"
                                            onChange={changeValue}
                                            style={{width:'9rem'}}
                                        />
                                    </div>
                                </div>
                                <div className={Classes.flexAlign2}>
                                    <div>
                                        <label> <h5>Terminal</h5> </label>
                                        <select>
                                            <option>T1</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label> <h5>Status</h5> </label>
                                        <select>
                                            <option>Active</option>
                                            <option>Inactive</option>
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
                                <div className={Classes.flexAlign2}>
                                    <div>
                                        <label> <h5>Notes</h5> </label>
                                        <textarea
                                            placeholder='Notes'
                                            name='equipment_notes'
                                            type='text'
                                            onChange={changeValue}
                                            rows={3}
                                            style={{ width: '20rem' }}
                                        />
                                    </div>

                                    <div>
                                        <label> <h5>Blacklist</h5> </label>
                                        <select>
                                            <option>No</option>
                                            <option>Yes</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label> <h5>Reason for Blacklist</h5> </label>
                                        <textarea
                                            placeholder='Notes'
                                            name='blacklist_notes'
                                            type='text'
                                            onChange={changeValue}
                                            rows={3}
                                            style={{ width: '20rem' }}
                                        />
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

export default EditLocation;
