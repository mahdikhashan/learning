import { SIGNIN_USER, SIGNOUT_USER } from './account.actionType.js';

const signInUser = (username, password, remember = false) => {
  return { type: SIGNIN_USER, payload: { username, password, remember } };
};

const signOutUser = () => {
  return { type: SIGNOUT_USER };
};

export { signInUser, signOutUser };
