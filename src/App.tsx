import { ThemeProvider } from 'styled-components';

import defaultTheme from './styles/theme/defaultTheme';
import GlobalStyles from './styles/GlobalStyles';
import Router from './routes';
import { MusicProvider } from './providers/Music';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MusicProvider>
        <Router />
        <GlobalStyles />
      </MusicProvider>
    </ThemeProvider>
  );
};

export default App;
