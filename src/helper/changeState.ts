import axios from "axios";
import { Action } from "../context/stateReducer";
import { State } from "../interfaces/interfaces";



export const changeState = async(state:State, dispatch:React.Dispatch<Action>) => {
    const changeState = state.playerState ? 'pause' : 'play'
    await axios.put(
        `https://api.spotify.com/v1/me/player/${changeState}`, {},
        {
            headers: {
                Authorization: 'Bearer ' + state.auth.token,
                'Content-Type': 'application/json',
            },
        }
    );

    dispatch({type: "setPlayerState", payload: !state.playerState})
}