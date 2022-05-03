import { useReducer } from 'react';
import { State } from '../interfaces/interfaces';
import { StateContext } from './StateContext';
import { stateReducer } from './stateReducer';

const INITIAL_STATE: State = {
    auth: {
        token: null,
    },
    playlists: null,
    userInfo: null,
    selectedPlaylistId: '37i9dQZF1EIYUf4T3IGKcC',
    selectedPlaylist: null,
    currentlyPlaying: null,
    isIntersecting: {
        nav: null,
    },
    playerState: null
};

interface props {
    children: JSX.Element | JSX.Element[];
}

const StateProvider = ({ children }: props) => {
    const [state, dispatch] = useReducer(stateReducer, INITIAL_STATE);

    return (
        <StateContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export default StateProvider;
