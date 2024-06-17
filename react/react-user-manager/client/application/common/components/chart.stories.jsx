import React from 'react';
import Chart from './chart.jsx';
import { useTheme } from '@mui/material/styles';

const title = 'App/Chart';

export default {
  title,
  component: Chart,
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => <Chart {...args} />;

export const ChartBox = Template.bind({});
