import axios from "axios";
import { Action } from "../context/stateReducer";
import { State } from "../interfaces/interfaces";


export const changeTrack = async(type:string, state:State, dispatch:React.Dispatch<Action>) => {
    // console.log(auth.token)
    await axios.post(
        `https://api.spotify.com/v1/me/player/${type}`,{},
        {
            headers: {
                Authorization: 'Bearer ' + state.auth.token,
                'Content-Type': 'application/json',
            },
        }
    );
    const response = await axios.get(
        'https://api.spotify.com/v1/me/player/currently-playing',
        {
            headers: {
                Authorization: 'Bearer ' + state.auth.token,
                'Content-Type': 'application/json',
            },
        }
    );
    if (response.data !== '') {
        const { item } = response.data;
        const currentlyPlaying = {
            id: item.id,
            name: item.name,
            artists: item.artists.map((artist: any) => artist.name),
            image: item.album.images[2].url
        }
        dispatch({type: 'setPlaying', payload: currentlyPlaying })
    } else {
        dispatch({type: 'setPlaying', payload: null })
    }
}