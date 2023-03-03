import { useQuery } from '@tanstack/react-query';
import * as fetchers from './fetchers';

export const useUserProfile = userHandle =>
  useQuery([userHandle], () => fetchers.getUserProfile(userHandle));

export const useUserRepos = userHandle =>
  useQuery([userHandle, 'repos'], () => fetchers.getUserRepos(userHandle));

export const useUserFollowers = userHandle =>
  useQuery([userHandle, 'followers'], () =>
    fetchers.getUserFollowers(userHandle)
  );

export const useUserFollowing = userHandle =>
  useQuery([userHandle, 'following'], () =>
    fetchers.getUserFollowing(userHandle)
  );
