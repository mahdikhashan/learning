import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useNotifier } from '../../../../../services/notificationAdaptor';
import { useUser } from '../../../../../services/userAdaptor';

const Submenu = () => {
  const navigate = useNavigate();
  // const { editUser } = useUser();

  // const handleNewUser = () => {
  //   const resp = createUser({
  //     id: 100,
  //     firstName: 'mahdi',
  //     lastName: 'khashan',
  //     age: 12,
  //     fullName: 'Mahdi Khashan'
  //   });
  // };

  // const { notify } = useNotifier();

  const createNewUser = () => {
    // const { resp } = editUser({
    //   id: 3,
    //   age: 225,
    //   firstName: 'mahdi',
    //   lastName: 'martini zade',
    //   fullName: 'mahdi martini zade'
    // });
    // notify(resp);
    navigate('/users/add');
  };

  return (
    <>
      <Box
        sx={{
          mb: '1rem',
          p: '1rem 1rem 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box>
          <Button
            onClick={() => createNewUser()}
            sx={{ gap: 1 }}
            variant="contained"
            size="small"
            aria-label="add to shopping cart"
          >
            Add User
            <PersonAddAlt1Icon />
          </Button>
        </Box>
        <Button size="small" sx={{ gap: 1 }} disabled>
          Export
          <SaveIcon />
        </Button>
      </Box>
      <Divider sx={{ mt: 1 }} />
    </>
  );
};

export default Submenu;
