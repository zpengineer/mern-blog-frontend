import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AppBar from 'components/AppBar';
import Home from 'pages/Home';
import RelevantPosts from 'pages/RelevantPosts/RelevantPosts';
import PopularPosts from 'pages/PopularPosts';
import SubscriptionPage from 'pages/SubscriptionPage';
import Login from 'pages/Login';
import Register from 'pages/Register';
import PostPage from 'pages/PostPage';
import AddPost from 'pages/AddPost';
import Footer from './Footer';
import TagPostsPage from 'pages/TagPostsPage/TagPostsPage';
import { PrivateRoute } from 'utils/PrivateRoute';
import { PublicRoute } from 'utils/PublicRoute';

import { useFetchCurrentUserQuery } from 'redux/authorization/authApi';

export const App = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // eslint-disable-next-line no-unused-vars
  const { data, isLoading } = useFetchCurrentUserQuery({
    refetchOnMountOrArgChange: true,
  });

  return (
    <>
      {!isLoading && (
        <>
          <AppBar />

          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<RelevantPosts />} />
              <Route path="popular" element={<PopularPosts />} />
              <Route
                path="subscription"
                element={isLoggedIn ? <SubscriptionPage /> : <PrivateRoute />}
              />
              <Route path="posts/:postId/*" element={<PostPage />} />
              <Route path="tags/:tag/*" element={<TagPostsPage />} />
            </Route>

            <Route element={<PrivateRoute redirectTo="/login" />}>
              <Route path="/add-post" element={<AddPost />} />
            </Route>

            <Route element={<PrivateRoute redirectTo="/login" />}>
              <Route path="/posts/:postId/update" element={<AddPost />} />
            </Route>

            <Route element={<PublicRoute restricted />}>
              <Route path="/login" element={<Login />} />
            </Route>

            <Route element={<PublicRoute restricted />}>
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>

          <Footer />
        </>
      )}
    </>
  );
};
