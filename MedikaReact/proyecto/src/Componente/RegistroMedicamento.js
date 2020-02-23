import React from 'react';
import axios from 'axios';

export default class RegistroMedicamentoComponent extends React.Component {
  state = {
    nombre: '',
    cantidad:'',
    distribuidora:''
  }

  handleChangeNombre = event => {
    this.setState({ nombre: event.target.value});
  }
  handleChangeCantidad = event => {
    this.setState({ cantidad: event.target.value});
  }
  handleChangeDistribuidora = event => {
    this.setState({ distribuidora: event.target.value});
  }
  
  handleSubmit = event => {
    event.preventDefault();

    const medicina = {
      nombre: this.state.nombre,
      cantidad: this.state.cantidad,
      distribuidora: this.state.distribuidora,
    };

    
    axios.post('http://34.69.180.235:8080/Medicamento/RegistrarMedicamento', { medicina })
      .then(res => {
        console.log('El Medicamento fue registrado');
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
            Nombre
            <input type="text" name="dpi" onChange={this.handleChangeNombre} />
          </label><br></br>
          <label>
            Cantidad:
            <input type="text" name="nombre" onChange={this.handleChangeCantidad} />
          </label><br></br>
          <label>
            Distribuidora
            <input type="text" name="apellido" onChange={this.handleChangeDistribuidora} />
          </label><br></br>
          <button type="submit">Registrar</button>
        </form>
      </div>
    )
  }
}