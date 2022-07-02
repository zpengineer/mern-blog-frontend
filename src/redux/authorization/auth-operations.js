import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://fedorov-blog.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

export const register = createAsyncThunk('auth/register', async userData => {
  try {
    const { data } = await axios.post('users/register', userData);
    token.set(data.token);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const logIn = createAsyncThunk('auth/login', async userData => {
  try {
    const { data } = await axios.post('users/login', userData);
    token.set(data.token);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    const { data } = await axios.get('users/logout');
    token.unset();
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const storageToken = state.auth.token;

    if (storageToken === null) {
      console.log('Токена нет, уходим');
      return thunkAPI.rejectWithValue();
    }

    token.set(storageToken);

    try {
      const { data } = await axios.get('users/current');
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
