import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../login';
import Userlist from '../user/userlist/Userlist';
import Userdetail from '../user/userdetail/Userdetail';
import Home from '../Home';

const routes = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/user/list", element: <Userlist /> },
    { path: "/user/detail/:id", element: <Userdetail /> },
    { path: "/login", element: <Login /> }
]);

export default routes;