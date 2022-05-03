import { useEffect } from 'react';
import styled from 'styled-components';
import { getInitialPlaylists } from '../../../helper/getInitialPlaylists';
import { useContextReducer } from '../../../hooks/useContextReducer';
import { AiFillClockCircle } from 'react-icons/ai';
import { Tracks } from './Tracks';
import { useObserver } from '../../../hooks/useObserver';


type props = {
    intersection: boolean | null
}

const Body = () => {
    const {
        state: { auth, selectedPlaylistId, selectedPlaylist, isIntersecting },
        dispatch,
    } = useContextReducer();

    const [observer, setElements, entries] = useObserver();
    useEffect(() => {
        const nav = [document.querySelector('#div')];
        setElements(nav);
    }, [setElements]);

    useEffect(() => {
        entries?.forEach(entry => {
            dispatch({type: 'intersection', payload: {nav: entry.isIntersecting} })
        })
        // console.log(isIntersecting)
    }, [observer, entries])
    

    useEffect(() => {
        getInitialPlaylists(auth, selectedPlaylistId, dispatch);
    }, [auth, selectedPlaylistId, dispatch]);

    return (
        <Container>
            <div
                style={{
                    position: 'absolute',
                    height: '8vh',
                    zIndex: '-1',
                }}
                id="div"
            ></div>
            {selectedPlaylist && (
                <>
                    <PlaylistContainer>
                        <Image>
                            <img
                                src={selectedPlaylist.image}
                                alt={selectedPlaylist.name}
                            />
                        </Image>
                        <DetailsContainer>
                            <span>PLAYLIST</span>
                            <h1>{selectedPlaylist.name}</h1>
                            <p>{selectedPlaylist.description}</p>
                        </DetailsContainer>
                    </PlaylistContainer>
                    <List>
                        <HeaderRow intersection={isIntersecting.nav}>
                            <Col>
                                <span>#</span>
                            </Col>
                            <Col>
                                <span>TITLE</span>
                            </Col>
                            <Col>
                                <span>ALBUM</span>
                            </Col>
                            <Col>
                                <span>
                                    <AiFillClockCircle />
                                </span>
                            </Col>
                        </HeaderRow>
                        <TracksContainer>
                            {selectedPlaylist.tracks.map((track, i) => (
                                <Tracks
                                    key={track.id}
                                    track={track}
                                    index={i}
                                />
                            ))}
                        </TracksContainer>
                    </List>
                </>
            )}
        </Container>
    );
};

export default Body;

const Container = styled.div`
    position: relative;
    z-index: 1;
`;
const PlaylistContainer = styled.div`
    margin: 0 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
`;
const Image = styled.div`
    img {
        height: 15rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    }
`;
const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #e0dede;
    h1 {
        color: white;
        font-size: 4rem;
    }
`;
const HeaderRow = styled.div<props>`
    display: grid;
    grid-template-columns: 0.3fr 3fr 1.95fr 0.3fr;
    color: #dddcdc;
    margin: 1rem 0 0 0;
    position: sticky;
    top: 11vh;
    padding: 1rem 3rem;
    transition: 0.3s ease-in-out;
    background-color: ${({intersection}) => intersection ? 'none' : 'rgba(0,0,0, 9)'};
`;
const List = styled.div``;
const Col = styled.div``;
const TracksContainer = styled.div`
    margin: 0 2rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
`;
