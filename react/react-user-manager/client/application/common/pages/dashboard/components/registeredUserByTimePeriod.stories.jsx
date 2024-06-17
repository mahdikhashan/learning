import * as React from 'react';

import { RegisteredUserByTimePeriod } from './registeredUserByTimePeriod.tsx';

const title = 'App';

export default {
  title,
  component: RegisteredUserByTimePeriod,
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => <RegisteredUserByTimePeriod {...args} />;

export const RegisteredUserByTimePeriodChart = Template.bind({});
