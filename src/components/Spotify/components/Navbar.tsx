import { FaSearch } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { useContextReducer } from '../../../hooks/useContextReducer';
import styled from 'styled-components';

type props = {
    intersection: boolean | null
}

const Navbar = ({intersection}: props) => {
    const { state } = useContextReducer();
    
    return (
        <Container intersection={intersection}>
            <SearchBar>
                <FaSearch />
                <input type="text" placeholder="Artists, songs, or podcasts" />
            </SearchBar>
            <Avatar>
                <a href="#">
                    <CgProfile />
                    <span>{state.userInfo?.userName}</span>
                </a>
            </Avatar>
        </Container>
    );
};

export default Navbar;

const Container = styled.div<props>`
    z-index: 10;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    height: 11vh;
    transition: background-color 0.3s ease-in-out;
    background-color: ${({intersection}) => intersection === null || intersection ? 'none' : 'rgba(0,0,0,.8)'};
    @media (min-width: 768px) {
        justify-content: space-between;
    }
`;
const SearchBar = styled.div`
    background-color: white;
    width: auto;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: none;
    align-items: center;
    gap: 0.5rem;
    input {
        border: none;
        height: 2rem;
        width: 100%;
        &:focus {
            outline: none;
        }
    }
    @media (min-width: 768px) {
        display: flex;
    }
`;
const Avatar = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0.2rem;
    /* padding-right: 1rem; */
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        padding-right: 1rem;
    }
    a {
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        color: white;
        font-weight: bold;
        svg {
            font-size: 1.3rem;
            background-color: #282828;
            padding: 0.1rem;
            border-radius: 1rem;
            color: #c7c7c7;
        }
        span {
            display: none;
            @media (min-width: 768px) {
                display: block;
            }
        }
    }
`;
