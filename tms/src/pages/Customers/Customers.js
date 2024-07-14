import React, { useContext, useState } from 'react';
import TableComponent from '../../Components/Table/TableComponent';
import './Customers.css'
import AddCustomer from './AddCustomer'
import EditCustomer from './EditCustomer'

// Loadboard.js uses TableComponent.js as the template for a table and passes in the correct columns
// as well as dummy data to display on the table.

// SidebarProvider is imported to get the active state of the sidebar, but it did not work as intended so feel free to delete.

const Customer = () => {
  // const { isActive } = useContext(SidebarContext);

  // const tableClass = isActive ? 'table active' : 'table';
  //const [loadBoardData, setLoadBoardData] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [showAddCustomerPopup, setshowAddCustomerPopup] = useState(false);
  const handleCloseAddCustomerPopup = () => {
    setshowAddCustomerPopup(false);
  }

  const [showEditCustomerPopup, setshowEditCustomerPopup] = useState(false);
  const handleCloseEditCustomerPopup = () => {
    setshowEditCustomerPopup(false);
    setSelectedRowData(null);
  }

  const handleEditClick = (rowData) => {
    setSelectedRowData(rowData);
    setshowEditCustomerPopup(true);
  };

  const columns = [
    'No.', 'Company', 'Customer MC', 'Contact', 'Address', 'City', 'State',
     'Country', 'Avl. Credit', 'Sales Rep', 'Status',
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
    "Customer MC": "ACME123",
    Contact: "John Smith",
    Address: "123 Main St",
    City: "New York",
    State: "NY",
    Country: "USA",
    "Avl. Credit": 5000.00, // Available Credit
    "Sales Rep": "Jane Doe",
    Status: "Active"
  },
  {
    "No.": 2,
    Company: "Global Tech",
    "Customer MC": "GLOB456",
    Contact: "Jane Doe",
    Address: "456 Elm St",
    City: "Los Angeles",
    State: "CA",
    Country: "USA",
    "Avl. Credit": 2345.67,
    "Sales Rep": "John Smith",
    Status: "Active"
  },
  {
    "No.": 3,
    Company: "Green Solutions",
    "Customer MC": "GREEN789",
    Contact: "David Lee",
    Address: "789 Oak Ave",
    City: "Chicago",
    State: "IL",
    Country: "USA",
    "Avl. Credit": 10000.00,
    "Sales Rep": "Michael Chen",
    Status: "On Hold"
  },
  {
    "No.": 4,
    Company: "Sunshine Delivery",
    "Customer MC": "SUNSH456",
    Contact: "Maria Garcia",
    Address: "123 Main St", // Generic address repeated
    City: "Miami",
    State: "FL",
    Country: "USA",
    "Avl. Credit": 0.00,
    "Sales Rep": "Aisha Khan",
    Status: "Past Due"
  },
  {
    "No.": 5,
    Company: "Lone Star Express",
    "Contact": "William Johnson",
    Address: "567 Elm St", // Generic address repeated
    City: "Dallas",
    State: "TX",
    Country: "USA",
    "Avl. Credit": 3456.78,
    "Sales Rep": "Peter Schmidt",
    Status: "Active"
  },
  {
    "No.": 6,
    Company: "Pacific Coast Transport",
    "Contact": "Aisha Khan",
    Address: "89 Ocean View Blvd",
    City: "San Diego",
    State: "CA",
    Country: "USA",
    "Avl. Credit": 8790.32,
    "Sales Rep": "Michael Chen",
    Status: "Active"
  },
  {
    "No.": 7,
    Company: "Rocky Mountain Haulers",
    "Contact": "Peter Schmidt",
    Address: "34 Mountain View Ave",
    City: "Denver",
    State: "CO",
    Country: "USA",
    "Avl. Credit": 5234.78,
    "Sales Rep": "Jane Doe",
    Status: "Active"
  },
  {
    "No.": 8,
    Company: "North Wind Logistics",
    "Contact": "Peter Schmidt", // Kept for name variation
    Address: "567 Friedrichstrasse", // Removed non-US address, replaced with generic
    City: "Seattle", // Changed city to US location
    State: "WA",
    Country: "USA",
    "Avl. Credit": 1234.56,
    "Sales Rep": "John Smith",
    Status: "Active"
  }
];

  return (
    <div>
      <div className='loadboardHeader mb20' >
        <h3>Bill to Customers</h3>
        <div>
          <button className='add-button' onClick={() => { setshowAddCustomerPopup(true) }} > <h5>Add Customer</h5> </button>
        </div>
      </div>
      <TableComponent title="Bill to Customers" data={dummyData} columns={columns} options={options} />
      {showAddCustomerPopup && <AddCustomer handleClosePopup={handleCloseAddCustomerPopup} />}
      {showEditCustomerPopup && <EditCustomer rowData={selectedRowData} handleClosePopup={handleCloseEditCustomerPopup} />}
    </div>
  );
};

export default Customer;