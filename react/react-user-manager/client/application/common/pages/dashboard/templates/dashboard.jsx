import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useAccount } from '../../../../domain/account/index.js';
import Appbar from '../../../components/organisms/appbar.jsx';
import Footbar from '../../../components/organisms/footbar.jsx';
import MainListItems from './menu.jsx';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9)
        }
      })
    }
  })
);

const mdTheme = createTheme();

const DashboardTemplate = () => {
  const { signOutUser, isLoggedIn } = useAccount();
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ThemeProvider theme={mdTheme}>
        <Helmet>
          <title>Dashboard | User Manager</title>
        </Helmet>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Appbar />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
              display: 'flex',
              height: '100vh',
              width: '100vw',
              overflow: 'auto'
            }}>
            <Drawer
              variant="permanent"
              open={true}
              sx={{
                height: 'inherit',
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
              }}>
              <Toolbar />
              <MainListItems />
            </Drawer>
            <Box component="main" sx={{ overflow: 'auto', width: 'inherit' }}>
              <Toolbar />
              <Outlet />
              <Footbar />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

DashboardTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

export default DashboardTemplate;
