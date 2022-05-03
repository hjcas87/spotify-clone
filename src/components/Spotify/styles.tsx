import styled from 'styled-components';
// interface props {
//     children: JSX.Element | JSX.Element[];
// }

export const Container = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-rows: 85vh 15vh;
`;
export const FlexContainer = styled.div`
    display: flex;
    /* grid-template-columns: 15vw 85vw; */
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 87, 100);
`;
export const Content = styled.div`
    height: 100%;
    width: 100%;
    overflow: auto;
    
`;
export const BodyContainer = styled.div`
`;

