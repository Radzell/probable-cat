import React from 'react';
import { styled, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Title = styled(Typography)({
  flexGrow: 1
});



const ShoppingCart = ({ selectedCats, clearCart }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }




  return (
    <React.Fragment>
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls="appbar-account-menu"
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <ShoppingCartIcon />
      </IconButton>
      <Menu
        id="appbar-account-menu"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {Object.keys(selectedCats).map(catId => (<MenuItem key={catId}>{selectedCats[catId].name} {selectedCats[catId].price}</MenuItem>))}
        <MenuItem onClick={clearCart}>Clear Cart</MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export const AppBar = ({ selectedCats, clearCart }) => {
  return (
    <MuiAppBar color="primary" position="static">
      <Toolbar>
        <Title variant="h6">Cat App</Title>
        <ShoppingCart selectedCats={selectedCats} clearCart={clearCart} />
      </Toolbar>
    </MuiAppBar>
  );
}
