import Box from '@mui/material/Box';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import { AddUserForm } from './forms/createUser';

function AddUserPage() {
  return (
    <>
      <Box sx={{ mb: '2rem' }}>
        <Helmet>
          <title>Add User | User Manager</title>
        </Helmet>
        <AddUserForm />
      </Box>
    </>
  );
}

export default AddUserPage;
