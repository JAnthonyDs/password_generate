import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;

    align-items: center;
    justify-content: center;
    
`;

export const Input = styled.input`
    background-color: var(--color-secondary);
    color: var(--color-tertiary);
    width: 500px;
    height: 48px;
    font-size: 24px;
    border-radius: 10px;
`;

export const Button = styled.button`
    background-color: var(--color-tertiary);
    color: var(--color-secondary);
    width: 150px;
    height: 50px;
    font-size: 24px;
    margin: 12px;
    cursor: pointer;
    border-radius: 10px;
    color: #FFF;
`;

export const InputTam = styled.input`
    background-color: var(--color-tertiary);
    color: black;
    width: 100px;
    height: 24px;
    font-size: 16px;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
`;

export const InputCheck = styled.input`

`;

export const Flex = styled.div`
    display: flex;
    > p {
        color: var(--color-tertiary);
        margin: 10px;
    }
`;
