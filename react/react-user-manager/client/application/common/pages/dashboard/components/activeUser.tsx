import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import * as React from 'react';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export const ActiveUser = () => {
  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Active User
      </Typography>
      <Typography
        component="p"
        variant="h3"
        sx={{ display: 'flex', flex: '1', alignItems: 'center', justifyContent: 'center' }}
      >
        758
      </Typography>
      <Typography color="text.secondary">on 15 Jan, 2020</Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View more
        </Link>
      </div>
    </>
  );
};
