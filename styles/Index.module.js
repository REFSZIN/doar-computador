import styled from 'styled-components';
export const Conteiner = styled.div(({Back}) =>`
    width: 100%;
    height: 100%;  
    background-image: url(${Back});
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: 614px) {
    }
`);