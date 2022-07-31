import styled from 'styled-components';
export const Conteiner = styled.footer`
    background: rgba(255, 255, 255, 0.01);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
	width: 90vw;
    margin-left: 5%;
	height: 5vh;
	justify-content: center;
	align-items: center;
	display: flex;
    position: fixed;
    bottom: 0px;
    left: 0px;
    margin-bottom: 10px;
    animation: zoomIn 1s;
`;
export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: space-around;
    @media (max-width: 614px) {
    }
`;
export const AppMasters = styled.a`
    margin-left: 15px;
    text-decoration: none;
    
    @media (max-width: 614px) {
    }
`;

export const Creditos = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #A6A6A6;
    animation: backInDown 2s;
    &:hover{
    cursor: pointer;
    }
`;
