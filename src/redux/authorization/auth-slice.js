import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { id: null, name: null, email: null, avatar: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    registerUser: (state, { payload }) => {
      const { name, email, token } = payload.data?.user;
      console.log(payload.data);
      state.user = { name: name, email: email };
      state.token = token;
      state.isLoggedIn = true;
    },
    logIn: (state, { payload }) => {
      const { name, email, token } = payload.data?.user;
      console.log(payload.data);
      state.user = { name: name, email: email };
      state.token = token;
      state.isLoggedIn = true;
    },
    logOut: (state, _) => {
      state.user = { id: null, name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    refreshUser: (state, { payload }) => {
      const { id, name, email, avatarURL } = payload?.user;
      state.user = { id: id, name: name, email: email, avatar: avatarURL };
      state.isLoggedIn = true;
    },
  },
});

export const { registerUser, logIn, logOut, refreshUser } = authSlice.actions;
export default authSlice.reducer;
