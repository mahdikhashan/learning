import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';

const mdTheme = createTheme();

function NoMatch() {
  return (
    <ThemeProvider>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            404
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default NoMatch;
