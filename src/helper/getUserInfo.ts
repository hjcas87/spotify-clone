import axios from "axios";
import { State } from "../interfaces/interfaces";


export const getUserInfo = async ( auth:State['auth'], setUserInfo:(userInfo: State['userInfo']) => void ) => {
    
    const {data} = await axios.get(
        'https://api.spotify.com/v1/me',
        {
            headers: {
                Authorization: 'Bearer ' + auth.token,
                'Content-Type': 'application/json',
            },
        }
    );
    setUserInfo({
        userId: data.id,
        userName: data.display_name,
    })
};