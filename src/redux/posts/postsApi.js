// import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { baseApi } from 'redux/baseApi';

// const postComments = createEntityAdapter({
//   selectId: comment => comment._id,
// });

// const initialState = postComments.getInitialState();

export const postsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    relevantPosts: builder.query({
      query: () => 'api/posts',
      providesTags: ['blog'],
    }),
    popularPosts: builder.query({
      query: () => 'api/posts/popular',
      providesTags: ['blog'],
    }),
    getOnePost: builder.query({
      query: id => ({ url: `api/posts/${id}` }),
      // transformResponse: responseData => {
      //   return postComments.setAll(initialState, responseData);
      // },
    }),
    getAllTags: builder.query({
      query: () => 'api/posts/tags',
      providesTags: ['blog'],
    }),
    getAllPostsByTag: builder.query({
      query: tag => `api/posts/tags/${tag}`,
      providesTags: ['blog'],
    }),
    addPost: builder.mutation({
      query: post => ({
        url: 'api/posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['blog'],
    }),
    deletePost: builder.mutation({
      query: id => ({
        url: `api/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['blog'],
    }),
  }),
});

// export const { selectAll: getAllComments, selectById: commentId } =
//   postComments.getSelectors(state => console.log(state));

export const {
  useRelevantPostsQuery,
  usePopularPostsQuery,
  useGetOnePostQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useGetAllTagsQuery,
  useGetAllPostsByTagQuery,
} = postsApi;
