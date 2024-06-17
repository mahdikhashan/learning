import React from 'react';
import SignUpForm from './sign-up-form.jsx';

const title = 'account/forms';

export default {
  title,
  component: SignUpForm,
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => <SignUpForm {...args} />;

export const SignUp = Template.bind({});
