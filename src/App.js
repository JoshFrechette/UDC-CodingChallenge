//dependencies
import React from 'react';
import { Grid, Typography, Button, Paper } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';

import './App.css';
//requirements
import Dashboard from './components/dashboard.js';



function App() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App;
