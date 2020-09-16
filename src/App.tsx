import React from 'react';
import { BrowserRouter, Route,  Switch,Redirect } from 'react-router-dom';
import {ThemeProvider} from 'styled-components'
import Profile from './pages/Profile'
import theme from 'styles/theme';
import GlobalStyles from './styles/global'
import Lists from 'pages/Lists';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import AppProvider from './context';

export const link = createHttpLink({
  uri: "https://hapi-interview-api.herokuapp.com/"
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});


const App = () =>

  (<ApolloProvider client={client}>
    <AppProvider>

  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
          <Route path="/" exact >
            <Redirect to="/profile"/>
          </Route>
          <Route path="/profile" component={Profile}/>
          <Route path="/lists" component={Lists} />
      </Switch>
    </BrowserRouter>
    <GlobalStyles/>
  </ThemeProvider>
    </AppProvider>
  </ApolloProvider>
  )

export default App;
