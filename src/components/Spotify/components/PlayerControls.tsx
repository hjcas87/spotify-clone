import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
    BsFillPlayCircleFill,
    BsFillPauseCircleFill,
    BsShuffle,
} from 'react-icons/bs';
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg';
import { FiRepeat } from 'react-icons/fi';
import { useContextReducer } from '../../../hooks/useContextReducer';
import { changeTrack } from '../../../helper/changeTrack';
import { changeState } from '../../../helper/changeState';

export const PlayerControls = () => {
    const {
        state,
        dispatch,
    } = useContextReducer();
    useEffect(() => {}, []);


    return (
        <Container>
            <Suffle>
                <BsShuffle />
            </Suffle>
            <Previous>
                <CgPlayTrackPrev onClick={() => changeTrack('previous', state, dispatch)}/>
            </Previous>
            <State>
                {state.playerState ? (
                    <BsFillPauseCircleFill onClick={() => changeState(state, dispatch)}/>
                ) : (
                    <BsFillPlayCircleFill onClick={() => changeState(state, dispatch)}/>
                )}
            </State>
            <Next>
                <CgPlayTrackNext onClick={() => changeTrack('next', state, dispatch)}/>
            </Next>
            <Repeat>
                <FiRepeat />
            </Repeat>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    svg {
        color: #b3b3b3;
        transition: 0.2s ease-in-out;
        &:hover {
            color: white;
        }
    }
`;
const Suffle = styled.div``;
const State = styled.div`
    font-size: 2rem;
    svg {
        color: white;
    }
`;
const Previous = styled.div`
    font-size: 2rem;
`;
const Next = styled.div`
    font-size: 2rem;
`;
const Repeat = styled.div``;
