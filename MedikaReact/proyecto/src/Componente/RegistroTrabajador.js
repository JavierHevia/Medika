import React from 'react';
import axios from 'axios';

export default class RegistroTrabajador extends React.Component {
  state = {
    name: '',
    dpi:'',
    apellido:'',
    telefono:'',
    fechanac:'',
    correo:'',
    puesto:''
  }

  handleChangeNombre = event => {
    this.setState({ name: event.target.value});
  }
  handleChangeDPI = event => {
    this.setState({ dpi: event.target.value});
  }
  handleChangeApellido = event => {
    this.setState({ apellido: event.target.value});
  }
  handleChangeTelefono = event => {
    this.setState({ telefono: event.target.value});
  }
  handleChangeFecha = event => {
    this.setState({ fechanac: event.target.value});
  }
  handleChangeCorreo = event => {
    this.setState({ correo: event.target.value});
  }
  handleChangePuesto = event => {
    this.setState({ puesto: event.target.value});
  }
  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      dpi: this.state.dpi,
      apellido: this.state.apellido,
      telefono: this.state.telefono,
      fechanac: this.state.fechanac,
      correo: this.state.correo,
      puesto:this.state.puesto
    };

    
    axios.post('http://34.69.180.235:8080/Empleado/RegistrarEmpleado', { user })
      .then(res => {
        console.log('El usuario fue registrado');
        console.log(res);
        console.log(res.data);
        alert(res.data);
      })
      
  }

  render() {
    return (
      <div>
        <form align="left" onSubmit={this.handleSubmit}>
          <label>
            DPI:
            <input type="text" name="dpi" onChange={this.handleChangeDPI} />
          </label><br></br>
          <label>
            Nombre:
            <input type="text" name="nombre" onChange={this.handleChangeNombre} />
          </label><br></br>
          <label>
            Apellido
            <input type="text" name="apellido" onChange={this.handleChangeApellido} />
          </label><br></br>
          <label>
            Telefono
            <input type="text" name="telefono" onChange={this.handleChangeTelefono} />
          </label><br></br>
          <label>
            Fecha Nacimiento
            <input type="text" name="fecha" onChange={this.handleChangeFecha} />
          </label><br></br>
          <label>
            Correo Electronico
            <input type="text" name="correo" onChange={this.handleChangeCorreo} />
          </label><br></br>
          <label>
            Puesto (debe ir escrito en mayusculas ej: MEDICO, SECRETARIA)
            <input type="text" name="puesto" onChange={this.handleChangePuesto} />
          </label><br></br>
          <button type="submit">Registrar</button>
        </form>
      </div>
    )
  }
}