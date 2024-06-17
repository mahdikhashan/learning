import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

import ProfileMenu from './profileMenu.jsx';

const Footbar = () => {
  return (
    <>
      <Toolbar variant="regular" sx={{ Height: '80px' }}>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, color: 'black', fontWeight: '900' }}>
          User Manager
        </Typography>
        <link href="#">Privacy</link>
        <link href="#">Terms & Conditions</link>
      </Toolbar>
    </>
  );
};

export default Footbar;
