import { useQuery } from '@tanstack/react-query';
import * as fetchers from './fetchers';

export const useUserProfile = userHandle =>
  useQuery([userHandle], () => fetchers.getUserProfile(userHandle));

export const useUserRepos = ({ userHandle, shouldFetch }) =>
  useQuery([userHandle, 'repos'], () => fetchers.getUserRepos(userHandle), {
    enabled: shouldFetch,
  });

export const useUserFollowers = ({ userHandle, shouldFetch }) =>
  useQuery(
    [userHandle, 'followers'],
    () => fetchers.getUserFollowers(userHandle),
    { enabled: shouldFetch }
  );

export const useUserFollowing = ({ userHandle, shouldFetch }) =>
  useQuery(
    [userHandle, 'following'],
    () => fetchers.getUserFollowing(userHandle),
    { enabled: shouldFetch }
  );
