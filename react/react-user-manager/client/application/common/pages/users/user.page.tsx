import { Tab, Tabs, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
// import { createTheme } from '@mui/material/styles';
// import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { User } from '../../../domain/users/user.js';
// import useUsers from '../../../domain/users/users.hook.js';
import { useUser } from '../../../services/userAdaptor';
// import CreateItem from './components/organisms/create.jsx';
// import Submenu from './components/organisms/submenu.jsx';
// import UsersTable from './components/organisms/userTable.jsx';
// import { User } from '../../../domain/users/user';
// import { User } from '../../../domain/users/user';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function UserPage() {
  // const { userByID } = useUsers();
  const { getUserById } = useUser();
  const [user, setUser] = useState<User>({
    firstName: '',
    age: 0,
    fullName: '',
    id: 0,
    lastName: ''
  });

  useEffect(() => {
    getUserById(3).then((user: User) => setUser(user));
  }, []);

  const { userID } = useParams();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ mb: '2rem' }}>
        <Helmet>
          <title> {`${user.firstName} ${user.lastName}`} | User Manager</title>
        </Helmet>
        <Paper
          elevation={0}
          variant="outlined"
          style={{ height: 'inherit', minHeight: 'fit', width: 'inherit', minWidth: '100%' }}
        >
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Item One" />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                size="small"
                value={userID}
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                value={user.fullName}
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                value={user.firstName}
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                value={user.lastName}
              />
              <TextField id="outlined-basic" variant="outlined" size="small" value={user.age} />
            </TabPanel>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default UserPage;
