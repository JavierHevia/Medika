import React from 'react';
import './App.css';
import logo from './imagenes/fondoMedika.png';
import SimpleMenu from './Componente/SimpleMenu';
import TemporaryDrawer from './Componente/TemporaryDrawer';


function App() {
  return (
    <div className="App">
      <section className="App-MenuB">
          <TemporaryDrawer />
      </section>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" align="right"> 
        </img> 
      </header>
      <body bgcolor="#008b8b">
        <section className="App-MenuB">
          Bienvenido!
        </section>
        <section className="App-Menu">
            <SimpleMenu />
        </section>
        <section>
          
        </section>
        <section className="App-Cuerpo">

        </section>
        
      </body>
      
    </div>
  );
}

export default App;
    

