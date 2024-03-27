const loadLocalUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return user;
  }
  return null;
};

const isTokenValid = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const expiry = user?.expiry;
  return expiry * 1000 >= Date.now();
};

const isAuthenticated = () => {
  return loadLocalUser() != null && isTokenValid();
};

const token = () => {
  return loadLocalUser()?.token || null;
};

const name = () => {
  return loadLocalUser()?.name || null;
};

export const authUtils = {
  loadLocalUser,
  isTokenValid,
  isAuthenticated,
  token,
  name,
};
