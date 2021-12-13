import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/theme/defaultTheme';
import GlobalStyles from './styles/GlobalStyles';
import Router from './routes';

const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default App;
