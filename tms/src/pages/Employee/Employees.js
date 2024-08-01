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
    'employeeNumber', 'firstName', 'lastName', 'employeeType', 'startDate', 'quitDate', 'status',
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

  const [dummyData, setDummyData] = useState([
    {
      "employeeNumber": 12345,
      "firstName": "John",
      "lastName": "Doe",
      "middleName": "Michael",
      "username": "john.doe",
      "dateOfBirth": "1985-01-23", // Assuming ISO 8601 date format for React.js
      "driverLicense": "ABC12345",
      "dlState": "CA",
      "companyEmail": "john.doe@greencompany.com",
      "personalEmail": "john.doe@example.com",
      "phoneNumber": 5551234567, // Assuming numeric phone number for React.js
      "cellNumber": 8885551212, // Assuming numeric cell number for React.js
      "employeeType": "Full-Time",
      "startDate": "2022-07-15", // Assuming ISO 8601 date format for React.js
      "quitDate": null,
      "reasonForQuitting": "",
      "country": "USA",
      "address": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "zip": 90210,
      "status": "Active",
      "comments": "This is a valuable employee!",
      "payType": "Salary",
      "taxType": "W-2",
      "pay": "Bi-Weekly" // Assuming predefined options for pay frequency
    },
    {
      "employeeNumber": 54321,
      "firstName": "Jane",
      "lastName": "Smith",
      "middleName": "Anne",
      "username": "jane.smith",
      "dateOfBirth": "1990-05-15", // Assuming ISO 8601 date format for React.js
      "driverLicense": "XYZ54321",
      "dlState": "NY",
      "companyEmail": "jane.smith@greencompany.com",
      "personalEmail": "jane.smith@example.com",
      "phoneNumber": 5559876543, // Assuming numeric phone number for React.js
      "cellNumber": 8889876543, // Assuming numeric cell number for React.js
      "employeeType": "Part-Time",
      "startDate": "2023-01-10", // Assuming ISO 8601 date format for React.js
      "quitDate": null,
      "reasonForQuitting": "",
      "country": "USA",
      "address": "456 Elm St",
      "city": "Othertown",
      "state": "NY",
      "zip": 54321,
      "status": "Active",
      "comments": "A dedicated employee!",
      "payType": "Hourly",
      "taxType": "W-2",
      "pay": "Weekly" // Assuming predefined options for pay frequency
    },
    // Add more objects as needed
]);
const updateEmployeeData = (updatedData) => {
  const updatedEmployees = dummyData.map((employee) => {
    if (employee.employeeNumber === updatedData.employeeNumber) {
      return { ...updatedData };
    }
    return employee;
  });
  setDummyData(updatedEmployees);
};

  return (
    <div>
      <div className='loadboardHeader mb20' >
        <h3>Employees</h3>
        <div>
          <button className='add-button' onClick={() => { setshowAddEmployeePopup(true) }} > <h5>Add Employee</h5> </button>
        </div>
      </div>
      <TableComponent title="Employees" data={dummyData} columns={columns} options={options} />
      {showAddEmployeePopup && <AddEmployee handleClosePopup={handleCloseAddEmployeePopup} />}
      {showEditEmployeePopup && <EditEmployee rowData={selectedRowData} updateEmployeeData={updateEmployeeData} handleClosePopup={handleCloseEditEmployeePopup} />}
    </div>
  );
};

export default Employee;