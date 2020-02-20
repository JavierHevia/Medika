import React from 'react';
import './App.css';
import logo from './imagenes/fondoMedika.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SimpleMenu from './Componente/SimpleMenu';
import MenuTrabajador from './Componente/MenuTrabajador';



function App() {

var a;
  return (
    <div className="App">
      <section className="App-MenuB">
    
          
      </section>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" align="right"> 
        </img> 
      </header>
     
      
      <Router>
      <div>
        
            <button> <Link to="/">Iniciar Sesion</Link></button> 
           
              <button><Link to="/Trabajadores">Trabajadores</Link></button>
           
              <button><Link to="/Ubicaciones">Ubicaciones</Link></button>
              <button> <Link to="/">Cerrar Sesion</Link></button> 

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Trabajadores">
            <About />
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
            <h2>Login</h2>
            <button>Enviar</button>
          </div>
        );
}

function About() {
  return (
    <Router>
      <div>
        
            <button> <Link to="/Gerente">Gerente</Link></button> 
           
              <button><Link to="/Doctor">Doctor</Link></button>
           
              <button><Link to="/Administracion">Administracion</Link></button>
        

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
  return <h2>Users</h2>;
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
      <form>
        Nombre: <input type="text"></input>
        Edad: <input type="text"></input>
        Telefono: <input type="text"></input>
        DPI: <input type="text"></input>
        
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
    

