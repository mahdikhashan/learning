import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const CreateItem = () => {
  return (
    <>
      <Paper
        elevation={0}
        variant="outlined"
        sx={{
          mb: '1rem',
          p: '0.1rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <p>No Pending Registration</p>
        <Button>Manage</Button>
      </Paper>
    </>
  );
};

export default CreateItem;
