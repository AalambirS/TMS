import React, { useContext, useState } from 'react';
import TableComponent from '../../Components/Table/TableComponent';
import './PickDrop.css'
import AddLocation from './AddLocation'
import EditLocation from './EditLocation'

// Loadboard.js uses TableComponent.js as the template for a table and passes in the correct columns
// as well as dummy data to display on the table.

// SidebarProvider is imported to get the active state of the sidebar, but it did not work as intended so feel free to delete.

const PickDrop = () => {
  // const { isActive } = useContext(SidebarContext);

  // const tableClass = isActive ? 'table active' : 'table';
  //const [loadBoardData, setLoadBoardData] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [showAddPickDropPopup, setshowAddPickDropPopup] = useState(false);
  const handleCloseAddPickDropPopup = () => {
    setshowAddPickDropPopup(false);
  }

  const [showEditPickDropPopup, setshowEditPickDropPopup] = useState(false);
  const handleCloseEditPickDropPopup = () => {
    setshowEditPickDropPopup(false);
    setSelectedRowData(null);
  }

  const handleEditClick = (rowData) => {
    setSelectedRowData(rowData);
    setshowEditPickDropPopup(true);
  };

  const columns = [
    'No.', 'Company', 'Contact', 'Address', 'City', 'State', 'Country', 'Status',
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
      "No.": 1,
      Company: "Acme Inc.",
      Contact: "John Smith",
      Address: "123 Main St",
      City: "New York",
      State: "NY",
      Country: "USA",
      Status: "Active",
      balance: 1000.25
    },
    {
      "No.": 2,
      Company: "Global Tech",
      Contact: "Jane Doe",
      Address: "456 Elm St",
      City: "Los Angeles",
      State: "CA",
      Country: "USA",
      Status: "Inactive",
      balance: -52.14
    },
    {
      "No.": 3,
      Company: "Green Solutions",
      Contact: "David Lee",
      Address: "789 Oak Ave",
      City: "Chicago",
      State: "IL",
      Country: "USA",
      Status: "Active",
      balance: 8790.32
    },
    {
      "No.": 4,
      Company: "Maple Leaf Logistics",
      Contact: "Sarah Dubois",
      Address: "145 Queen St",
      City: "Toronto",
      State: "ON",
      Country: "Canada",
      Status: "Active",
      balance: 0.00
    },
    {
      "No.": 5,
      Company: "Tokyo Enterprises",
      Contact: "Ken Watanabe",
      Address: "2-3-4 Shibuya",
      City: "Tokyo",
      State: "", // No state for Japan
      Country: "Japan",
      Status: "Pending",
      balance: 3456.78
    },
    {
      "No.": 6,
      Company: "Sunshine Delivery",
      Contact: "Maria Garcia",
      Address: "Avenida Brasil 123",
      City: "Rio de Janeiro",
      State: "RJ",
      Country: "Brazil",
      Status: "Active",
      balance: 213.90
    },
    {
      "No.": 7,
      Company: "Everest Climbers",
      Contact: "Alex Wang",
      Address: "147 Mountain Blvd",
      City: "Kathmandu",
      State: "", // No state for Nepal
      Country: "Nepal",
      Status: "Inactive",
      balance: -1234.56
    },
    {
      "No.": 8,
      Company: "Southern Stars",
      Contact: "Aisha Khan",
      Address: "34 Malik Road",
      City: "Melbourne",
      State: "VIC",
      Country: "Australia",
      Status: "Active",
      balance: 7894.12
    },
    {
      "No.": 9,
      Company: "North Wind Logistics",
      Contact: "Peter Schmidt",
      Address: "567 Friedrichstrasse",
      City: "Berlin",
      State: "", // No state for Germany
      Country: "Germany",
      Status: "Active",
      balance: 5432.09
    },
    {
      "No.": 10,
      Company: "WebTech Solutions",
      Contact: "Isabelle Dubois",
      Address: "89 Rue de la Gare",
      City: "Paris",
      State: "", // No state for France
      Country: "France",
      Status: "Active",
      balance: 987.65
    }
  ];

  return (
    <div>
      <div className='loadboardHeader mb20' >
        <h3>Pick Drop Locations</h3>
        <div>
          <button className='add-button' onClick={() => { setshowAddPickDropPopup(true) }} > <h5>Add Location</h5> </button>
        </div>
      </div>
      <TableComponent title="Pick Drop Locations" data={dummyData} columns={columns} options={options} />
      {showAddPickDropPopup && <AddLocation handleClosePopup={handleCloseAddPickDropPopup} />}
      {showEditPickDropPopup && <EditLocation rowData={selectedRowData} handleClosePopup={handleCloseEditPickDropPopup} />}
    </div>
  );
};

export default PickDrop;