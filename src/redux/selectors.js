export const getFilter = (state) => state.filter;

export const getToken = (state) => state.auth.token;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;
