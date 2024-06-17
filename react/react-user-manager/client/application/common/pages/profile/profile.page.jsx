import Paper from '@mui/material/Paper';
import * as React from 'react';
import { Helmet } from 'react-helmet';

function ProfilePage() {
  return (
    <>
      <Helmet>
        <title>Profile | User Manager</title>
      </Helmet>
      <Paper>Profile</Paper>
    </>
  );
}

export default ProfilePage;
