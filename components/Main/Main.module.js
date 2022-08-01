import styled from 'styled-components';
export const Conteiner = styled.main`
    background:#0000;
    border: 5px ridge #1800A6;
    border-radius: 40px 40px 0px 0px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
	width: 80vw;
	height: 80vh;
    margin-left:10%;
    margin-top: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #A6A6A6;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: backInDown 1s;
`;

export const FormComputadores = styled.aside`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: space-around;
    @media (max-width: 614px) {
    }
`
;export const FormUser = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: space-around;
`;
export const Formulario = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding-bottom: 40px;
    background-color: #184eaf;
`;
export const H2 = styled.h2`
    padding-top: 35px;
    padding-bottom: 35px;
`;