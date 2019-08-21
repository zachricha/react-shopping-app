import React, { Component } from 'react';
import './App.css';
import Header from './templates/header';
import Footer from './templates/footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import WatchOutlined from '@material-ui/icons/WatchOutlined';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import ElButton from './elements/button';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <StylesProvider injectFirst>
        <AppBar position="static" color="default" elevation={0} >
          <Toolbar >
            <Typography variant="h6" color="inherit" noWrap >
              Watch Factory
            </Typography>
            <WatchOutlined/>

            <nav>
            <ElButton></ElButton>
            </nav>

            <ElButton href="#" color="primary" variant="outlined" allColor="orange">aasdf<ShoppingCartOutlined /></ElButton>
          </Toolbar>
        </AppBar>
      </StylesProvider>
      </div>
    );
  }
}

export default App;
