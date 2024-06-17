import React from 'react';
import Paper from '@mui/material/Paper';
import Deposits from './deposits.jsx';

const title = 'App/Deposits';

export default {
  title,
  component: Deposits,
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => {
  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        height: 240
      }}
    >
      <Deposits {...args} />
    </Paper>
  );
};

export const DepositsBox = Template.bind({});
