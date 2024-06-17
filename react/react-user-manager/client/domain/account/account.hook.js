import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useMemo } from 'react';
import * as accountActions from './account.action.js';
// import useAPI from '@/hooks/use-api/index.mjs';

const useAccount = () => {
  const dispatch = useDispatch();
  // const { POST } = useAPI()

  const actions = useMemo(
    () => bindActionCreators({ ...accountActions }, dispatch),
    [accountActions, dispatch]
  );

  const account = useSelector((state) => state.account);

  // const loginByCredentials = (params) => {
  //   const [response] = POST({ url: '/users', params });
  //
  //   if (response.statusText === 'OK') {
  //     if (response.status === 201) {
  //       actions.signInUser(...params);
  //     }
  //   }
  // };

  return {
    signInUser: actions.signInUser,
    signOutUser: actions.signOutUser,
    isLoggedIn: account.is_loggedIn
    // loginByCredentials
  };
};

export default useAccount;
