import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{ 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: background-color 0.2s ease-in-out;
    }
    body { 
        background-color: ${prop => prop.theme.colors.background};
        font-family: 'Inter', sans-serif;
    }
    main {
        padding: 8em;
    }
`
export default GlobalStyle