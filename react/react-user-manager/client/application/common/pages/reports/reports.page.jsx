import * as React from 'react';
import Chart from '@/components/chart.jsx';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import { Helmet } from 'react-helmet';

function ReportsPage() {
  return (
    <>
      <Helmet>
        <title>Reports | User Manager</title>
      </Helmet>
      <Paper>
        <Chart />
      </Paper>
    </>
  );
}

export default ReportsPage;
