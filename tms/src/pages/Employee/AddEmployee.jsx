import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import Classes from "./AddEmployee.module.css";
import { addEmployeeToFirestore } from "../../services/firebase";

const AddEmployee = ({ handleClosePopup }) => {
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
        const newFormData = new FormData(e.target);
        await addEmployeeToFirestore(newFormData);
        handleClosePopup();
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
                        <div><h2>Add Employee / Agents</h2></div>
                        <div>
                            <button className="add-button BGgreen" > <h5>Confirm</h5> </button>
                        </div>
                    </div>
                    <div>
                        <div className={Classes.form} >
                            <div className={Classes.tableHeader} >
                                <h4>User Info</h4>
                            </div>
                            <div className={Classes.tableBody} >
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Employee Number</h5> </label>
                                        <input
                                            placeholder=''
                                            name='No.'
                                            type='text'
                                            onChange={changeValue}
                                            
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>First  Name *</h5> </label>
                                        <input
                                            placeholder='First Name'
                                            name='First Name'
                                            type='text'
                                            onChange={changeValue}
                                            
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Middle Name</h5> </label>
                                        <input
                                            placeholder='Middle Name'
                                            name='mid_name'
                                            type='text'
                                            onChange={changeValue}
                                            
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Last Name *</h5> </label>
                                        <input
                                            placeholder='Last Name'
                                            name='Last Name'
                                            type='text'
                                            onChange={changeValue}
                                            
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Username *</h5> </label>
                                        <input
                                            placeholder='username'
                                            name='Username'
                                            type='text'
                                            onChange={changeValue}
                                            
                                        />
                                    </div>
                                </div>
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Date of Birth*</h5> </label>
                                        <input
                                            placeholder='1-124-6549889'
                                            name='date_of_birth'
                                            type='date'
                                            onChange={changeValue}  
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>SSN</h5> </label>
                                        <input
                                            placeholder=''
                                            name='SSN'
                                            type='text'
                                            onChange={changeValue}
                                            style={{width:'6rem'}}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Driver's License #</h5> </label>
                                        <input
                                            placeholder=''
                                            name='license'
                                            type='text'
                                            onChange={changeValue}
                                            style={{width:'12rem'}}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>DL State Issued</h5> </label>
                                        <input
                                            placeholder=''
                                            name='license_state'
                                            type='text'
                                            onChange={changeValue}
                                            style={{width:'6rem'}}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Email (Company)</h5> </label>
                                        <input
                                            placeholder=''
                                            name='comp_email'
                                            type='text'
                                            onChange={changeValue}
                                            style={{width:'12rem'}}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Email (Personal)</h5> </label>
                                        <input
                                            placeholder=''
                                            name='personal_email'
                                            type='text'
                                            onChange={changeValue}
                                            style={{width:'12rem'}}
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
                                        <label> <h5>Employee Type</h5> </label>
                                        <select onChange={changeValue}>
                                            <option value="owner" name="Employee Type">Owner</option>
                                            <option value="employee" name="Employee Type">Company Employee</option>
                                            <option value="agent" name="Employee Type">Agent</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label> <h5>Start Date *</h5> </label>
                                        <input
                                            placeholder=''
                                            name='Start Date'
                                            type='date'
                                            onChange={changeValue}  
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Quit Date</h5> </label>
                                        <input
                                            placeholder=''
                                            name='Quit Date'
                                            type='date'
                                            onChange={changeValue}  
                                        />
                                    </div>
                                </div>
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Reason for Quitting?</h5> </label>
                                        <textarea
                                            placeholder=''
                                            name='quit_reason'
                                            type='text'
                                            onChange={changeValue}
                                            rows={3}
                                            style={{ width: '64rem' }}
                                        />
                                    </div>
                                </div>
                                <div className={Classes.flexAlign2}>
                                    <div>
                                        <label> <h5>Country</h5> </label>
                                        <input
                                            placeholder=''
                                            name='country'
                                            type='text'
                                            onChange={changeValue}
                                            style={{width: '6rem'}}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Address *</h5> </label>
                                        <input
                                            placeholder=''
                                            name='address'
                                            type='text'
                                            onChange={changeValue}
                                            style={{width: '12rem'}}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>City *</h5> </label>
                                        <input
                                            placeholder=''
                                            name='city'
                                            type='text'
                                            onChange={changeValue}
                                            style={{width: '6rem'}}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>State *</h5> </label>
                                        <input
                                            placeholder=''
                                            name='state'
                                            type='text'
                                            onChange={changeValue}
                                            style={{width: '8rem'}}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Zip *</h5> </label>
                                        <input
                                            placeholder=''
                                            name='zipcode'
                                            type='numeric'
                                            onChange={changeValue}
                                            style={{width: '6rem'}}
                                        />
                                    </div>
                                </div>
                                <div className={Classes.flexAlign2}>
                                    <div>
                                        <label> <h5>Status</h5> </label>
                                        <select onChange={changeValue}>
                                            <option value="active" name="Status">Active</option>
                                            <option value="inactive" name="Status">Inactive</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label> <h5>Comments</h5> </label>
                                        <textarea
                                            placeholder=''
                                            name='comments'
                                            type='text'
                                            onChange={changeValue}
                                            rows={3}
                                            style={{ width: '20rem' }}
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className={Classes.tableHeader} >
                                <h4>Emergency Contact</h4>
                                <div>
                                    <div className="add-button-mini" > <h5>+ Add Item</h5> </div>
                                </div>
                            </div>
                            <div className={Classes.tableBody} >
                                <div className={Classes.flexAlign2} >

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

export default AddEmployee;
