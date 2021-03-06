import React from 'react';
import axios from 'axios';

export default class Traer extends React.Component {
  state = {
    persons: []
  }

  async componentDidMount() {
    axios.get('http://35.209.78.16:8080/Paciente/ObtenerPaciente')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul align="left">
        { this.state.persons.map(person => <li>Nombre: {person.nombre} Puesto: {person.rol} </li>)}
      </ul>
    )
  }
}