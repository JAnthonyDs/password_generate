import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 0;

        font-family: 'Open Sans', sans-serif;
    }

    body{
        background-color: var(--color-primary);
    }
    
    :root{
        --color-primary: #000000;
        --color-secondary: #1A4D2E;
        --color-tertiary: #FF9F29;
    }

`;