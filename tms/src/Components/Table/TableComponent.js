import React, { useContext } from 'react';
import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SidebarContext } from '../../SidebarContext';


// TableComponent is a reuseable component that we can pass title, data, column names, and options to.
// This allows this single table component to be recycled and used for Drivers.js, Loadboard.js, etc.



const TableComponent = ({ title, data, columns, options }) => {

  const { isActive } = useContext(SidebarContext);

  const tableClass = isActive ? 'container active' : 'container';

  const getMuiTheme = () =>
    createTheme({
      typography: {
        fontFamily: 'Manrope',
        fontSize: 14,
      },
      palette: {
        background: {
          paper: '#2A2D34',
          default: 'white',
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
              padding: '8px 4px',
              // color: 'black'
            },
            body: {
              padding: '7px 15px',
              fontSize: 12,
              fontWeight: 500,
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
