import styled from 'styled-components';
import { playTrack } from '../../../helper/playTrack';
import { useContextReducer } from '../../../hooks/useContextReducer';
import { Tracks as Track } from '../../../interfaces/interfaces';

interface prop {
    track: Track;
    index: number;
}

export const Tracks = ({ track, index }: prop) => {
    const {
        album,
        artists,
        context_uri,
        duration,
        id,
        image,
        name,
        track_number,
    } = track;
    const {state, dispatch} = useContextReducer()

    const msToMinutesAndSeconds = (ms: number) => {
        const minutes = Math.floor(ms / 60000)
        const seconds = ((ms % 60000) / 1000).toFixed(0)
        return minutes + ":" + (Number(seconds) < 10 ? '0' : '') + seconds
    }
    return (
        <Container onClick={() => playTrack(track, state, dispatch)}>
            <Col>
                <span>{index + 1}</span>
            </Col>
            <ColDetail>
                <Image>
                    <img src={image} alt="" />
                </Image>
                <Info>
                    <Name>{name}</Name>
                    <span>{artists}</span>
                </Info>
            </ColDetail>
            <Col>
                <span>{album}</span>
            </Col>
            <Col>
                <span>{msToMinutesAndSeconds(duration)}</span>
            </Col>
        </Container>
    );
};

const Container = styled.div`
    padding: 0.5rem 1rem;
    display: grid;
    grid-template-columns: 0.3fr 3.1fr 2fr 0.3fr;
    &:hover {
        background-color: rgba(0, 0, 0, 0.7);
    }
`;
const Col = styled.div`
    display: flex;
    align-items: center;
    color: #dddcdc;
`;
const ColDetail = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    color: #dddcdc;
`;
const Image = styled.div`
img {
    height: 40px;
}`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
`;
const Name = styled.div``;
