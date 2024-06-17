import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { Outlet } from 'react-router-dom';

const mdTheme = createTheme();

const AuthTemplate = () => {
  return (
    <ThemeProvider theme={mdTheme}>
      <Container sx={{ height: 'inherit', pt: '2rem' }}>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default AuthTemplate;
