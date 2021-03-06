import React from 'react';
import './App.css';
import logo from './imagenes/fondoMedika.png';
import corazon from './imagenes/corazon.jpg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Traer from './Componente/Traer';
import RegistroTrabajador from './Componente/RegistroTrabajador';
import RegistroMedicamentoComponent from './Componente/RegistroMedicamento';




function App() {


  return (
    <div className="App">
      <section className="App-MenuB">
        <img src={corazon} className="corazon">  
        </img> Bienvenido a Medika!
      </section>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" align="right"> 
        </img> 
      </header>
     
      
      <Router>
      <div>
        
            <button class="boton_personalizado"><Link to="/">Iniciar Sesion</Link></button> 
            <button class="boton_personalizado"><Link to="/Trabajadores">Trabajadores</Link></button>
            <button class="boton_personalizado"><Link to="/Registro">Registro</Link></button>
            <button class="boton_personalizado"><Link to="/Ubicaciones">Ubicaciones</Link></button>
            <button class="boton_personalizado"><Link to="/">Cerrar Sesion</Link></button> 
            <button class="boton_personalizado"><Link to="/">Ultimas Noticias</Link></button> 

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Trabajadores">
            <About />
          </Route>
          <Route path="/Registro">
            <Registro />
          </Route>
          <Route path="/Ubicaciones">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>  
    <hr></hr>
      <div className="footer">
        Contacto: medika@gmail.com
        <br></br>
        <center>Derechos Reservados: Medika Inc  2020</center>
      </div>
    </div>
    
  );
}
function Home() {
  return (<div>
            <h2>Iniciar Sesion</h2>
            <button>Enviar</button>
          </div>
        );
}
function Registro() {
  return (<div>
            <h2>Registro nuevo Usuario</h2>
            <button>Enviar</button>
          </div>
        );
}
function About() {
  return (
    <Router>
      <div class="menu_trabajador">
            <hr></hr>
            <button class="boton_trabajador"><Link to="/Gerente">Gerente</Link></button> 
            <button class="boton_trabajador"><Link to="/Doctor">Doctor</Link></button>
            <button class="boton_trabajador"><Link to="/Administracion">Administracion</Link></button>
            <hr></hr>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Gerente">
            <FuncionesGerente />
          </Route>
          <Route path="/Administracion">
            <Administracion />
          </Route>
          <Route path="/Doctor">
            <Doctor />
          </Route>
        </Switch>
      </div>
    </Router>  
  );
}

function Users() {

  return (<div>
        <h2>Users</h2>
        <section>
         
        </section>
        </div>);
}
function llamButton(){
  alert("Registrado");
  return true;
}
function llamMedicamento(){
  alert("Medicamento Guardado");
  return true;
}
function FuncionesGerente(){
  return (
    <Router>
      <div class="menu_trabajador">
            <hr></hr>
            <button class="boton_trabajador"><Link to="/RegistrarEmpleado">Registrar Empleado</Link></button> 
            <button class="boton_trabajador"><Link to="/RegistrarMedicamento">Registrar Medicamento</Link></button>
            <button class="boton_trabajador"><Link to="/VerUsuarios">Ver usuarios</Link></button>
            <hr></hr>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/RegistrarEmpleado">
            <RegistrarEmpleado />
          </Route>
          <Route path="/RegistrarMedicamento">
            <RegistrarMedicamento />
          </Route>
          <Route path="/VerUsuarios">
            <VerUsuarios />
          </Route>
        </Switch>
      </div>
    </Router>  
  );

}
function RegistrarEmpleado() {
  
  return (  
  <div>
    <section>
      <h2>Registrar Empleado</h2>
      <RegistroTrabajador />   
    </section>
  </div>

  );
}
function RegistrarMedicamento() {
  
  return (  
  <div>
    <section>
  
      <h2>Registrar Medicamento</h2>
      <RegistroMedicamentoComponent />
    </section>
  </div>

  );
}
function VerUsuarios() {
  
  return (  
  <div>
    <section>
      <h2>Ver Usuarios</h2>
      <Traer />
    </section>
  </div>

  );
}


function Administracion() {
  return <h2>Administracion Funciones</h2>;
}
function Doctor() {
  return <h2>Funciones Doctor</h2>;
}
export default App;
    

