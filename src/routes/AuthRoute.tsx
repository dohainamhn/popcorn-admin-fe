import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from 'stores/hook';

const AuthRoute = () => {
  const auth = useAppSelector((state) => state.auth.isAuthenticated);
  return auth ? <Navigate to="/" /> : <Outlet />;
};

export default AuthRoute;
