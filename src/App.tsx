import { defaultTheme } from './styles/themes/default';
import { ThemeProvider } from 'styled-components';
import { GlobalStylle } from './styles/global';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStylle />
    </ThemeProvider>
  );
};
