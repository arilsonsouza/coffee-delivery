import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        background-color: ${(props) => props.theme.background};        
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: ${(props) => props.theme.fonts.regular}, sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
    
    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }

`
