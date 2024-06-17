import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { createTheme } from '@mui/material/styles';
import { Helmet } from 'react-helmet';
import Paper from '@mui/material/Paper';
import CreateItem from './components/organisms/create.jsx';
import Box from '@mui/material/Box';
import Submenu from './components/organisms/submenu.jsx';
// import Divider from '@mui/material/Divider';
import UsersTable from './components/organisms/userTable.jsx';
// import useUsers from '../../../domain/users/users.hook.js';
import { useUser } from '../../../services/userAdaptor';

function UserListPage() {
  const { userList } = useUser();

  return (
    <>
      <Box sx={{ mb: '2rem' }}>
        <Helmet>
          <title>Users | User Manager</title>
        </Helmet>
        <CreateItem />
        <Paper
          elevation={0}
          variant="outlined"
          style={{ height: 'inherit', minHeight: 'fit', width: 'inherit', minWidth: '100%' }}
        >
          <Submenu />
          <UsersTable userList={userList} />
        </Paper>
      </Box>
    </>
  );
}

export default UserListPage;
