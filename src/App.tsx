import React from 'react';
import {ThemeProvider} from 'styled-components'
import Profile from './pages/Profile'

import theme from 'styles/theme';
import GlobalStyles from './styles/global'

const App = () =>
  (
  <ThemeProvider theme={theme}>
    <Profile/>
    <GlobalStyles/>
  </ThemeProvider>
  )

export default App;
