import React, { useContext } from 'react';
import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SidebarContext } from './SidebarContext';


// TableComponent is a reuseable component that we can pass title, data, column names, and options to.
// This allows this single table component to be recycled and used for Drivers.js, Loadboard.js, etc.



const TableComponent = ({ title, data, columns, options }) => {

  const { isActive } = useContext(SidebarContext);

  const tableClass = isActive ? 'container active' : 'container';

  const getMuiTheme = () =>
    createTheme({
      typography: {
        fontFamily: 'Poppins',
        fontSize: 15
      },
      palette: {
        background: {
          paper: '#1e293b',
          default: '#0f172a',
        },
        mode: 'dark',
      },
      components: {
        MuiTableHead: { // Targets the table header
          styleOverrides: {
            root: { // Targets the root element of the header
              fontSize: 10, // Set header font size
            },
          },
        },
        MuiTableCell: {
          styleOverrides: {
            head: {
              padding: '10px 4px',
            },
            body: {
              padding: '7px 15px',
              fontSize: 12,
            },
          },
        },
      },
    });

  return (
    <div className={tableClass}>
      <div className='table'>
        <ThemeProvider theme={getMuiTheme}>
          <MUIDataTable
            title={title} // Replace with dynamic title if needed
            data={data}
            columns={columns}
            options={options}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default TableComponent;


// import React, { useState, useEffect } from 'react'
// import MUIDataTable from "mui-datatables"
// import "./TableComponent.css"
// import { createTheme, ThemeProvider } from "@mui/material/styles"


// const TableComponent = ({ data, columns, options }) => {


//   const getMuiTheme = () => createTheme({
//   typography: {
//     fontFamily: "Poppins",
//   },
//   palette: {
//     background: {
//       paper: "#1e293b",
//       default: "#0f172a"
//     },
//     mode: "dark",
//   },
//   components: {
//     MuiTableCell: {
//       styleOverrides: {
//         head: {
//           padding: "10px 4px",
//         },
//         body: {
//           padding: "7px 15px",
//         }
//       }
//     }
//   }
// })

//   return (
//     <div className='container'>
//       <div className='table'>
//         <ThemeProvider theme={getMuiTheme}>
//         <MUIDataTable
//           title={"Employee List"}
//           data={data}
//           columns={columns}
//           options={options}
//         />

//         </ThemeProvider>
//       </div>

//     </div>
//   )
// }

// export default TableComponent
