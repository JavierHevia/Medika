import React from 'react';
import './App.css';
import logo from './imagenes/fondoMedika.png';
import SimpleMenu from './Componente/SimpleMenu';
import MenuTrabajador from './Componente/MenuTrabajador';



function App() {
  return (
    <div className="App">
      <section className="App-MenuB">
          <SimpleMenu />
          <MenuTrabajador />
      </section>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" align="right"> 
        </img> 
      </header>
      <section className="App-Cuerpo">
        <div>
          <h1>Misión</h1>
          <p align="left">
            <ul>
            <li>Colaborar para mejorar la salud y la calidad de vida de los ciudadanos, ofertando servicios sanitarios excelentes, con el paciente como centro de nuestra atención, y profesionales altamente cualificados, en un hospital privado con vocación docente e investigadora.
            </li>
            <li>Asegurar la máxima colaboración e integración con la administración pública, con atención primaria y los servicios socio-sanitarios, las compañías aseguradoras y el Grupo Quironsalud, promoviendo un beneficio mutuo y sostenible para toda la sociedad.
            </li>
            </ul>
          </p>
        </div>
        </section>
        <section className="App-Cuerpo">
        <div>
         <h1> Visión</h1>
          <p align="left">
            <ul>
            <li> Liderar la Transformación del Sistema Sanitario actual para asegurar su sostenibilidad, promoviendo la innovación e incorporando las nuevas tecnologías disponibles.
            </li>
            <li>Asegurar la máxima colaboración e integración con la administración pública, con atención primaria y los servicios socio-sanitarios, las compañías aseguradoras y el Grupo Quironsalud, promoviendo un beneficio mutuo y sostenible para toda la sociedad.
            </li>
            <li>
            Ser reconocidos como referentes a nivel nacional e internacional, desde la perspectiva asistencial, docente e investigadora.
            </li>
            </ul>
          </p>
        </div>
    </section>
      
    </div>
  );
}

export default App;
    

