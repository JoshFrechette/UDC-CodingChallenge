//dependencies
import React from 'react';
import { Grid, Typography, Button, Paper } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './App.css';
//requirements
import Dashboard from './components/dashboard.js';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Dashboard />
      </div>
    </ApolloProvider>
  );
}

export default App;
