import * as React from 'react';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export const RegisteredUser = () => {
  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Registered User
      </Typography>
      <Typography
        component="p"
        variant="h3"
        sx={{ display: 'flex', flex: '1', alignItems: 'center', justifyContent: 'center' }}
      >
        1200
      </Typography>
      <Typography color="text.secondary">on 15 March, 2019</Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View more
        </Link>
      </div>
    </>
  );
};
