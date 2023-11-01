import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;