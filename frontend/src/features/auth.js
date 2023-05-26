import { createSlice } from '@reduxjs/toolkit';
import { signIn } from '../_services/Api.Service';
import { resetUserProfile } from './userProfile';

const initialState = {
  status: 'idle',
  isAuthenticated: false,
  jwt: null,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthentication: () => initialState,
    authenticationStarted: (state) => {
      state.status = 'loading';
    },
    authenticationFailed: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    authenticationSuccess: (state, action) => {
      state.status = 'succeeded';
      state.isAuthenticated = true;
      state.jwt = action.payload;
      state.error = null;
    },
  },
});

export const {
  authenticationStarted,
  authenticationFailed,
  authenticationSuccess,
  resetAuthentication,
} = authSlice.actions;

export const login = (email, password, persist) => async (dispatch) => {
  dispatch(authenticationStarted());
  try {
    const data = await signIn(email, password);
    const authToken = data.body.token;
    if (persist) {
      console.log(persist);
    }
    dispatch(authenticationSuccess(authToken));
  } catch (err) {
    dispatch(authenticationFailed(err.toString()));
  }
};

export const logout = () => (dispatch) => {
  dispatch(resetAuthentication());
  dispatch(resetUserProfile());
};

export const selectUserIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUserAuthToken = (state) => state.auth.jwt;
export const selectAuthError = (state) => state.auth.error;

export default authSlice.reducer;
