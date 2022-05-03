import { useEffect } from 'react';
import styled from 'styled-components';
import { getCurrentTrack } from '../../../helper/getCurrentTrack';
import { useContextReducer } from '../../../hooks/useContextReducer';

export const CurrentTrack = () => {
    const {
        state: { auth, currentlyPlaying },
        dispatch,
    } = useContextReducer();
    useEffect(() => {
        getCurrentTrack(auth, dispatch);
    }, []);

    return (
        <Container>
            {currentlyPlaying && (
                <Track>
                    <TrackImage>
                        <img src={currentlyPlaying.image} alt="image" />
                    </TrackImage>
                    <TrackInfo>
                        <h4>{currentlyPlaying.name}</h4>
                        <h6>{currentlyPlaying.artists.join(' ,')}</h6>
                    </TrackInfo>
                </Track>
            )}
        </Container>
    );
};

const Container = styled.div``;

const Track = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;
const TrackImage = styled.div``;
const TrackInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    color: white;
    h6 {
        color: #b3b3b3;
    }
`;
