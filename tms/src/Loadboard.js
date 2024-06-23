import React, { useContext } from 'react';
import TableComponent from './TableComponent';
import { SidebarProvider } from './SidebarContext';
import "./Loadboard.css"

// Loadboard.js uses TableComponent.js as the template for a table and passes in the correct columns
// as well as dummy data to display on the table.

// SidebarProvider is imported to get the active state of the sidebar, but it did not work as intended so feel free to delete.

const LoadBoard = () => {
  // const { isActive } = useContext(SidebarContext);

  // const tableClass = isActive ? 'table active' : 'table';
  //const [loadBoardData, setLoadBoardData] = useState([]);
  const columns = ["Load #", "Bill to Customer", "Carrier", "Truck", "Trailer",
    "Driver", "PU Date", "From", "To", "DLY Date", "Last Location", "Status", "Load Rep", "POD Date"];


  //   [key: 'id', title: 'ID'],
  //   [key: 'origin', title: 'Origin'],
  //   [key: 'destination', title: 'Destination'] },
  //   { key: 'equipmentType', title: 'Equipment Type' },
  //   { key: 'loadWeight', title: 'Load Weight (lbs)' },
  // ];"

  const options = {
    selectableRows: false, // Adjust as needed
    elevation: 4,
    rowsPerPage: 20,
    rowsPerPageOptions: [5, 10, 20, 40],
  };

  const dummyData = [
    [1, 'Los Angeles, CA', 'Chicago, IL', 'Dry Van', 10000, 'Kashmir Singh', '10/12/2024 \n @ 08:00AM', 'West Richland, WA'],
    [2, 'Miami, FL', 'New York, NY', 'Refrigerated Trailer', 15000],
    [3, 'Seattle, WA', 'Dallas, TX', 'Flatbed', 8000],
    [4, 'Houston, TX', 'Atlanta, GA', 'Enclosed Trailer', 12000],
    [5, 'San Francisco, CA', 'Denver, CO', 'Tanker', 20000]
  ];


  return (
    <SidebarProvider>
      <TableComponent title="LoadBoard" data={dummyData} columns={columns} options={options} />
    </SidebarProvider>

  );
};

export default LoadBoard;