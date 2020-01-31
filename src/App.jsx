import React from 'react';
import { Button } from 'mdbreact'
import logo from './logo.png';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} alt="App Logo" className="App-logo" />
      <h1 className="App-title">Welcome to your MDB React App</h1>
    </header>
    <p className="mb-2">The application is configured and ready to import our components</p>
    <Button href='https://mdbootstrap.com/react/' target='blank' color='light-blue'>
      <strong>Check out our docs!</strong>
    </Button>
  </div>
)

export default App;
