import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './views/login.jsx';
import Signup from './views/signup.jsx';
import Users from './views/users.jsx';
import NotFound from './views/NotFound.jsx';
import DefaultLayout from './components/DefaultLayout.jsx';
import GuestLayout from './components/GuestLayout.jsx';
import Dashboard from './views/Dashboard.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/users" />
            },
            {
                path: '/users',
                element: <Users />
            } ,
            {
                path: '/dashboard',
                element: <Dashboard />
            } ,
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    },

    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;
