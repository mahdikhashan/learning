import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PeopleIcon from '@mui/icons-material/People';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MainListItems() {
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <List
        component="nav"
        sx={{
          p: 0
        }}>
        <ListItemButton
          onClick={(event) => {
            navigate('/');
            handleListItemClick(event, 0);
          }}
          selected={selectedIndex === 0}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton
          onClick={(event) => {
            navigate('/users');
            handleListItemClick(event, 1);
          }}
          selected={selectedIndex === 1}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItemButton>
        <ListItemButton
          onClick={(event) => {
            navigate('/profile');
            handleListItemClick(event, 2);
          }}
          selected={selectedIndex === 2}>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton
          onClick={(event) => {
            navigate('/settings');
            handleListItemClick(event, 3);
          }}
          selected={selectedIndex === 3}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </>
  );
}

export const secondaryListItems = (
  <>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </>
);
