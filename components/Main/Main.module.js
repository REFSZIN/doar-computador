import styled from 'styled-components';
export const Conteiner = styled.main`
    background:#0000;
    border: 5px ridge #1800A6;
    border-radius: 40px 40px 0px 0px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
	width: 80%;
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
    animation: backInDown 1s;
`;

export const FormComputadores = styled.aside`
    width: 50%;
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
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: space-around;
`;
export const Formulario = styled.form`
    width: 50%;
    height: 100%;
    
`;