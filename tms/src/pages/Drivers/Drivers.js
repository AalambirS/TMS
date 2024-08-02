import React, { useState } from 'react'
import TableComponent from '../../Components/Table/TableComponent';
import './Drivers.css'
import AddDriver from './AddDriver';
import EditDriver from './EditDriver';

const Drivers = () => {
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [showAddDriverPopup, setshowAddDriverPopup] = useState(false);
  const [showEditDriverPopup, setshowEditDriverPopup] = useState(false);


  const handleCloseEditDriverPopup = () => {
    setshowEditDriverPopup(false);
    setSelectedRowData(null);
  }
   
  const handleCloseAddDriverPopup = () => {
    setshowAddDriverPopup(false);
  }

  const handleEditClick = (rowData) => {
    setSelectedRowData(rowData);
    setshowEditDriverPopup(true)
  };


  const columns = [
    "First Name", "Last Name", "E. Code", "Driver Type", "Cell #",
     "Assigned Power Unit", "Activity", "Home City", 
     "Status", "Approved",
    {
      name: "Edit",
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
      "First Name": "Kashmir",
      "Last Name": "Singh",
      "E. Code": "KS",
      "Driver Type": "Solo",
      "Cell #": "510-000-9999",
      "Assigned Power Unit": "Trailer-A",
      "Activity": "En Route",
      "Home City": "Los Angeles, CA",
      "Status": "Active",
      "Approved": "Yes"
    },
    {
      "First Name": "A",
      "Last Name": "Singh",
      "E. Code": "AS",
      "Driver Type": "Team",
      "Cell #": "111-222-3333",
      "Assigned Power Unit": "Trailer-B",
      "Activity": "En Route",
      "Home City": "Miami, FL",
      "Status": "Active",
      "Approved": "Yes"
    },
    {
      "First Name": "Kashmir",
      "Last Name": "Singh",
      "E. Code": "KS",
      "Driver Type": "Solo",
      "Cell #": "510-000-9999",
      "Assigned Power Unit": "Trailer-A",
      "Activity": "En Route",
      "Home City": "Los Angeles, CA",
      "Status": "Active",
      "Approved": "Yes"
    },
    // ... other objects ...
    {
      "First Name": "A",
      "Last Name": "Singh",
      "E. Code": "KS",
      "Driver Type": "Solo",
      "Cell #": "510-000-9999",
      "Assigned Power Unit": "Trailer-A",
      "Activity": "En Route",
      "Home City": "Los Angeles, CA",
      "Status": "Active",
      "Approved": "Yes"
    },
    {
      "First Name": "Kashmir",
      "Last Name": "Singh",
      "E. Code": "AS",
      "Driver Type": "Team",
      "Cell #": "111-222-3333",
      "Assigned Power Unit": "Trailer-B",
      "Activity": "En Route",
      "Home City": "Miami, FL",
      "Status": "Active",
      "Approved": "Yes"
    },
    {
      "First Name": "A",
      "Last Name": "Singh",
      "E. Code": "KS",
      "Driver Type": "Solo",
      "Cell #": "510-000-9999",
      "Assigned Power Unit": "Trailer-A",
      "Activity": "En Route",
      "Home City": "Los Angeles, CA",
      "Status": "Active",
      "Approved": "Yes"
    }
  ];
  return (
    <div>
      <div className='driversHeader mb20' >
        <h3>Drivers</h3>
        <div>
          <button className='add-button' onClick={() => { setshowAddDriverPopup(true) }} > <h5>Add Driver</h5> </button>
        </div>
      </div>
      <TableComponent title="Drivers" data={dummyData} columns={columns} options={options} />
      {showAddDriverPopup && <AddDriver handleClosePopup={handleCloseAddDriverPopup} />}
      {showEditDriverPopup && <EditDriver rowData={selectedRowData} handleClosePopup={handleCloseEditDriverPopup} />}
    </div>
  )
}

export default Drivers
