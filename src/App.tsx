import React from 'react';
import { Button, Tooltip } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Elodie's webapp lives here. <code>src/App.tsx</code>
        </p>
        <p>Welcome to our website!</p>
        <Tooltip title="my buttton tooltip">
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </Tooltip>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
