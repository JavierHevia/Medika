import React from 'react';
import axios from 'axios';

export default class RegistroTrabajador extends React.Component {
  state = {
    dpi: '',
    name: '',
    apellido: '',
    fecha:'',
    telefono:'',
    correo:'',
  }

  handleChange = event => {
    this.setState({ name: event.target.value , dpi: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            DPI:
            <input type="text" name="dpi" onChange={this.handleChange} />
          </label>
          <label>
            Nombre:
            <input type="text" name="nombre" onChange={this.handleChange} />
          </label>
          <label>
            Apellido
            <input type="text" name="apellido" onChange={this.handleChange} />
          </label>
          <label>
            Telefono
            <input type="text" name="telefono" onChange={this.handleChange} />
          </label>
          <label>
            Fecha Nacimiento
            <input type="text" name="fecha" onChange={this.handleChange} />
          </label>
          <label>
            Correo Electronico
            <input type="text" name="correo" onChange={this.handleChange} />
          </label>
          <button type="submit">Registrar</button>
        </form>
      </div>
    )
  }
}