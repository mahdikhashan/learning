import React from 'react';
import { SignUpPage } from './index.js';

const title = 'account/pages';

export default {
  title,
  component: SignUpPage,
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => <SignUpPage {...args} />;

export const SignUp = Template.bind({});
