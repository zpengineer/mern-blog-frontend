import { baseApi } from 'redux/baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation({
      query: newUser => ({
        url: 'api/auth/singup',
        method: 'POST',
        body: newUser,
      }),
    }),
    login: builder.mutation({
      query: userInfo => ({
        url: 'api/auth/singin',
        method: 'POST',
        body: userInfo,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: 'api/auth/logout',
        method: 'POST',
        headers: {
          authorization: '',
        },
      }),
    }),
    fetchCurrentUser: builder.query({
      async queryFn(_arg, { getState }, _extraOptions, baseQuery) {
        const persistedState = getState().auth.token;

        if (persistedState === null) {
          return persistedState;
        }

        const result = await baseQuery({
          url: 'api/users/current',
          method: 'GET',
          headers: { authorization: `Bearer ${persistedState}` },
          providesTags: ['user'],
        });

        return result;
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useFetchCurrentUserQuery,
} = authApi;
