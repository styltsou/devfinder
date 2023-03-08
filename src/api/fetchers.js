export const getUserProfile = async userHandle => {
  const results = await fetch(`https://api.github.com/users/${userHandle}`);

  return await results.json();
};

export const getUserRepos = async userHandle => {
  const results = await fetch(
    `https://api.github.com/users/${userHandle}/repos`
  );

  return await results.json();
};

export const getUserFollowers = async userHandle => {
  const results = await fetch(
    `https://api.github.com/users/${userHandle}/followers`
  );

  return await results.json();
};

export const getUserFollowing = async userHandle => {
  const results = await fetch(
    `https://api.github.com/users/${userHandle}/following`
  );

  return await results.json();
};
