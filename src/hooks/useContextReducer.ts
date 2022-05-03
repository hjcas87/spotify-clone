import { useContext } from "react";
import { StateContext } from "../context/StateContext";


export const useContextReducer = () => {

    const { state, dispatch } = useContext( StateContext )

    return {
        state,
        dispatch
        // setToken,
        // setPlaylists,
        // setUserInfo
    }


}