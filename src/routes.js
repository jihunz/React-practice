import Home from './pages/Home';
import Movies from './pages/Movies';
import Users from './pages/Users';

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/movies',
        component: Movies
    },
    {
        path: '/users',
        component: Users
    }
];