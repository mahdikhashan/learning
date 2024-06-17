import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import * as React from 'react';

import { ActiveUser } from './components/activeUser';
import { DateButtonGroup } from './components/dateButtonGroup';
// import { dateButtonGroup } from './dashboard/components/dateButtonGroup';
import { RegisteredUser } from './components/registeredUser';
import { RegisteredUserByTimePeriod } from './components/registeredUserByTimePeriod';
// import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

function HomePage() {
  return (
    <>
      <div style={{ height: 'inherit', width: '100%', minWidth: 'inherit' }}>
        <Box
          sx={{
            py: 2,
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Typography variant="h5" gutterBottom>
            Overview
          </Typography>
          <DateButtonGroup />
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item sx={{ flex: '1', display: 'flex', flexDirection: 'column', height: '180px' }}>
              <RegisteredUser />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ flex: '1', display: 'flex', flexDirection: 'column', height: '180px' }}>
              <ActiveUser />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ flex: '1', display: 'flex', flexDirection: 'column', height: '180px' }}>
              <ActiveUser />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <RegisteredUserByTimePeriod />
            </Item>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default HomePage;
