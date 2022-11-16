import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../login';
import Userlist from '../Userlist';
import Home from '../Home';

const routes = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/user/list", element: <Userlist /> }
]);

export default routes;