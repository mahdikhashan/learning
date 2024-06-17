import * as React from 'react';
import { useRoutes } from 'react-router-dom';

import NoMatch from './common/pages/404.page.jsx';
import { SignInPage } from './common/pages/account/signIn';
import HomePage from './common/pages/dashboard/home.page.js';
import DashboardTemplate from './common/pages/dashboard/templates/dashboard.jsx';
import { ProfilePage } from './common/pages/profile';
import { SettingAccountPage } from './common/pages/setting';
import AddUserPage from './common/pages/users/addUser.page.jsx';
import BaseTemplate from './common/pages/users/templates/base.jsx';
import UserPage from './common/pages/users/user.page.js';
import UserListPage from './common/pages/users/userList.page.jsx';

const Router = () => {
  return useRoutes([
    {
      element: <DashboardTemplate />,
      children: [
        {
          element: <BaseTemplate />,
          children: [{ path: '/', element: <HomePage /> }]
        },
        {
          element: <BaseTemplate />,
          children: [
            { path: '/users', element: <UserListPage /> },
            { path: '/users/add', element: <AddUserPage /> },
            { path: '/users/:userID', element: <UserPage /> },
            { path: '/profile', element: <ProfilePage /> },
            { path: '/settings/account', element: <SettingAccountPage /> }
          ]
        }
      ]
    },
    { path: '/signin', element: <SignInPage /> },
    { path: '*', element: <NoMatch /> }
  ]);
};

export default Router;
