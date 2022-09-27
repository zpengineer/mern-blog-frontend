import { createSlice } from '@reduxjs/toolkit';
import { postsApi } from 'redux/posts/postsApi';

const initialState = {
  comments: null,
};

const commentsSlice = createSlice({
  name: 'commentsSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      postsApi.endpoints.getOnePost.matchFulfilled,
      (state, { payload }) => {
        state.comments = payload?.posts?.comments;
      }
    );
  },
});

// export const { postComments } = commentsSlice.actions;

export default commentsSlice.reducer;
