import { useEffect, useState } from 'react';
import { getUserInfo } from '../../helper/getUserInfo';
import { useContextReducer } from '../../hooks/useContextReducer';
import { State } from '../../interfaces/interfaces';
import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BodyContainer, Container, Content, FlexContainer } from './styles';

const Spotify = () => {
    const [data, setData] = useState<State['userInfo']>(null);
    const {
        state: { auth, isIntersecting },
        dispatch,
    } = useContextReducer();

    useEffect(() => {
        getUserInfo(auth, setData);
    }, [auth.token, setData, getUserInfo]);

    useEffect(() => {
        dispatch({ type: 'setUserInfo', payload: data });
    }, [data, dispatch]);

    return (
        <Container>
            <FlexContainer>
                <Sidebar />
                <Content>
                    <Navbar intersection={isIntersecting.nav} />
                    <BodyContainer>
                        <Body />
                    </BodyContainer>
                </Content>
            </FlexContainer>
            <div>
                <Footer />
            </div>
        </Container>
    );
};

export default Spotify;
