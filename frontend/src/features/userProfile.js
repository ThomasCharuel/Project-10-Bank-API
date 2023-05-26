import { createSlice } from '@reduxjs/toolkit';
import { getUserProfile, postUserProfile } from '../_services/Api.Service';
import { selectUserAuthToken } from './auth';

const initialState = {
  status: 'idle',
  data: null,
  error: null,
};

export const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    resetUserProfile: () => initialState,
    fetchUserProfileStarted: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    fetchUserProfileFailed: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    fetchUserProfileSuccess: (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
      state.error = null;
    },
  },
});

export const {
  resetUserProfile,
  fetchUserProfileStarted,
  fetchUserProfileFailed,
  fetchUserProfileSuccess,
} = userProfileSlice.actions;

export const fetchUserProfile = () => async (dispatch, getState) => {
  dispatch(fetchUserProfileStarted());
  try {
    const authToken = selectUserAuthToken(getState());
    const data = await getUserProfile(authToken);
    dispatch(fetchUserProfileSuccess(data.body));
  } catch (err) {
    dispatch(fetchUserProfileFailed(err.toString()));
  }
};

export const updateUserProfile = (firstName, lastName) => async (dispatch, getState) => {
  const authToken = selectUserAuthToken(getState());
  const data = await postUserProfile({ firstName, lastName }, authToken);
  dispatch(fetchUserProfileSuccess(data.body));
};

export const selectUserProfile = (state) => state.userProfile.data;
export const selectUserProfileStatus = (state) => state.userProfile.status;

export default userProfileSlice.reducer;
