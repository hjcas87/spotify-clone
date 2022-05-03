import styled from "styled-components";


export const Container = styled.div`
    background-color: black;
    display: flex;
    min-width: 250px;
    max-width: 250px;
    color: #b3b3b3;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;
export const HeaderSidebar = styled.div`
    display: flex;
    flex-direction: column;
`
export const Logo = styled.div`
    text-align: center;
    margin: 1rem 0;
    img {
        max-inline-size: 80%;
        block-size: auto;
    }
`
export const SidebarLinkList = styled.ul`
overflow: auto;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    &::-webkit-scrollbar{
        width: 0.7rem;
        &-thumb {
            background-color: rgba(255, 255, 255 , 0.6);
        }
    }
`
export const MenuItem = styled.li`
    display: flex;
    gap: 1rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
        color: white;
    }
`