import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';

const initialState = {
  user: {
    id: null,
    name: null,
    email: null,
    avatar: null,
    following: null,
    followers: null,
  },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //log in
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        const { id, name, email, avatarURL, following, followers, token } =
          payload?.user;
        state.user = {
          id: id,
          name: name,
          email: email,
          avatar: avatarURL,
          following: following,
          followers: followers,
        };
        state.token = token;
        state.isLoggedIn = true;
      }
    );
    //log out user
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, (state, _) => {
      state.user = {
        id: null,
        name: null,
        email: null,
        avatar: null,
        followers: null,
        following: null,
      };
      state.token = null;
      state.isLoggedIn = false;
    });
    //current user
    builder.addMatcher(
      authApi.endpoints.fetchCurrentUser.matchFulfilled,
      (state, { payload }) => {
        const { id, name, email, avatarURL, following, followers } =
          payload?.user;
        state.user = {
          id: id,
          name: name,
          email: email,
          avatar: avatarURL,
          following: following,
          followers: followers,
        };
        state.isLoggedIn = true;
      }
    );
  },
});

export default authSlice.reducer;
