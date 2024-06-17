import { reducer as accountReducer } from '../../domain/account/index.js';
import { reducer as usersReducer } from '../../domain/users/index.js';
import { reducer as appReducer } from '../../application/index.js';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  account: accountReducer,
  users: usersReducer,
  app: appReducer
});

export default reducers;
