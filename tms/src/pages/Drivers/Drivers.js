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
    "Name", "E. Code", "Driver Type", "Cell #",
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
    ['K Singh', 'KS', 'Solo', '510-000-9999', 'Trailer-A', 'En Route', 'Los Angeles, CA', 'Active', 'Yes'],
    ['A Singh', 'AS', 'Team', '111-222-3333','Trailer-B', 'En Route',  'Miami, FL', 'Active', 'Yes'],
    ['K Singh', 'KS', 'Solo', '510-000-9999', 'Trailer-A', 'En Route', 'Los Angeles, CA', 'Active', 'Yes'],
    ['A Singh', 'AS', 'Team', '111-222-3333','Trailer-B', 'En Route',  'Miami, FL', 'Active', 'Yes'],
    ['K Singh', 'KS', 'Solo', '510-000-9999', 'Trailer-A', 'En Route', 'Los Angeles, CA', 'Active', 'Yes'],
    ['A Singh', 'AS', 'Team', '111-222-3333','Trailer-B', 'En Route',  'Miami, FL', 'Active', 'Yes'],
    ['K Singh', 'KS', 'Solo', '510-000-9999', 'Trailer-A', 'En Route', 'Los Angeles, CA', 'Active', 'Yes'],
    ['A Singh', 'AS', 'Team', '111-222-3333','Trailer-B', 'En Route',  'Miami, FL', 'Active', 'Yes'],
    ['K Singh', 'KS', 'Solo', '510-000-9999', 'Trailer-A', 'En Route', 'Los Angeles, CA', 'Active', 'Yes'],
    ['A Singh', 'AS', 'Team', '111-222-3333','Trailer-B', 'En Route',  'Miami, FL', 'Active', 'Yes'],
    ['K Singh', 'KS', 'Solo', '510-000-9999', 'Trailer-A', 'En Route', 'Los Angeles, CA', 'Active', 'Yes'],
    ['A Singh', 'AS', 'Team', '111-222-3333','Trailer-B', 'En Route',  'Miami, FL', 'Active', 'Yes'],
    ['K Singh', 'KS', 'Solo', '510-000-9999', 'Trailer-A', 'En Route', 'Los Angeles, CA', 'Active', 'Yes'],
    ['A Singh', 'AS', 'Team', '111-222-3333','Trailer-B', 'En Route',  'Miami, FL', 'Active', 'Yes']
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
