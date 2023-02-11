import { defaultTheme } from './styles/themes/default';
import { ThemeProvider } from 'styled-components';
import { GlobalStylle } from './styles/global';
import { Home } from './pages/Home';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
      <GlobalStylle />
    </ThemeProvider>
  );
};
