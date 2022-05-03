import axios from "axios";
import { Action } from "../context/stateReducer";
import { State } from "../interfaces/interfaces";


export const getInitialPlaylists = async(
    auth:State['auth'],
    selectedPlaylistId: string | null,
    dispatch: React.Dispatch<Action>
    ) => {
    const res = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
            headers: {
                Authorization: 'Bearer ' + auth.token,
                'Content-Type': 'application/json',
            },
        }
    );
    const selectedPlaylist = {
        id: res.data.id,
        name: res.data.name,
        description: res.data.description.startsWith("<a") ? '' : res.data.description,
        image: res.data.images[0].url,
        tracks: res.data.tracks.items.map(({track}:any) => ({
            id: track.id,
            name: track.name,
            artists: track.artists.map((artist:any) => artist.name),
            image: track.album.images[2].url,
            duration: track.duration_ms,
            album: track.album.name,
            context_uri: track.album.uri,
            track_number: track.track_number
        }))
    }
    // console.log(res)
    dispatch({type: "setPlaylist", payload: selectedPlaylist})
}