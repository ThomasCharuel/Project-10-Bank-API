import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth';
import userProfileReducer from '../features/userProfile';
import userAccountsReducer from '../features/userAccounts';

export default configureStore({
  reducer: {
    auth: authReducer,
    userProfile: userProfileReducer,
    userAccounts: userAccountsReducer,
  },
});
