import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';

const mdTheme = createTheme();

const BaseTemplate = () => {
  return (
    <ThemeProvider theme={mdTheme}>
      <Container sx={{ height: 'inherit', pt: '2rem' }}>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default BaseTemplate;
