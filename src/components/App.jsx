import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/authorization/auth-operations';

import AppBar from 'components/AppBar';
import Blog from './Blog';
import RelevantPosts from 'pages/RelevantPosts/RelevantPosts';
import PopularPosts from 'pages/PopularPosts';
import Login from 'pages/Login';
import Register from 'pages/Register';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />

      <Routes>
        <Route path="/" element={<Blog />}>
          <Route index element={<RelevantPosts />} />
          <Route path="/popular" element={<PopularPosts />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
