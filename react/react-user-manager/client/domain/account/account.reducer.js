import { SIGNIN_USER, SIGNOUT_USER } from './account.actionType.js';
import Cookies from 'universal-cookie';
import produce from 'immer';
// import { loginByCredentials } from '@/domain/account/services/loginByCredentials.js';

const initialState = {
  is_loggedIn: false,
  token: null,
  user: {
    name: null,
    family: null,
    email: null
  }
};

const cookies = new Cookies();
const accessToken = 'mysecrettoken';

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_USER:
      return produce(state, (draftState) => {
        draftState.is_loggedIn = true;
        draftState.token = 'token';
      });

    case SIGNOUT_USER:
      cookies.remove('access_token');
      return produce(state, (draftState) => {
        draftState.is_loggedIn = false;
        draftState.token = null;
      });

    default:
      return state;
  }
};

export default accountReducer;
