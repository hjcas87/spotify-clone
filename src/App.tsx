import { useEffect } from 'react';
import Login from './components/Login/Login';
import Spotify from './components/Spotify/Spotify';
import { useContextReducer } from './hooks/useContextReducer';

const App = () => {
    const {
        state: { auth },
        dispatch,
    } = useContextReducer();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const token = hash.substring(1).split('&')[0].split('=')[1];
            dispatch({ type: 'setToken', payload: { token } });
        }
    }, [auth.token, dispatch]);

    return <>{auth.token ? <Spotify /> : <Login />}</>;
};

export default App;
