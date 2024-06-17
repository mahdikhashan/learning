import React from 'react';
import SignInForm from './sign-in-form.jsx';

const title = 'account/forms';

export default {
  title,
  component: SignInForm,
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => <SignInForm {...args} />;

export const SignIn = Template.bind({});
