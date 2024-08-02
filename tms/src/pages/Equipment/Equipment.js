import React, { useState } from 'react'
import TableComponent from '../../Components/Table/TableComponent';
import './Equipment.css'
import AddEquipment from './AddEquipment';
import EditEquipment from './EditEquipment';


const Equipment = () => {
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [showAddEquipmentPopup, setshowAddEquipmentPopup] = useState(false);
  const [showEditEquipmentPopup, setshowEditEquipmentPopup] = useState(false);


  const handleCloseEditEquipmentPopup = () => {
    setshowEditEquipmentPopup(false);
    setSelectedRowData(null);
  }
   
  const handleCloseAddEquipmentPopup = () => {
    setshowAddEquipmentPopup(false);
  }

  const handleEditClick = (rowData) => {
    setSelectedRowData(rowData);
    setshowEditEquipmentPopup(true)
  };


  const columns = [
    "Type", "Unit Number", "Make", "Year", "Assigned Unit", "Assigned Driver", "Activity", "Last Location",
    "Terminal", "Status",
    {
      name: "Actions",
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <button className='add-button-mini' onClick={() => handleEditClick(dummyData[tableMeta.rowIndex])}>
              <h5>Edit</h5>
            </button>
          );
        }
      }
    }
  ];

  const options = {
    selectableRows: false, // Adjust as needed
    elevation: 4,
    rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 20, 40],
  };

  const dummyData = [
    {
        id: 1,
        Type: "Dry Van", // Trailer type
        "Unit Number": "TR1234",
        Make: "Wabash",
        Year: 2020,
        Length: 53, // Feet (optional for trailers)
        "Assigned Unit": "",
        "Assigned Driver": "",
        Activity: "Available",
        "Last Location": "Seattle Terminal",
        Terminal: "Seattle Terminal",
        Status: "Active",
        Actions: "..." // Placeholder for actions
      },
      {
        id: 2,
        Type: "Flatbed", // Trailer type
        "Unit Number": "TR5678",
        Make: "Great Dane",
        Year: 2018,
        Length: 48, // Feet (optional for trailers)
        "Assigned Unit": "Truck-123",
        "Assigned Driver": "John Doe",
        Activity: "In-transit",
        "Last Location": "Chicago Warehouse",
        Terminal: "",
        Status: "Active",
        Actions: "..."
      },
      {
        id: 3,
        Type: "Reefer", // Trailer type
        "Unit Number": "TR9012",
        Make: "Thermo King", // Trailer specific detail (optional)
        Year: 2022,
        Length: 53, // Feet (optional for trailers)
        TemperatureControl: "Yes", // Reefer specific detail (optional)
        "Assigned Unit": "",
        "Assigned Driver": "",
        Activity: "Available",
        "Last Location": "Seattle Terminal",
        Terminal: "Seattle Terminal",
        Status: "Active",
        Actions: "..."
      },
      {
        id: 4,
        Type: "Tractor", // Vehicle type
        "Unit Number": "TK3456",
        Make: "Kenworth",
        Year: 2019,
        Engine: "PACCAR MX-13", // Tractor specific detail (optional)
        Horsepower: 450, // Tractor specific detail (optional)
        "Assigned Unit": "TR5678",
        "Assigned Driver": "Jane Smith",
        Activity: "In-use",
        "Last Location": "Chicago Warehouse",
        Terminal: "",
        Status: "Active",
        Actions: "..."
      },
      {
        id: 5,
        Type: "Tractor", // Vehicle type
        "Unit Number": "TK9012",
        Make: "Volvo",
        Year: 2022,
        Engine: "Volvo D13", // Tractor specific detail (optional)
        Horsepower: 500, // Tractor specific detail (optional)
        "Assigned Unit": "",
        "Assigned Driver": "",
        Activity: "Available",
        "Last Location": "Seattle Terminal",
        Terminal: "Seattle Terminal",
        Status: "Active",
        Actions: "..."
      },
      {
        id: 1,
        Type: "Dry Van", // Trailer type
        "Unit Number": "TR1234",
        Make: "Wabash",
        Year: 2020,
        Length: 53, // Feet (optional for trailers)
        "Assigned Unit": "",
        "Assigned Driver": "",
        Activity: "Available",
        "Last Location": "Seattle Terminal",
        Terminal: "Seattle Terminal",
        Status: "Active",
        Actions: "..." // Placeholder for actions
      },
      {
        id: 2,
        Type: "Flatbed", // Trailer type
        "Unit Number": "TR5678",
        Make: "Great Dane",
        Year: 2018,
        Length: 48, // Feet (optional for trailers)
        "Assigned Unit": "Truck-123",
        "Assigned Driver": "John Doe",
        Activity: "In-transit",
        "Last Location": "Chicago Warehouse",
        Terminal: "",
        Status: "Active",
        Actions: "..."
      },
      {
        id: 3,
        Type: "Reefer", // Trailer type
        "Unit Number": "TR9012",
        Make: "Thermo King", // Trailer specific detail (optional)
        Year: 2022,
        Length: 53, // Feet (optional for trailers)
        TemperatureControl: "Yes", // Reefer specific detail (optional)
        "Assigned Unit": "",
        "Assigned Driver": "",
        Activity: "Available",
        "Last Location": "Seattle Terminal",
        Terminal: "Seattle Terminal",
        Status: "Active",
        Actions: "..."
      },
      {
        id: 4,
        Type: "Tractor", // Vehicle type
        "Unit Number": "TK3456",
        Make: "Kenworth",
        Year: 2019,
        Engine: "PACCAR MX-13", // Tractor specific detail (optional)
        Horsepower: 450, // Tractor specific detail (optional)
        "Assigned Unit": "TR5678",
        "Assigned Driver": "Jane Smith",
        Activity: "In-use",
        "Last Location": "Chicago Warehouse",
        Terminal: "",
        Status: "Active",
        Actions: "..."
      },
      {
        id: 5,
        Type: "Tractor", // Vehicle type
        "Unit Number": "TK9012",
        Make: "Volvo",
        Year: 2022,
        Engine: "Volvo D13", // Tractor specific detail (optional)
        Horsepower: 500, // Tractor specific detail (optional)
        "Assigned Unit": "",
        "Assigned Driver": "",
        Activity: "Available",
        "Last Location": "Seattle Terminal",
        Terminal: "Seattle Terminal",
        Status: "Active",
        Actions: "..."
      },
    ];
  return (
    <div>
      <div className='driversHeader mb20' >
        <h3>Equipment</h3>
        <div>
          <button className='add-button' onClick={() => { setshowAddEquipmentPopup(true) }} > <h5>Add Equipment</h5> </button>
        </div>
      </div>
      <TableComponent title="Equipment" data={dummyData} columns={columns} options={options} />
      {showAddEquipmentPopup && <AddEquipment handleClosePopup={handleCloseAddEquipmentPopup} />}
      {showEditEquipmentPopup && <EditEquipment rowData={selectedRowData} handleClosePopup={handleCloseEditEquipmentPopup} />}
    </div>
  )
}

export default Equipment
