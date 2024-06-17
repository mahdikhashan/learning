import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { useAccount } from '../../../../domain/account/index.js';

const AuthTemplate = () => {
  const { isLoggedIn } = useAccount();

  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh', width: '100vw' }}
        >
          <Outlet />
        </Grid>
      )}
    </>
  );
};

export default AuthTemplate;
