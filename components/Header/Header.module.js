import styled from 'styled-components';
export const Conteiner = styled.header`
    background:#0000;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(5px);
    border: 10px 0px solid rgba(255, 255, 255, 0.3);
	width: 100%;
	height: 10vh;
	justify-content: center;
	align-items: center;
	display: flex;
    animation: bounceInDown 1s;
`;
export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: space-around;
    @media (max-width: 614px) {
    }
`;
export const H1 = styled.h1`    
    margin-top: 30px;
    margin-bottom: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #1800A6;
    animation: backInDown 1s;
`;
export const BackPage = styled.span`
    width: 70px;
    height: 70px;
    margin-right: 10px;
    position: absolute;
    left: 40px;
    &:hover{
    cursor: pointer;
    }
`;
