import { createGlobalStyle } from 'styled-components';

export const GlobalStylle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['blue']};
}

body {
    background-color: ${({ theme }) => theme['base-background']};
    color: ${({ theme }) => theme['base-text']};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font: 400 1rem "Nunito", sans-serif
}

button {
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
  }

`;
