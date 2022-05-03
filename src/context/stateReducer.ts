import { State } from "../interfaces/interfaces";

export type Action = 
    | { type: 'setToken', payload: State['auth']}
    | { type: 'setPlaylists', payload: State['playlists']}
    | { type: 'setUserInfo', payload: State['userInfo']}
    | { type: 'setPlaylist', payload: State['selectedPlaylist']}
    | { type: 'intersection', payload: State['isIntersecting']}
    | { type: 'setPlaying', payload: State['currentlyPlaying']}
    | { type: 'setPlayerState', payload: State['playerState']}
    | { type: 'setPlaylistsId', payload: State['selectedPlaylistId']}

export const stateReducer = ( state: State, action: Action): State => {


    switch (action.type) {
        case "setToken":
            return {
                ...state,
                auth: {
                    token: action.payload.token
                }
            }
        case "setPlaylists":
            return {
                ...state,
                playlists: action.payload
            }
        case "setPlaylistsId":
            return {
                ...state,
                selectedPlaylistId: action.payload
            }
        case "setUserInfo":
            return {
                ...state,
                userInfo: action.payload
            }
        case "setPlaylist":
            return {
                ...state,
                selectedPlaylist: action.payload
            }
        case "intersection":
            return {
                ...state,
                isIntersecting: {
                    nav: action.payload.nav,
                }
            }
        case "setPlaying":
            return {
                ...state,
                currentlyPlaying: action.payload
            }
        case "setPlayerState":
            return {
                ...state,
                playerState: action.payload
            }
    
        default:
            return state;
    }
}