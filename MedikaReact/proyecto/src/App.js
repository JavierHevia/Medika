import React from 'react';
import './App.css';
import logo from './imagenes/fondoMedika.png';
import SimpleMenu from './Componente/SimpleMenu';
import PermanentDrawerLeft from './Componente/PermantDrawerLeft';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />  
      </header>
      <body bgcolor="#008b8b">
        <section className="App-Menu" align="left">
          <SimpleMenu />
        </section>
        <section>
          <PermanentDrawerLeft />
        </section>
        <section className="App-Cuerpo">

        </section>
        
      </body>
      
    </div>
  );
}

export default App;
    

