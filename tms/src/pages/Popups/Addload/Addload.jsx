import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import Classes from "./Addload.module.css";

const Addload = ({ handleClosePopup }) => {
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
                        <div><h1>Add Load</h1></div>
                        <div>
                            <button className="add-button BGgreen" > <h5>Confirm</h5> </button>
                        </div>
                    </div>
                    <div>
                        <div className={Classes.form} >
                            <div className='mb5' ><h3>Customer Info</h3></div>
                            <div className={Classes.flexAlign2} >
                                <div>
                                    <label> <h5>Bill to customer</h5> </label>
                                    <select>
                                        <option>Option 1</option>
                                    </select>
                                </div>
                                <div>
                                    <label> <h5>Sales Rep</h5> </label>
                                    <select>
                                        <option>Option 1</option>
                                    </select>
                                </div>
                                <div>
                                    <label> <h5>Field 3</h5> </label>
                                    <input
                                        placeholder='John'
                                        name='first_name'
                                        type='text'
                                        onChange={changeValue}
                                    />
                                </div>
                                <div>
                                    <label> <h5>Field 4</h5> </label>
                                    <input
                                        placeholder='John'
                                        name='first_name'
                                        type='text'
                                        onChange={changeValue}
                                    />
                                </div>
                            </div>

                            <div className='mb5' ><h3>Additional Charges</h3></div>
                            <div className={Classes.flexAlign2} >
                                <div>
                                    <label> <h5>Bill to customer</h5> </label>
                                    <select>
                                        <option>Option 1</option>
                                    </select>
                                </div>
                                <div>
                                    <label> <h5>Sales Rep</h5> </label>
                                    <select>
                                        <option>Option 1</option>
                                    </select>
                                </div>
                                <div>
                                    <label> <h5>Field 3</h5> </label>
                                    <input
                                        placeholder='John'
                                        name='first_name'
                                        type='text'
                                        onChange={changeValue}
                                    />
                                </div>
                                <div>
                                    <label> <h5>Field 4</h5> </label>
                                    <input
                                        placeholder='John'
                                        name='first_name'
                                        type='text'
                                        onChange={changeValue}
                                    />
                                </div>
                            </div>

                            <div className='mb5' ><h3>Load Info</h3></div>
                            <div className={Classes.flexAlign2} >
                                <div>
                                    <label> <h5>Bill to customer</h5> </label>
                                    <select>
                                        <option>Option 1</option>
                                    </select>
                                </div>
                                <div>
                                    <label> <h5>Sales Rep</h5> </label>
                                    <select>
                                        <option>Option 1</option>
                                    </select>
                                </div>
                                <div>
                                    <label> <h5>Field 3</h5> </label>
                                    <input
                                        placeholder='John'
                                        name='first_name'
                                        type='text'
                                        onChange={changeValue}
                                    />
                                </div>
                                <div>
                                    <label> <h5>Field 4</h5> </label>
                                    <input
                                        placeholder='John'
                                        name='first_name'
                                        type='text'
                                        onChange={changeValue}
                                    />
                                </div>
                            </div>

                            <div className='mb5' ><h3>Pickups</h3></div>
                            <div className={Classes.flexAlign2} >
                                <div>
                                    <label> <h5>Bill to customer</h5> </label>
                                    <select>
                                        <option>Option 1</option>
                                    </select>
                                </div>
                                <div>
                                    <label> <h5>Sales Rep</h5> </label>
                                    <select>
                                        <option>Option 1</option>
                                    </select>
                                </div>
                                <div>
                                    <label> <h5>Field 3</h5> </label>
                                    <input
                                        placeholder='John'
                                        name='first_name'
                                        type='date'
                                        onChange={changeValue}
                                    />
                                </div>
                                <div>
                                    <label> <h5>Field 4</h5> </label>
                                    <input
                                        placeholder='John'
                                        name='first_name'
                                        type='date'
                                        onChange={changeValue}
                                    />
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
                    <div className={Classes.line_con} >
                        {/* <LineIcon /> */}
                    </div>
                </form>
            </div>
        </>
    );
};

export default Addload;
