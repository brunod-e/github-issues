import { createGlobalStyle } from 'styled-components';

export const GlobalStylle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 0.5rem;
    }
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme['base-border']}
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme['blue']};
      border-radius: 10px;
    }

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
    cursor: pointer;
  }
`;
