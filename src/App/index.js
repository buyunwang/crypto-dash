import React, { Component } from 'react'
import './App.css'
import Settings from '../Settings'
import Dashboard from '../Dashboard';
import styled,{css} from 'styled-components';
import AppLayout from './AppLayout'
import AppBar from './AppBar'
import {AppProvider} from './AppProvider'
import Content from '../Shared/Content'

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Content>
            <Settings />
            <Dashboard />
          </Content>
        </AppProvider>
      </AppLayout>
    )
  }
}

export default App;
