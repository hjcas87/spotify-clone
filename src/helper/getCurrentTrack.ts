import axios from "axios";
import { Action } from "../context/stateReducer";
import { State } from "../interfaces/interfaces";



export const getCurrentTrack = async(auth:State['auth'], dispatch:React.Dispatch<Action>) => {
    
    
    const response = await axios.get(
        'https://api.spotify.com/v1/me/player/currently-playing',
        {
            headers: {
                Authorization: 'Bearer ' + auth.token,
                'Content-Type': 'application/json',
            },
        }
    );
    console.log(response)
    if (response.data !== '') {
        const { item } = response.data;
        const currentlyPlaying = {
            id: item.id,
            name: item.name,
            artists: item.artists.map((artist: any) => artist.name),
            image: item.album.images[2].url
        }
        dispatch({type: 'setPlaying', payload: currentlyPlaying })
    }
}