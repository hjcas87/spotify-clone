import axios from "axios";
import { Action } from "../context/stateReducer";
import { State } from "../interfaces/interfaces";



export const changeVolume = async(e:React.MouseEvent<HTMLInputElement, MouseEvent>, state:State, dispatch:React.Dispatch<Action>) => {
    const target = e.target as HTMLInputElement

    console.log(e)
    await axios.put(
        `https://api.spotify.com/v1/me/player/volume`, {},
        {
            params: {volume_percent:parseInt(target.value)},
            headers: {
                Authorization: 'Bearer ' + state.auth.token,
                'Content-Type': 'application/json',
            },
        }
    );
}