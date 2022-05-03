import axios from "axios";
// import { useContextReducer } from "../hooks/useContextReducer";
import { Item, State } from "../interfaces/interfaces";


export const getPlaylistData = async (
    auth:State['auth'], 
    setPlaylists:(playlists:State['playlists'])=>void
) => {
    
    const response = await axios.get(
        'https://api.spotify.com/v1/me/playlists',
        {
            headers: {
                Authorization: 'Bearer ' + auth.token,
                'Content-Type': 'application/json',
            },
        }
    );
    const { items } = response.data;
    const playlists = items?.map(({ name, id }: Item) => {
        return {
            name,
            id,
        };
    });
    setPlaylists(playlists);
};