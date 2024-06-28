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
                        <div><h2>Add Load</h2></div>
                        <div>
                            <button className="add-button BGgreen" > <h5>Confirm</h5> </button>
                        </div>
                    </div>
                    <div>
                        <div className={Classes.form} >
                            <div className={Classes.tableHeader} >
                                <h4>Customer Info</h4>
                                <h5>MC # -</h5>
                            </div>
                            <div className={Classes.tableBody} >
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Bill to customer</h5> </label>
                                        <select>
                                            <option>Arya Stak</option>
                                            <option>Jammy Lennister</option>
                                            <option>Cersie</option>
                                            <option>Tyrion Lennistor</option>
                                            <option>John Snow</option>
                                            <option>John Doe</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label> <h5>Sales Rep</h5> </label>
                                        <select>
                                            <option>John Snow</option>
                                            <option>Arya Stak</option>
                                            <option>Jammy Lennister</option>
                                            <option>Cersie</option>
                                            <option>Tyrion Lennistor</option>
                                            <option>John Doe</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label> <h5>Phone 1</h5> </label>
                                        <input
                                            placeholder='1-124-6549889'
                                            name='first_name'
                                            type='text'
                                            onChange={changeValue}
                                            disabled
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Ext</h5> </label>
                                        <input
                                            placeholder='Ext'
                                            name='first_name'
                                            type='text'
                                            onChange={changeValue}
                                            style={{width:'6rem'}}
                                        />
                                    </div>
                                </div>
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Customer Ref#</h5> </label>
                                        <input
                                            placeholder='Enter the text'
                                            name='customerRef'
                                            type='text'
                                            onChange={changeValue}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Rate - Name of BTC - Credit Balance </h5> </label>
                                        <input
                                            placeholder='Enter the text'
                                            name='first_name'
                                            type='text'
                                            onChange={changeValue}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Phone 2</h5> </label>
                                        <input
                                            placeholder='1-124-6549889'
                                            name='first_name'
                                            type='text'
                                            onChange={changeValue}
                                            disabled
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Ext</h5> </label>
                                        <input
                                            placeholder='Ext'
                                            name='first_name'
                                            type='text'
                                            onChange={changeValue}
                                            style={{width:'6rem'}}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={Classes.tableHeader} >
                                <h4>Additional Charges (To Customer)</h4>
                                <div>
                                    <div className="add-button-mini" > <h5>Add Amount</h5> </div>
                                </div>
                            </div>
                            <div className={Classes.tableBody} >
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Description</h5> </label>
                                        <select>
                                            <option>Flat rate</option>
                                            <option>Additional Pay</option>
                                            <option>Extra Stop</option>
                                            <option>Detention Pay</option>
                                            <option>Layover</option>
                                            <option>Lumper</option>
                                            <option>Re-Delivery</option>
                                            <option>Tonu</option>
                                            <option>Per Bin/Case</option>
                                            <option>Per Mile</option>
                                            <option>Load Rate (Less Dispatch)</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label> <h5>Rate</h5> </label>
                                        <input
                                            placeholder='0'
                                            name='rate'
                                            type='number'
                                            onChange={changeValue}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Quantity</h5> </label>
                                        <input
                                            placeholder='Enter the quantity'
                                            name='quantity'
                                            type='number'
                                            onChange={changeValue}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Total</h5> </label>
                                        <input
                                            placeholder='Enter the quantity'
                                            name='total'
                                            type='number'
                                            onChange={changeValue}
                                        />
                                    </div>
                                </div>
                                <div className="flexBetween" >
                                    <div>Total Additonal Charges: $_____</div>
                                    <div>Total Load Rate: $_____</div>
                                </div>
                            </div>
                            <div className={Classes.tableHeader} >
                                <h4>Load Info</h4>
                                <div>
                                </div>
                            </div>
                            <div className={Classes.tableBody} >
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Status</h5> </label>
                                        <select>
                                            <option>Pending</option>
                                            <option>Available</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label> <h5>Terminal</h5> </label>
                                        <input
                                            placeholder='T1'
                                            name='terminal'
                                            type='text'
                                            onChange={changeValue}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Terminal Type</h5> </label>
                                        <input
                                            defaultValue='Company'
                                            placeholder='Company'
                                            name='terminalType'
                                            type='text'
                                            onChange={changeValue}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Load Rep</h5> </label>
                                        <select>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label> <h5>Temp</h5> </label>
                                        <div className="flexAlign10" >
                                            <input
                                                placeholder='0'
                                                name='tempNum'
                                                type='number'
                                                style={{ width: '5.4rem' }}
                                                onChange={changeValue}
                                            />
                                            <select
                                                style={{ width: '9rem' }}
                                            >
                                                <option>Degrees Continuous</option>
                                                <option>Degrees Stop & Run</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Classes.tableHeader} >
                                <h4>Picks</h4>
                                <div>
                                    <div className="add-button-mini" > <h5>Add Pick</h5> </div>
                                </div>
                            </div>
                            <div className={Classes.tableBody} >
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Sequence</h5> </label>
                                        <select>
                                            <option>Pending</option>
                                            <option>Available</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Shipper</h5> </label>
                                        <input
                                            placeholder='T1'
                                            name='terminal'
                                            type='text'
                                            onChange={changeValue}
                                        />
                                    </div>
                                </div>
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>From</h5> </label>
                                        <div className="flexAlign5" >
                                            <input
                                                placeholder='Company'
                                                name='terminalType'
                                                type='date'
                                                onChange={changeValue}
                                                style={{ width: '9rem' }}
                                            />
                                            <input
                                                placeholder='Company'
                                                name='terminalType'
                                                type='time'
                                                onChange={changeValue}
                                                style={{ width: '5.5rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label> <h5>Entry 2</h5> </label>
                                        <div className="flexAlign5" >
                                            <input
                                                placeholder='Company'
                                                name='terminalType'
                                                type='date'
                                                onChange={changeValue}
                                                style={{ width: '9rem' }}
                                            />
                                            <input
                                                placeholder='Company'
                                                name='terminalType'
                                                type='time'
                                                onChange={changeValue}
                                                style={{ width: '5.5rem' }}
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>To</h5> </label>
                                        <div className="flexAlign5" >
                                            <input
                                                placeholder='Company'
                                                name='terminalType'
                                                type='date'
                                                onChange={changeValue}
                                                style={{ width: '9rem' }}
                                            />
                                            <input
                                                placeholder='Company'
                                                name='terminalType'
                                                type='time'
                                                onChange={changeValue}
                                                style={{ width: '5.5rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label> <h5>Entry 2</h5> </label>
                                        <div className="flexAlign5" >
                                            <input
                                                placeholder='Company'
                                                name='terminalType'
                                                type='date'
                                                onChange={changeValue}
                                                style={{ width: '9rem' }}
                                            />
                                            <input
                                                placeholder='Company'
                                                name='terminalType'
                                                type='time'
                                                onChange={changeValue}
                                                style={{ width: '5.5rem' }}
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Appointment</h5> </label>
                                        <textarea
                                            placeholder='Company'
                                            name='terminalType'
                                            type='text'
                                            onChange={changeValue}
                                            rows={5}
                                            style={{ width: '31rem' }}
                                        />
                                    </div>
                                </div>
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Weight</h5> </label>
                                        <input
                                            placeholder="0"
                                            name='terminalType'
                                            type='number'
                                            onChange={changeValue}
                                            style={{ width: '9.5rem' }}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Pieces</h5> </label>
                                        <input
                                            placeholder="0"
                                            name='terminalType'
                                            type='number'
                                            onChange={changeValue}
                                            style={{ width: '9.5rem' }}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Pickup number #</h5> </label>
                                        <input
                                            placeholder="0"
                                            name='terminalType'
                                            type='number'
                                            onChange={changeValue}
                                            style={{ width: '9.5rem' }}
                                        />
                                    </div>
                                </div>
                                <div className={Classes.tableHeader} >
                                    <h4>Commodities</h4>
                                    <div>
                                        <div className="add-button-mini" > <h5>Add Commodity</h5> </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={Classes.flexAlign2} >
                                        <div>
                                            <label> <h5>Description *</h5> </label>
                                            <input
                                                placeholder="Enter the description"
                                                name='terminalType'
                                                type='text'
                                                onChange={changeValue}
                                            />
                                        </div>
                                        <div>
                                            <label> <h5>Qty *</h5> </label>
                                            <input
                                                placeholder="0"
                                                name='terminalType'
                                                type='number'
                                                onChange={changeValue}
                                            />
                                        </div>
                                        <div>
                                            <label> <h5>Qty Type</h5> </label>
                                            <select>
                                                <option>Cs</option>
                                                <option>Plts</option>
                                                <option>Tload</option>
                                                <option>Boxes</option>
                                                <option>Bins</option>
                                                <option>Bags</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Classes.tableHeader} >
                                <h4>Drops</h4>
                                <div>
                                    <div className="add-button-mini" > <h5>Add Drop</h5> </div>
                                </div>
                            </div>
                            <div className={Classes.tableBody} >
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Sequence</h5> </label>
                                        <select>
                                            <option>Pending</option>
                                            <option>Available</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Shipper</h5> </label>
                                        <input
                                            placeholder='T1'
                                            name='terminal'
                                            type='text'
                                            onChange={changeValue}
                                        />
                                    </div>
                                </div>
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>From</h5> </label>
                                        <div className="flexAlign5" >
                                            <input
                                                placeholder='Company'
                                                name='terminalType'
                                                type='date'
                                                onChange={changeValue}
                                                style={{ width: '9rem' }}
                                            />
                                            <input
                                                placeholder='Company'
                                                name='terminalType'
                                                type='time'
                                                onChange={changeValue}
                                                style={{ width: '5.5rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label> <h5>Entry 2</h5> </label>
                                        <div className="flexAlign5" >
                                            <input
                                                placeholder='Company'
                                                name='terminalType'
                                                type='date'
                                                onChange={changeValue}
                                                style={{ width: '9rem' }}
                                            />
                                            <input
                                                placeholder='Company'
                                                name='terminalType'
                                                type='time'
                                                onChange={changeValue}
                                                style={{ width: '5.5rem' }}
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>To</h5> </label>
                                        <div className="flexAlign5" >
                                            <input
                                                placeholder='Company'
                                                name='terminalType'
                                                type='date'
                                                onChange={changeValue}
                                                style={{ width: '9rem' }}
                                            />
                                            <input
                                                placeholder='Company'
                                                name='terminalType'
                                                type='time'
                                                onChange={changeValue}
                                                style={{ width: '5.5rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label> <h5>Entry 2</h5> </label>
                                        <div className="flexAlign5" >
                                            <input
                                                placeholder='Company'
                                                name='terminalType'
                                                type='date'
                                                onChange={changeValue}
                                                style={{ width: '9rem' }}
                                            />
                                            <input
                                                placeholder='Company'
                                                name='terminalType'
                                                type='time'
                                                onChange={changeValue}
                                                style={{ width: '5.5rem' }}
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Appointment</h5> </label>
                                        <textarea
                                            placeholder='Company'
                                            name='terminalType'
                                            type='text'
                                            onChange={changeValue}
                                            rows={5}
                                            style={{ width: '31rem' }}
                                        />
                                    </div>
                                </div>
                                <div className={Classes.flexAlign2} >
                                    <div>
                                        <label> <h5>Weight</h5> </label>
                                        <input
                                            placeholder="0"
                                            name='terminalType'
                                            type='number'
                                            onChange={changeValue}
                                            style={{ width: '9.5rem' }}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Pieces</h5> </label>
                                        <input
                                            placeholder="0"
                                            name='terminalType'
                                            type='number'
                                            onChange={changeValue}
                                            style={{ width: '9.5rem' }}
                                        />
                                    </div>
                                    <div>
                                        <label> <h5>Pickup number #</h5> </label>
                                        <input
                                            placeholder="0"
                                            name='terminalType'
                                            type='number'
                                            onChange={changeValue}
                                            style={{ width: '9.5rem' }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={Classes.tableHeader} >
                                <h4>Negotiation</h4>
                                <div>
                                </div>
                            </div>
                            <div className={Classes.tableBody} >
                                <div>
                                    <label> <h5>Terminal</h5> </label>
                                    <textarea
                                        placeholder='Company'
                                        name='terminalType'
                                        type='text'
                                        onChange={changeValue}
                                        rows={5}
                                        style={{ width: '31rem' }}
                                    />
                                </div>
                                <div>
                                    <div className="flexAlign10" >
                                        <div className="flexAlign5" >
                                            <input
                                                type="checkbox"
                                                style={{ width: '1.2rem' }}
                                            />
                                            <h5>Must run temp on continuous</h5>
                                        </div>
                                        <div className="flexAlign5" >
                                            <input
                                                type="checkbox"
                                                style={{ width: '1.2rem' }}
                                            />
                                            <h5>Must obtain weight ticket after loaded</h5>
                                        </div>
                                    </div>
                                    <div className="flexAlign10" >
                                        <div>
                                            <label> <h5>Size</h5> </label>
                                            <input
                                                placeholder='0'
                                                name='tempNum'
                                                type='number'
                                                style={{ width: '5.4rem' }}
                                                onChange={changeValue}
                                            />
                                        </div>
                                        <div>
                                            <label> <h5>Equipment Type</h5> </label>
                                            <select
                                                style={{ width: '9rem' }}
                                            >
                                                <option>Reefer</option>
                                                <option>Dry van</option>
                                                <option>Either</option>
                                            </select>
                                        </div>
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

export default Addload;
