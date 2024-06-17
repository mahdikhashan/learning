import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { createTheme } from '@mui/material/styles';
import { Helmet } from 'react-helmet';
import Paper from '@mui/material/Paper';
import CreateItem from './create.jsx';
import Box from '@mui/material/Box';
import Submenu from './submenu.jsx';
import Divider from '@mui/material/Divider';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'firstName', headerName: 'First name', width: 100 },
  { field: 'lastName', headerName: 'Last name', width: 100 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 100
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 100,
    valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`
  }
];

const UsersTable = ({ userList }) => {
  const navigate = useNavigate();

  const handleEvent = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details // GridCallbackDetails
  ) => {
    navigate(`/users/${params.row.id}`);
  };
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <DataGrid
          sx={{
            border: 0,
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main'
            }
          }}
          onRowClick={handleEvent}
          autoHeight
          rows={userList}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
};

export default UsersTable;
