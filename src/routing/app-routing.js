import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../login';
import Userlist from '../user/userlist/Userlist';
import Userdetail from '../user/userdetail/Userdetail';
import Home from '../Home';

const routes = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/user/list", element: <Userlist /> },
    { path: "/user/detail/:id", element: <Userdetail /> }
]);

export default routes;