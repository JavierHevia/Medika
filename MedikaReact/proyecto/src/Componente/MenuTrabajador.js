import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { render } from 'react-dom';

export default function MenuTrabajador() {
  
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick1 = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl(null);
  };
  const MostrarGerente = () => {
    console.log('El modulo es de gerente');
    return(<h1>Hola Diana</h1>)
  };
 
  
   

  return (
      <React.Fragment>
    
      <Button aria-controls="trabajador-menu" aria-haspopup="true" onClick={handleClick1} >
        Trabajador
      </Button>
      <Menu
        id="trabajador-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose1}
      >
        <MenuItem onClick={MostrarGerente}>Gerente</MenuItem>
        <MenuItem onClick={MostrarGerente }>Doctor</MenuItem>
        
      </Menu>
      
      </React.Fragment>
  );
}
