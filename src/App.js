import React from 'react';
import { HeaderComponent } from './components/header-component/header-component';
import pic from './assets/images/martin-adams-pTCcJSBOTxY-unsplash.jpg'

import './App.scss';

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <div className="index-wrapper"> 
        <img  src={pic} alt="Wonderful landscape"></img>
      </div>
    </div>
  );
}

export default App;
