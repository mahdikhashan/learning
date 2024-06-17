import * as React from 'react';

import { RegisteredUser } from './registeredUser.tsx';

const title = 'App';

export default {
  title,
  component: RegisteredUser,
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => <RegisteredUser {...args} />;

export const RegisteredUserChart = Template.bind({});
