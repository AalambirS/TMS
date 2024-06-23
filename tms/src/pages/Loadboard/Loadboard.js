import React, { useContext, useState } from 'react';
import TableComponent from './TableComponent';
import { SidebarProvider } from '../../SidebarContext';
import "./Loadboard.css"
import Addload from '../Popups/Addload/Addload';
import Editload from '../Popups/Editload/Editload';

// Loadboard.js uses TableComponent.js as the template for a table and passes in the correct columns
// as well as dummy data to display on the table.

// SidebarProvider is imported to get the active state of the sidebar, but it did not work as intended so feel free to delete.

const LoadBoard = () => {
  // const { isActive } = useContext(SidebarContext);

  // const tableClass = isActive ? 'table active' : 'table';
  //const [loadBoardData, setLoadBoardData] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [showAddloadPopup, setshowAddloadPopup] = useState(false);
  const handleCloseAddloadPopup = () => {
    setshowAddloadPopup(false);
  }

  const [showEditloadPopup, setshowEditloadPopup] = useState(false);
  const handleCloseEditloadPopup = () => {
    setshowEditloadPopup(false);
    setSelectedRowData(null);
  }

  const handleEditClick = (rowData) => {
    setSelectedRowData(rowData);
    setshowEditloadPopup(true);
  };

  const columns = [
    "Load #", "Bill to Customer", "Carrier", "Truck", "Trailer",
    "Driver", "PU Date", "From", "To", "DLY Date", "Last Location",
    "Status", "Load Rep", "POD Date",
    {
      name: "Edit",
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <button className='add-button' onClick={() => handleEditClick(dummyData[tableMeta.rowIndex])}>
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
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20, 40],
  };

  const dummyData = [
    [1, 'ABC Logistics', 'QuickTrans', 'Truck-101', 'Trailer-A', 'Kashmir Singh', '10/12/2024 \n @ 08:00AM', 'Los Angeles, CA', 'Chicago, IL', '10/15/2024 \n @ 05:00PM', 'Salt Lake City, UT', 'In Transit', 'John Doe', '10/15/2024'],
    [2, 'XYZ Shipping', 'FastMove', 'Truck-102', 'Trailer-B', 'John Smith', '10/13/2024 \n @ 09:00AM', 'Miami, FL', 'New York, NY', '10/16/2024 \n @ 06:00PM', 'Atlanta, GA', 'Delivered', 'Jane Doe', '10/16/2024'],
    [3, 'DEF Transport', 'ShipQuick', 'Truck-103', 'Trailer-C', 'Michael Brown', '10/14/2024 \n @ 10:00AM', 'Seattle, WA', 'Dallas, TX', '10/17/2024 \n @ 07:00PM', 'Denver, CO', 'In Transit', 'Mike Ross', '10/17/2024'],
    [4, 'GHI Freight', 'SpeedyFreight', 'Truck-104', 'Trailer-D', 'Emma Wilson', '10/15/2024 \n @ 11:00AM', 'Houston, TX', 'Atlanta, GA', '10/18/2024 \n @ 08:00PM', 'New Orleans, LA', 'In Transit', 'Rachel Green', '10/18/2024'],
    [5, 'JKL Carriers', 'RapidTransit', 'Truck-105', 'Trailer-E', 'Liam Johnson', '10/16/2024 \n @ 12:00PM', 'San Francisco, CA', 'Denver, CO', '10/19/2024 \n @ 09:00PM', 'Salt Lake City, UT', 'In Transit', 'Monica Geller', '10/19/2024'],
    [6, 'MNO Logistics', 'QuickTrans', 'Truck-106', 'Trailer-F', 'Olivia Martinez', '10/17/2024 \n @ 01:00PM', 'Portland, OR', 'Las Vegas, NV', '10/20/2024 \n @ 10:00PM', 'Boise, ID', 'In Transit', 'Chandler Bing', '10/20/2024'],
    [7, 'PQR Shipping', 'FastMove', 'Truck-107', 'Trailer-G', 'James Davis', '10/18/2024 \n @ 02:00PM', 'San Diego, CA', 'Phoenix, AZ', '10/21/2024 \n @ 11:00PM', 'Yuma, AZ', 'In Transit', 'Joey Tribbiani', '10/21/2024'],
    [8, 'STU Transport', 'ShipQuick', 'Truck-108', 'Trailer-H', 'Isabella Garcia', '10/19/2024 \n @ 03:00PM', 'Las Vegas, NV', 'Salt Lake City, UT', '10/22/2024 \n @ 12:00AM', 'Reno, NV', 'In Transit', 'Phoebe Buffay', '10/22/2024'],
    [9, 'VWX Freight', 'SpeedyFreight', 'Truck-109', 'Trailer-I', 'Ethan Wilson', '10/20/2024 \n @ 04:00PM', 'Phoenix, AZ', 'Denver, CO', '10/23/2024 \n @ 01:00AM', 'Flagstaff, AZ', 'In Transit', 'Ross Geller', '10/23/2024'],
    [10, 'YZA Carriers', 'RapidTransit', 'Truck-110', 'Trailer-J', 'Sophia Lee', '10/21/2024 \n @ 05:00PM', 'Los Angeles, CA', 'San Francisco, CA', '10/24/2024 \n @ 02:00AM', 'Fresno, CA', 'In Transit', 'Ted Mosby', '10/24/2024'],
    [11, 'BCD Logistics', 'QuickTrans', 'Truck-111', 'Trailer-K', 'Mia Rodriguez', '10/22/2024 \n @ 06:00PM', 'San Francisco, CA', 'Seattle, WA', '10/25/2024 \n @ 03:00AM', 'Eugene, OR', 'In Transit', 'Barney Stinson', '10/25/2024'],
    [12, 'EFG Shipping', 'FastMove', 'Truck-112', 'Trailer-L', 'Noah Martinez', '10/23/2024 \n @ 07:00PM', 'Las Vegas, NV', 'Portland, OR', '10/26/2024 \n @ 04:00AM', 'Sacramento, CA', 'In Transit', 'Marshall Eriksen', '10/26/2024'],
    [13, 'HIJ Transport', 'ShipQuick', 'Truck-113', 'Trailer-M', 'Lily Brown', '10/24/2024 \n @ 08:00PM', 'Phoenix, AZ', 'Seattle, WA', '10/27/2024 \n @ 05:00AM', 'Boise, ID', 'In Transit', 'Robin Scherbatsky', '10/27/2024'],
    [14, 'KLM Freight', 'SpeedyFreight', 'Truck-114', 'Trailer-N', 'William Garcia', '10/25/2024 \n @ 09:00PM', 'San Diego, CA', 'Las Vegas, NV', '10/28/2024 \n @ 06:00AM', 'Yuma, AZ', 'In Transit', 'Barney Stinson', '10/28/2024'],
    [15, 'NOP Carriers', 'RapidTransit', 'Truck-115', 'Trailer-O', 'Ava Johnson', '10/26/2024 \n @ 10:00PM', 'Los Angeles, CA', 'Phoenix, AZ', '10/29/2024 \n @ 07:00AM', 'Riverside, CA', 'In Transit', 'Lily Aldrin', '10/29/2024'],
    [16, 'QRS Logistics', 'QuickTrans', 'Truck-116', 'Trailer-P', 'Liam Martinez', '10/27/2024 \n @ 11:00PM', 'San Francisco, CA', 'Denver, CO', '10/30/2024 \n @ 08:00AM', 'Salt Lake City, UT', 'In Transit', 'Ted Mosby', '10/30/2024'],
    [17, 'TUV Shipping', 'FastMove', 'Truck-117', 'Trailer-Q', 'Sophia Lee', '10/28/2024 \n @ 12:00AM', 'Seattle, WA', 'Las Vegas, NV', '10/31/2024 \n @ 09:00AM', 'Portland, OR', 'In Transit', 'Marshall Eriksen', '10/31/2024'],
    [18, 'WXY Transport', 'ShipQuick', 'Truck-118', 'Trailer-R', 'James Davis', '10/29/2024 \n @ 01:00AM', 'Houston, TX', 'Phoenix, AZ', '11/01/2024 \n @ 10:00AM', 'El Paso, TX', 'In Transit', 'Robin Scherbatsky', '11/01/2024'],
    [19, 'ZAB Freight', 'SpeedyFreight', 'Truck-119', 'Trailer-S', 'Olivia Garcia', '10/30/2024 \n @ 02:00AM', 'Miami, FL', 'San Diego, CA', '11/02/2024 \n @ 11:00AM', 'Houston, TX', 'In Transit', 'Barney Stinson', '11/02/2024'],
    [20, 'CDE Carriers', 'RapidTransit', 'Truck-120', 'Trailer-T', 'Ethan Wilson', '10/31/2024 \n @ 03:00AM', 'New York, NY', 'Denver, CO', '11/03/2024 \n @ 12:00PM', 'Kansas City, MO', 'In Transit', 'Lily Aldrin', '11/03/2024'],
    [21, 'FGH Logistics', 'QuickTrans', 'Truck-121', 'Trailer-U', 'Isabella Martinez', '11/01/2024 \n @ 04:00AM', 'Portland, OR', 'Los Angeles, CA', '11/04/2024 \n @ 01:00PM', 'San Francisco, CA', 'In Transit', 'Ted Mosby', '11/04/2024'],
    [22, 'IJK Shipping', 'FastMove', 'Truck-122', 'Trailer-V', 'Liam Brown', '11/02/2024 \n @ 05:00AM', 'San Diego, CA', 'New York, NY', '11/05/2024 \n @ 02:00PM', 'Dallas, TX', 'In Transit', 'Marshall Eriksen', '11/05/2024'],
    [23, 'LMN Transport', 'ShipQuick', 'Truck-123', 'Trailer-W', 'Sophia Wilson', '11/03/2024 \n @ 06:00AM', 'Seattle, WA', 'Chicago, IL', '11/06/2024 \n @ 03:00PM', 'Minneapolis, MN', 'In Transit', 'Robin Scherbatsky', '11/06/2024'],
    [24, 'OPQ Freight', 'SpeedyFreight', 'Truck-124', 'Trailer-X', 'James Johnson', '11/04/2024 \n @ 07:00AM', 'Houston, TX', 'Miami, FL', '11/07/2024 \n @ 04:00PM', 'New Orleans, LA', 'In Transit', 'Barney Stinson', '11/07/2024'],
    [25, 'RST Carriers', 'RapidTransit', 'Truck-125', 'Trailer-Y', 'Olivia Davis', '11/05/2024 \n @ 08:00AM', 'Los Angeles, CA', 'Denver, CO', '11/08/2024 \n @ 05:00PM', 'Salt Lake City, UT', 'In Transit', 'Lily Aldrin', '11/08/2024'],
    [26, 'UVW Logistics', 'QuickTrans', 'Truck-126', 'Trailer-Z', 'Ethan Lee', '11/06/2024 \n @ 09:00AM', 'Miami, FL', 'Chicago, IL', '11/09/2024 \n @ 06:00PM', 'Atlanta, GA', 'In Transit', 'Ted Mosby', '11/09/2024'],
    [27, 'XYZ Shipping', 'FastMove', 'Truck-127', 'Trailer-AA', 'Isabella Johnson', '11/07/2024 \n @ 10:00AM', 'Portland, OR', 'New York, NY', '11/10/2024 \n @ 07:00PM', 'Minneapolis, MN', 'In Transit', 'Marshall Eriksen', '11/10/2024'],
    [28, 'ABC Transport', 'ShipQuick', 'Truck-128', 'Trailer-BB', 'Liam Brown', '11/08/2024 \n @ 11:00AM', 'San Diego, CA', 'Miami, FL', '11/11/2024 \n @ 08:00PM', 'Houston, TX', 'In Transit', 'Robin Scherbatsky', '11/11/2024'],
    [29, 'DEF Freight', 'SpeedyFreight', 'Truck-129', 'Trailer-CC', 'Sophia Wilson', '11/09/2024 \n @ 12:00PM', 'Seattle, WA', 'Los Angeles, CA', '11/12/2024 \n @ 09:00PM', 'San Francisco, CA', 'In Transit', 'Barney Stinson', '11/12/2024'],
    [30, 'GHI Carriers', 'RapidTransit', 'Truck-130', 'Trailer-DD', 'James Davis', '11/10/2024 \n @ 01:00PM', 'Houston, TX', 'Denver, CO', '11/13/2024 \n @ 10:00PM', 'New Orleans, LA', 'In Transit', 'Lily Aldrin', '11/13/2024'],
  ];

  return (
    <div>
      <div className='loadboardHeader mb20' >
        <h3>Load Board</h3>
        <div>
          <button className='add-button' onClick={() => { setshowAddloadPopup(true) }} > <h5>Add Load</h5> </button>
        </div>
      </div>
      <TableComponent title="LoadBoard" data={dummyData} columns={columns} options={options} />
      {showAddloadPopup && <Addload handleClosePopup={handleCloseAddloadPopup} />}
      {showEditloadPopup && <Editload rowData={selectedRowData} handleClosePopup={handleCloseEditloadPopup} />}
    </div>
  );
};

export default LoadBoard;