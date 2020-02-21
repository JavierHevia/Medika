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
            <Gerente />
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
          <Traer />
          <RegistroTrabajador />
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
function Gerente() {
  
  return (  


  <div>
    <section>
      <h2>Registrar Empleado</h2>
      <form align="left">
        DPI:       <input type="text"></input><br></br>
        Nombre:    <input type="text"></input><br></br>
        Apellido:  <input type="text"></input><br></br>
        Telefono: <input type="text"></input><br></br>
        Fecha Nacimiento: <input type="text"></input><br></br>
        Correo Electronico: <input type="text"></input><br></br>
      </form>
      <button onClick={llamButton}>Registrar</button>
      
      <h2>Registrar Medicamento</h2>
      <form>
        Nombre: <input type="text"></input>
        Cantidad: <input type="text"></input>
        Enfermedad: <input type="text"></input>
      </form>
      <button onClick={llamMedicamento}>Guardar Medicamento</button>
      
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
    

