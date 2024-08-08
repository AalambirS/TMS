import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Classes from "./Addload.module.css";
import { addLoadToFirestore } from "../../../services/firebase";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Addload = ({ handleClosePopup }) => {
  const [formdata, setformdata] = useState({
    field1: "",
  });
  const [addAmount, setAddAmount] = useState([
    { description: "", rate: "", quantity: "", total: "" },
  ]);
  const [amount, setAmount] = useState(true);
  const [drop, setDrop] = useState(true);
  const [pick, setPick] = useState(true);
  const [commodities, setCommodities] = useState(true);

  const handleAddAmount = () => {
    setAddAmount([
      ...addAmount,
      { description: "", rate: "", quantity: "", total: "" },
    ]);
  };

  const handleChangeAddAmount = (index, e) => {
    const { name, value } = e.target;
    const newForms = addAmount.slice();
    newForms[index][name] = value;
    setAddAmount(newForms);
  };
  const handleDeleteAddAmount = (index) => {
    if (addAmount.length > 1) {
      const newForms = addAmount.slice();
      newForms.splice(index, 1);
      setAddAmount(newForms);
    }
  };
  const [picks, setPicks] = useState([
    {
      sequence: "Pending",
      shipper: "",
      fromDate: "",
      fromTime: "",
      toDate: "",
      toTime: "",
      appointment: "",
      weight: "",
      pieces: "",
      pickupNumber: "",
      commodities: [{ description: "", qty: "", qtyType: "" }],
    },
  ]);

  const handleAddPick = () => {
    setPicks([
      ...picks,
      {
        sequence: "Pending",
        shipper: "",
        fromDate: "",
        fromTime: "",
        toDate: "",
        toTime: "",
        appointment: "",
        weight: "",
        pieces: "",
        pickupNumber: "",
        commodities: [{ description: "", qty: "", qtyType: "" }],
      },
    ]);
  };

  const handlePickChange = (index, e) => {
    const { name, value } = e.target;
    const newPicks = picks.slice();
    newPicks[index][name] = value;
    setPicks(newPicks);
  };

  const handleDeletePick = (index) => {
    if (picks.length > 1) {
      const newPicks = picks.slice();
      newPicks.splice(index, 1);
      setPicks(newPicks);
    }
  };
  const [drops, setDrops] = useState([
    {
      sequence: "Pending",
      shipper: "",
      fromDate: "",
      fromTime: "",
      toDate: "",
      toTime: "",
      appointment: "",
      weight: "",
      pieces: "",
      pickupNumber: "",
    },
  ]);

  const handleAddDrop = () => {
    setDrops([
      ...drops,
      {
        sequence: "Pending",
        shipper: "",
        fromDate: "",
        fromTime: "",
        toDate: "",
        toTime: "",
        appointment: "",
        weight: "",
        pieces: "",
        pickupNumber: "",
      },
    ]);
  };

  const handleDropChange = (index, e) => {
    const { name, value } = e.target;
    const newDrops = drops.slice();
    newDrops[index][name] = value;
    setDrops(newDrops);
  };

  const handleDeleteDrop = (index) => {
    if (drops.length > 1) {
      const newDrops = drops.slice();
      newDrops.splice(index, 1);
      setDrops(newDrops);
    }
  };
  const handleAddCommodity = (pickIndex) => {
    const newPicks = picks.slice();
    newPicks[pickIndex].commodities.push({
      description: "",
      qty: "",
      qtyType: "",
    });
    setPicks(newPicks);
  };

  const handleCommodityChange = (pickIndex, commodityIndex, e) => {
    const { name, value } = e.target;
    const newPicks = picks.slice();
    newPicks[pickIndex].commodities[commodityIndex][name] = value;
    setPicks(newPicks);
  };

  const handleDeleteCommodity = (pickIndex, commodityIndex) => {
    const newPicks = picks.slice();
    newPicks[pickIndex].commodities.splice(commodityIndex, 1);
    setPicks(newPicks);
  };
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
    await addLoadToFirestore(newFormData);
  };
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
        <form
          onSubmit={handleSubmit}
          className={Classes.popup}
          onClick={handlePopupClick}
        >
          <div className="flexBetween ml20 mr30">
            <div>
              <h2>Add Load</h2>
            </div>
            <div>
              <button className="add-button BGgreen">
                {" "}
                <h5>Confirm</h5>{" "}
              </button>
            </div>
          </div>
          <div>
            <div className={Classes.form}>
              <div className={Classes.tableHeader}>
                <h4>Customer Info</h4>
                <h5>MC # -</h5>
              </div>
              <div className={Classes.tableBody}>
                <div className={Classes.flexAlign2}>
                  <div>
                    <label>
                      {" "}
                      <h5>Bill to customer</h5>{" "}
                    </label>
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
                    <label>
                      {" "}
                      <h5>Sales Rep</h5>{" "}
                    </label>
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
                    <label>
                      {" "}
                      <h5>Phone 1</h5>{" "}
                    </label>
                    <input
                      placeholder="1-124-6549889"
                      name="first_name"
                      type="text"
                      onChange={changeValue}
                    />
                  </div>
                  <div>
                    <label>
                      {" "}
                      <h5>Ext</h5>{" "}
                    </label>
                    <input
                      placeholder="Ext"
                      name="first_name"
                      type="text"
                      onChange={changeValue}
                      style={{ width: "6rem" }}
                    />
                  </div>
                </div>
                <div className={Classes.flexAlign2}>
                  <div>
                    <label>
                      {" "}
                      <h5>Customer Ref#</h5>{" "}
                    </label>
                    <input
                      placeholder="Enter the text"
                      name="customerRef"
                      type="text"
                      onChange={changeValue}
                    />
                  </div>
                  <div>
                    <label>
                      {" "}
                      <h5>Rate - Name of BTC - Credit Balance </h5>{" "}
                    </label>
                    <input
                      placeholder="Enter the text"
                      name="first_name"
                      type="text"
                      onChange={changeValue}
                    />
                  </div>
                  <div>
                    <label>
                      {" "}
                      <h5>Phone 2</h5>{" "}
                    </label>
                    <input
                      placeholder="1-124-6549889"
                      name="first_name"
                      type="text"
                      onChange={changeValue}
                    />
                  </div>
                  <div>
                    <label>
                      {" "}
                      <h5>Ext</h5>{" "}
                    </label>
                    <input
                      placeholder="Ext"
                      name="first_name"
                      type="text"
                      onChange={changeValue}
                      style={{ width: "6rem" }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className={Classes.tableHeader}>
                  <h4>Additional Charges (To Customer)</h4>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <div className="add-button-mini" onClick={handleAddAmount}>
                      <h5>Add Amount</h5>
                    </div>

                    {amount ? (
                      <IoIosArrowUp onClick={() => setAmount(!amount)} />
                    ) : (
                      <IoIosArrowDown onClick={() => setAmount(!amount)} />
                    )}
                  </div>
                </div>
                {amount &&
                  addAmount.map((form, index) => (
                    <div className={Classes.tableBody} key={index}>
                      <div className={Classes.flexAlign2}>
                        <div>
                          <label>
                            <h5>Description</h5>
                          </label>
                          <select
                            name="description"
                            value={form.description}
                            onChange={(e) => handleChangeAddAmount(index, e)}
                          >
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
                          <label>
                            <h5>Rate</h5>
                          </label>
                          <input
                            placeholder="0"
                            name="rate"
                            type="number"
                            value={form.rate}
                            onChange={(e) => handleChangeAddAmount(index, e)}
                          />
                        </div>
                        <div>
                          <label>
                            <h5>Quantity</h5>
                          </label>
                          <input
                            placeholder="Enter the quantity"
                            name="quantity"
                            type="number"
                            value={form.quantity}
                            onChange={(e) => handleChangeAddAmount(index, e)}
                          />
                        </div>
                        <div>
                          <label>
                            <h5>Total</h5>
                          </label>
                          <input
                            placeholder="Enter the quantity"
                            name="total"
                            type="number"
                            value={form.total}
                            onChange={(e) => handleChangeAddAmount(index, e)}
                          />
                        </div>
                        {addAmount.length > 1 && (
                          <div>
                            <button
                              onClick={() => handleDeleteAddAmount(index)}
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                <div className="flexBetween">
                  <div>Total Additional Charges: $_____</div>
                  <div>Total Load Rate: $_____</div>
                </div>
              </div>
              <div className={Classes.tableHeader}>
                <h4>Load Info</h4>
                <div></div>
              </div>
              <div className={Classes.tableBody}>
                <div className={Classes.flexAlign2}>
                  <div>
                    <label>
                      {" "}
                      <h5>Status</h5>{" "}
                    </label>
                    <select>
                      <option>Pending</option>
                      <option>Available</option>
                    </select>
                  </div>
                  <div>
                    <label>
                      {" "}
                      <h5>Terminal</h5>{" "}
                    </label>
                    <input
                      placeholder="T1"
                      name="terminal"
                      type="text"
                      onChange={changeValue}
                    />
                  </div>
                  <div>
                    <label>
                      {" "}
                      <h5>Terminal Type</h5>{" "}
                    </label>
                    <input
                      defaultValue="Company"
                      placeholder="Company"
                      name="terminalType"
                      type="text"
                      onChange={changeValue}
                    />
                  </div>
                  <div>
                    <label>
                      {" "}
                      <h5>Load Rep</h5>{" "}
                    </label>
                    <select>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                  </div>
                  <div>
                    <label>
                      {" "}
                      <h5>Temp</h5>{" "}
                    </label>
                    <div className="flexAlign10">
                      <input
                        placeholder="0"
                        name="tempNum"
                        type="number"
                        style={{ width: "5.4rem" }}
                        onChange={changeValue}
                      />
                      <select style={{ width: "9rem" }}>
                        <option>Degrees Continuous</option>
                        <option>Degrees Stop & Run</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className={Classes.tableHeader}>
                  <h4>Picks</h4>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <div onClick={handleAddPick} className="add-button-mini">
                      <h5>Add Pick</h5>
                    </div>
                    {pick ? (
                      <IoIosArrowUp onClick={() => setPick(!pick)} />
                    ) : (
                      <IoIosArrowDown onClick={() => setPick(!pick)} />
                    )}
                  </div>
                </div>
                {pick &&
                  picks.map((pick, index) => (
                    <div className={Classes.tableBody} key={index}>
                      <div className={Classes.flexAlign2}>
                        <div>
                          <label>
                            <h5>Sequence</h5>
                          </label>
                          <select
                            name="sequence"
                            value={pick.sequence}
                            onChange={(e) => handlePickChange(index, e)}
                          >
                            <option>Pending</option>
                            <option>Available</option>
                          </select>
                        </div>
                      </div>
                      <div className={Classes.flexAlign2}>
                        <div>
                          <label>
                            <h5>Shipper</h5>
                          </label>
                          <input
                            placeholder="T1"
                            name="shipper"
                            type="text"
                            value={pick.shipper}
                            onChange={(e) => handlePickChange(index, e)}
                          />
                        </div>
                      </div>
                      <div className={Classes.flexAlign2}>
                        <div>
                          <label>
                            <h5>From</h5>
                          </label>
                          <div className="flexAlign5">
                            <input
                              name="fromDate"
                              type="date"
                              value={pick.fromDate}
                              onChange={(e) => handlePickChange(index, e)}
                              style={{ width: "9rem" }}
                            />
                            <input
                              name="fromTime"
                              type="time"
                              value={pick.fromTime}
                              onChange={(e) => handlePickChange(index, e)}
                              style={{ width: "5.5rem" }}
                            />
                          </div>
                        </div>
                        <div>
                          <label>
                            <h5>Entry 2</h5>
                          </label>
                          <div className="flexAlign5">
                            <input
                              name="entry2Date"
                              type="date"
                              value={pick.entry2Date}
                              onChange={(e) => handlePickChange(index, e)}
                              style={{ width: "9rem" }}
                            />
                            <input
                              name="entry2Time"
                              type="time"
                              value={pick.entry2Time}
                              onChange={(e) => handlePickChange(index, e)}
                              style={{ width: "5.5rem" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className={Classes.flexAlign2}>
                        <div>
                          <label>
                            <h5>To</h5>
                          </label>
                          <div className="flexAlign5">
                            <input
                              name="toDate"
                              type="date"
                              value={pick.toDate}
                              onChange={(e) => handlePickChange(index, e)}
                              style={{ width: "9rem" }}
                            />
                            <input
                              name="toTime"
                              type="time"
                              value={pick.toTime}
                              onChange={(e) => handlePickChange(index, e)}
                              style={{ width: "5.5rem" }}
                            />
                          </div>
                        </div>
                        <div>
                          <label>
                            <h5>Entry 2</h5>
                          </label>
                          <div className="flexAlign5">
                            <input
                              name="entry2Date"
                              type="date"
                              value={pick.entry2Date}
                              onChange={(e) => handlePickChange(index, e)}
                              style={{ width: "9rem" }}
                            />
                            <input
                              name="entry2Time"
                              type="time"
                              value={pick.entry2Time}
                              onChange={(e) => handlePickChange(index, e)}
                              style={{ width: "5.5rem" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className={Classes.flexAlign2}>
                        <div>
                          <label>
                            <h5>Appointment</h5>
                          </label>
                          <textarea
                            placeholder="Company"
                            name="appointment"
                            type="text"
                            value={pick.appointment}
                            onChange={(e) => handlePickChange(index, e)}
                            rows={5}
                            style={{ width: "31rem" }}
                          />
                        </div>
                      </div>
                      <div className={Classes.flexAlign2}>
                        <div>
                          <label>
                            <h5>Weight</h5>
                          </label>
                          <input
                            placeholder="0"
                            name="weight"
                            type="number"
                            value={pick.weight}
                            onChange={(e) => handlePickChange(index, e)}
                            style={{ width: "9.5rem" }}
                          />
                        </div>
                        <div>
                          <label>
                            <h5>Pieces</h5>
                          </label>
                          <input
                            placeholder="0"
                            name="pieces"
                            type="number"
                            value={pick.pieces}
                            onChange={(e) => handlePickChange(index, e)}
                            style={{ width: "9.5rem" }}
                          />
                        </div>
                        <div>
                          <label>
                            <h5>Pickup number #</h5>
                          </label>
                          <input
                            placeholder="0"
                            name="pickupNumber"
                            type="number"
                            value={pick.pickupNumber}
                            onChange={(e) => handlePickChange(index, e)}
                            style={{ width: "9.5rem" }}
                          />
                        </div>
                      </div>
                      <div className={Classes.tableHeader}>
                        <h4>Commodities</h4>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                          }}
                        >
                          <div
                            onClick={() => handleAddCommodity(index)}
                            className="add-button-mini"
                          >
                            <h5>Add Commodity</h5>
                          </div>
                          {commodities ? (
                            <IoIosArrowUp
                              onClick={() => setCommodities(!commodities)}
                            />
                          ) : (
                            <IoIosArrowDown
                              onClick={() => setCommodities(!commodities)}
                            />
                          )}
                        </div>
                      </div>
                      <div>
                        {commodities &&
                          pick.commodities.map((commodity, cIndex) => (
                            <div className={Classes.flexAlign2} key={cIndex}>
                              <div>
                                <label>
                                  <h5>Description *</h5>
                                </label>
                                <input
                                  placeholder="Enter the description"
                                  name="description"
                                  type="text"
                                  value={commodity.description}
                                  onChange={(e) =>
                                    handleCommodityChange(index, cIndex, e)
                                  }
                                />
                              </div>
                              <div>
                                <label>
                                  <h5>Qty *</h5>
                                </label>
                                <input
                                  placeholder="0"
                                  name="qty"
                                  type="number"
                                  value={commodity.qty}
                                  onChange={(e) =>
                                    handleCommodityChange(index, cIndex, e)
                                  }
                                />
                              </div>
                              <div>
                                <label>
                                  <h5>Qty Type</h5>
                                </label>
                                <select
                                  name="qtyType"
                                  value={commodity.qtyType}
                                  onChange={(e) =>
                                    handleCommodityChange(index, cIndex, e)
                                  }
                                >
                                  <option>Cs</option>
                                  <option>Plts</option>
                                  <option>Tload</option>
                                  <option>Boxes</option>
                                  <option>Bins</option>
                                  <option>Bags</option>
                                  <option>Other</option>
                                </select>
                              </div>
                              {pick.commodities.length > 1 && (
                                <div>
                                  <button
                                    onClick={() =>
                                      handleDeleteCommodity(index, cIndex)
                                    }
                                  >
                                    Delete
                                  </button>
                                </div>
                              )}
                            </div>
                          ))}
                      </div>
                      {picks.length > 1 && (
                        <button onClick={() => handleDeletePick(index)}>
                          Delete Pick
                        </button>
                      )}
                    </div>
                  ))}
              </div>

              <div>
                <div className={Classes.tableHeader}>
                  <h4>Drops</h4>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <div onClick={handleAddDrop} className="add-button-mini">
                      <h5>Add Drop</h5>
                    </div>
                    {drop ? (
                      <IoIosArrowUp onClick={() => setDrop(!drop)} />
                    ) : (
                      <IoIosArrowDown onClick={() => setDrop(!drop)} />
                    )}
                  </div>
                </div>
                {drop &&
                  drops.map((drop, index) => (
                    <div className={Classes.tableBody} key={index}>
                      <div className={Classes.flexAlign2}>
                        <div>
                          <label>
                            <h5>Sequence</h5>
                          </label>
                          <select
                            name="sequence"
                            value={drop.sequence}
                            onChange={(e) => handleDropChange(index, e)}
                          >
                            <option>Pending</option>
                            <option>Available</option>
                          </select>
                        </div>
                      </div>
                      <div className={Classes.flexAlign2}>
                        <div>
                          <label>
                            <h5>Shipper</h5>
                          </label>
                          <input
                            placeholder="T1"
                            name="shipper"
                            type="text"
                            value={drop.shipper}
                            onChange={(e) => handleDropChange(index, e)}
                          />
                        </div>
                      </div>
                      <div className={Classes.flexAlign2}>
                        <div>
                          <label>
                            <h5>From</h5>
                          </label>
                          <div className="flexAlign5">
                            <input
                              name="fromDate"
                              type="date"
                              value={drop.fromDate}
                              onChange={(e) => handleDropChange(index, e)}
                              style={{ width: "9rem" }}
                            />
                            <input
                              name="fromTime"
                              type="time"
                              value={drop.fromTime}
                              onChange={(e) => handleDropChange(index, e)}
                              style={{ width: "5.5rem" }}
                            />
                          </div>
                        </div>
                        <div>
                          <label>
                            <h5>Entry 2</h5>
                          </label>
                          <div className="flexAlign5">
                            <input
                              name="entry2Date"
                              type="date"
                              value={drop.entry2Date}
                              onChange={(e) => handleDropChange(index, e)}
                              style={{ width: "9rem" }}
                            />
                            <input
                              name="entry2Time"
                              type="time"
                              value={drop.entry2Time}
                              onChange={(e) => handleDropChange(index, e)}
                              style={{ width: "5.5rem" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className={Classes.flexAlign2}>
                        <div>
                          <label>
                            <h5>To</h5>
                          </label>
                          <div className="flexAlign5">
                            <input
                              name="toDate"
                              type="date"
                              value={drop.toDate}
                              onChange={(e) => handleDropChange(index, e)}
                              style={{ width: "9rem" }}
                            />
                            <input
                              name="toTime"
                              type="time"
                              value={drop.toTime}
                              onChange={(e) => handleDropChange(index, e)}
                              style={{ width: "5.5rem" }}
                            />
                          </div>
                        </div>
                        <div>
                          <label>
                            <h5>Entry 2</h5>
                          </label>
                          <div className="flexAlign5">
                            <input
                              name="entry2Date"
                              type="date"
                              value={drop.entry2Date}
                              onChange={(e) => handleDropChange(index, e)}
                              style={{ width: "9rem" }}
                            />
                            <input
                              name="entry2Time"
                              type="time"
                              value={drop.entry2Time}
                              onChange={(e) => handleDropChange(index, e)}
                              style={{ width: "5.5rem" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className={Classes.flexAlign2}>
                        <div>
                          <label>
                            <h5>Appointment</h5>
                          </label>
                          <textarea
                            placeholder="Company"
                            name="appointment"
                            type="text"
                            value={drop.appointment}
                            onChange={(e) => handleDropChange(index, e)}
                            rows={5}
                            style={{ width: "31rem" }}
                          />
                        </div>
                      </div>
                      <div className={Classes.flexAlign2}>
                        <div>
                          <label>
                            <h5>Weight</h5>
                          </label>
                          <input
                            placeholder="0"
                            name="weight"
                            type="number"
                            value={drop.weight}
                            onChange={(e) => handleDropChange(index, e)}
                            style={{ width: "9.5rem" }}
                          />
                        </div>
                        <div>
                          <label>
                            <h5>Pieces</h5>
                          </label>
                          <input
                            placeholder="0"
                            name="pieces"
                            type="number"
                            value={drop.pieces}
                            onChange={(e) => handleDropChange(index, e)}
                            style={{ width: "9.5rem" }}
                          />
                        </div>
                        <div>
                          <label>
                            <h5>Pickup number #</h5>
                          </label>
                          <input
                            placeholder="0"
                            name="pickupNumber"
                            type="number"
                            value={drop.pickupNumber}
                            onChange={(e) => handleDropChange(index, e)}
                            style={{ width: "9.5rem" }}
                          />
                        </div>
                      </div>
                      {drops.length > 1 && (
                        <button onClick={() => handleDeleteDrop(index)}>
                          Delete Drop
                        </button>
                      )}
                    </div>
                  ))}
              </div>
              <div className={Classes.tableHeader} style={{marginTop:"20px"}}>
                <h4>Negotiation</h4>
                <div></div>
              </div>
              <div className={Classes.tableBody}>
                <div>
                  <label>
                    {" "}
                    <h5>Terminal</h5>{" "}
                  </label>
                  <textarea
                    placeholder="Company"
                    name="terminalType"
                    type="text"
                    onChange={changeValue}
                    rows={5}
                    style={{ width: "31rem" }}
                  />
                </div>
                <div>
                  <div className="flexAlign10">
                    <div className="flexAlign5">
                      <input type="checkbox" style={{ width: "1.2rem" }} />
                      <h5>Must run temp on continuous</h5>
                    </div>
                    <div className="flexAlign5">
                      <input type="checkbox" style={{ width: "1.2rem" }} />
                      <h5>Must obtain weight ticket after loaded</h5>
                    </div>
                  </div>
                  <div className="flexAlign10">
                    <div>
                      <label>
                        {" "}
                        <h5>Size</h5>{" "}
                      </label>
                      <input
                        placeholder="0"
                        name="tempNum"
                        type="number"
                        style={{ width: "5.4rem" }}
                        onChange={changeValue}
                      />
                    </div>
                    <div>
                      <label>
                        {" "}
                        <h5>Equipment Type</h5>{" "}
                      </label>
                      <select style={{ width: "9rem" }}>
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
          <div className={Classes.line_con}></div>
        </form>
      </div>
    </>
  );
};

export default Addload;
