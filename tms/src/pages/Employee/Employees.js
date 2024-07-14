import React, { useEffect, useState } from 'react';
import TableComponent from '../../Components/Table/TableComponent';
import './Employees.css'
import AddEmployee from './AddEmployee'
import EditEmployee from './EditEmployee'
import { getEmployees } from '../../services/firebase';

// Loadboard.js uses TableComponent.js as the template for a table and passes in the correct columns
// as well as dummy data to display on the table.

// SidebarProvider is imported to get the active state of the sidebar, but it did not work as intended so feel free to delete.

const Employee = () => {
  // const { isActive } = useContext(SidebarContext);

  // const tableClass = isActive ? 'table active' : 'table';
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
      const ret_employees = await getEmployees();
      setEmployeeData(ret_employees)
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
    fetchData();
  }
  }, []);

  const [selectedRowData, setSelectedRowData] = useState(null);
  const [showAddEmployeePopup, setshowAddEmployeePopup] = useState(false);
  const handleCloseAddEmployeePopup = () => {
    setshowAddEmployeePopup(false);
  }

  const [showEditEmployeePopup, setshowEditEmployeePopup] = useState(false);
  const handleCloseEditEmployeePopup = () => {
    setshowEditEmployeePopup(false);
    setSelectedRowData(null);
  }

  const handleEditClick = (rowData) => {
    setSelectedRowData(rowData);
    setshowEditEmployeePopup(true);
  };

  const columns = [
    'No.', 'First Name', 'Last Name', 'Employee Type', 'Start Date', 'Quit Date', 'Status',
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
  console.log(employeeData);
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
    "Employee MC": "ACME123",
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
    "Employee MC": "GLOB456",
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
    "Employee MC": "GREEN789",
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
    "Employee MC": "SUNSH456",
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
        <h3>Employees</h3>
        <div>
          <button className='add-button' onClick={() => { setshowAddEmployeePopup(true) }} > <h5>Add Employee</h5> </button>
        </div>
      </div>
      <TableComponent title="Employees" data={employeeData} columns={columns} options={options} />
      {showAddEmployeePopup && <AddEmployee handleClosePopup={handleCloseAddEmployeePopup} />}
      {showEditEmployeePopup && <EditEmployee rowData={selectedRowData} handleClosePopup={handleCloseEditEmployeePopup} />}
    </div>
  );
};

export default Employee;