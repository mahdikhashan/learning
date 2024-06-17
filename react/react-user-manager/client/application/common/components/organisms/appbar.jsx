import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

import ProfileMenu from './profileMenu.jsx';

const AppBarStyled = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme }) => ({
  backgroundColor: 'white',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })
}));

const Appbar = () => {
  return (
    <>
      <AppBarStyled position="absolute" open={false}>
        <Toolbar
          variant="regular"
          sx={{
            minHeight: '80px'
          }}
        >
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, color: 'black', fontWeight: '900' }}
          >
            User Manager
          </Typography>
          <ProfileMenu />
        </Toolbar>
      </AppBarStyled>
    </>
  );
};

export default Appbar;
