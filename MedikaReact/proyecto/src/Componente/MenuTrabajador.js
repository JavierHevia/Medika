import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function MenuTrabajador() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick1 = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl(null);
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
        <MenuItem onClick={handleClose1}>Gerente</MenuItem>
        <MenuItem onClick={handleClose1}>Doctor</MenuItem>
        
      </Menu>
      </React.Fragment>
  );
}
