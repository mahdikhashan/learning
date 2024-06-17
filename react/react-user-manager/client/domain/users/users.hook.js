import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useMemo } from 'react';
import * as usersActions from './users.action.js';

const useUsers = () => {
  const dispatch = useDispatch();
  const actions = useMemo(
    () => bindActionCreators({ ...usersActions }, dispatch),
    [usersActions, dispatch]
  );
  const users = useSelector((state) => state.users);
  const userByID = (ID) => users.find((user) => user.id === ID);

  return {
    signInUser: actions.signInUser,
    signOutUser: actions.signOutUser,
    userListData: users,
    userByID
  };
};

export default useUsers;
