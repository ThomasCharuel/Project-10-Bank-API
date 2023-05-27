import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile, selectUserProfileStatus } from '../features/userProfile';
import { selectUserIsAuthenticated } from '../features/auth';

export const useGetOrFetchUserProfile = () => {
  const dispatch = useDispatch();
  const userProfileStatus = useSelector(selectUserProfileStatus);
  const isAuthenticated = useSelector(selectUserIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated && userProfileStatus === 'idle') {
      dispatch(fetchUserProfile());
    }
  }, [isAuthenticated, userProfileStatus, dispatch]);
};
