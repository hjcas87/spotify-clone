import { createContext, Dispatch } from 'react';
import { State } from '../interfaces/interfaces';
import { Action } from './stateReducer';

type ContextProps = {
    state: State;
    dispatch: Dispatch<Action>;
    // setToken: (token: string) => void;
    // setPlaylists: (playlists: State['playlists']) => void;
    // setUserInfo: (userInfo: State['userInfo']) => void;
};

export const StateContext = createContext<ContextProps>({} as ContextProps);
