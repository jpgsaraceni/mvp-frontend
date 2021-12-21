import { ThemeProvider } from 'styled-components';

import defaultTheme from './styles/theme/defaultTheme';
import GlobalStyles from './styles/GlobalStyles';
import Router from './routes';
import { MusicProvider } from './providers/Music';
import { UserProvider } from './providers/UserProvider';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MusicProvider>
        <UserProvider>
          <Router />
          <GlobalStyles />
        </UserProvider>
      </MusicProvider>
    </ThemeProvider>
  );
};

export default App;
