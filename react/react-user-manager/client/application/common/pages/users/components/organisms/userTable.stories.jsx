import React from 'react';
import UsersTable from './userTable.jsx';

const title = 'users/table';

export default {
  title,
  component: UsersTable,
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => <UsersTable {...args} />;

export const UserTable = Template.bind({});
