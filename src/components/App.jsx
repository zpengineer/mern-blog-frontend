import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AppBar from 'components/AppBar';
import Home from 'pages/Home';
import RelevantPosts from 'pages/RelevantPosts/RelevantPosts';
import PopularPosts from 'pages/PopularPosts';
import Login from 'pages/Login';
import Register from 'pages/Register';
import PostPage from 'pages/PostPage';
import AddPost from 'pages/AddPost';

import { useFetchCurrentUserQuery } from 'redux/authorization/authApi';
import { refreshUser } from 'redux/authorization/auth-slice';

export const App = () => {
  const dispatch = useDispatch();
  const { data: user, isSuccess } = useFetchCurrentUserQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch(refreshUser(user));
    }
  }, [dispatch, isSuccess, user]);

  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<RelevantPosts />} />
          <Route path="/popular" element={<PopularPosts />} />
          <Route path="/posts/:postId/*" element={<PostPage />} />
        </Route>

        <Route path="/add-post" element={<AddPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
