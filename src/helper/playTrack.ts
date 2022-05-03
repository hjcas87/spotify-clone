import axios from 'axios';
import { Action } from '../context/stateReducer';
import { State, Tracks as Track } from '../interfaces/interfaces';


export const playTrack = async(track : Track, state:State, dispatch:React.Dispatch<Action>) => {
    const {
        album,
        artists,
        context_uri,
        duration,
        id,
        image,
        name,
        track_number,
    } = track;

    
    const response = await axios.put(
        `https://api.spotify.com/v1/me/player/`, {
            context_uri,
            offset: {
                position: track_number-1
            },
            position_ms: 0
        },
        {
            headers: {
                Authorization: 'Bearer ' + state.auth.token,
                'Content-Type': 'application/json',
            },
        }
    );
    if (response.status===204) {
        const currentlyPlaying = {
            id,
            name,
            artists,
            image
        }
        dispatch({type: 'setPlaying', payload: currentlyPlaying })
        dispatch({type: 'setPlayerState', payload: true })
    }
    else {
        dispatch({type: 'setPlayerState', payload: true })
        
    }
    

    // dispatch({type: "setPlayerState", payload: !state.playerState})

};
