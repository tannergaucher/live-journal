import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import TitleField from './TitleField';
import LeftDrawer from './LeftDrawer';
import AuthForm from './AuthForm';

const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    border: '0px solid black',
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'flexStart',
  },
  authSignIn: {
    marginLeft: 'auto'
  },
  flex: {
    flex: 1,
    marginLeft: '50px',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  
  state = {
    auth: false,
    anchorEl: null,
    left: false
  };

  // handleChange = (event, checked) => {
  //   this.setState({ auth: checked });
  // };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  
  toggleDrawer = (side, open) => () => {
    console.log('clicked')
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static" elevation={0} color="inherit">
          <Toolbar className={classes.toolBar}>

            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
              <AddCircleOutlineIcon/>
            </IconButton>

            <TitleField/>

            {auth && (
              <div className={classes.authSignIn}>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}

            {!auth && (
              <div className={classes.authSignIn}>
                <AuthForm/>
              </div>
            )}

          </Toolbar>

          <LeftDrawer
            toggleLeft={this.state.left}
            toggleDrawer={this.toggleDrawer}
          />
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);

