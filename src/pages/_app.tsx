import { ThemeProvider } from 'styled-components';
import Providers from '../providers';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Providers>
      <Component {...pageProps} />
    </Providers>
    <GlobalStyles />
  </ThemeProvider>
);

export default MyApp;
