import { Box } from '@mui/material';
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const DateButtonGroup = () => {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="web">Today</ToggleButton>
          <ToggleButton value="android">Week</ToggleButton>
          <ToggleButton value="ios">Month</ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </>
  );
};
