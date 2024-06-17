import React from 'react';
import { SignInPage } from './index.js';

const title = 'account/pages';

export default {
  title,
  component: SignInPage,
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => <SignInPage {...args} />;

export const SignIn = Template.bind({});
