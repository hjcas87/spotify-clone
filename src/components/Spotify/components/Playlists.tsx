import { useEffect, useState } from 'react';
import { getPlaylistData } from '../../../helper/getPlaylistsData';
import { useContextReducer } from '../../../hooks/useContextReducer';
import { State } from '../../../interfaces/interfaces';
import { MenuItem, SidebarLinkList } from './styles';

const Playlists = () => {
    const [data, setData] = useState<State['playlists']>(null);
    const {
        state: { auth, playlists, selectedPlaylistId },
        dispatch,
    } = useContextReducer();

    useEffect(() => {
        getPlaylistData(auth, setData);
    }, [auth.token, setData]);
    useEffect(() => {
        dispatch({ type: 'setPlaylists', payload: data });
    }, [data, dispatch]);

    const changeCurrentPlaylist = (selectedPlaylistId: string | null) => {
        dispatch({type: 'setPlaylistsId', payload: selectedPlaylistId})
    }

    return (
        <SidebarLinkList>
            {playlists?.map((item) => (
                <MenuItem key={item.id} onClick={() => changeCurrentPlaylist(item.id)}>
                    <span>{item.name}</span>
                </MenuItem>
            ))}
        </SidebarLinkList>
    );
};

export default Playlists;
