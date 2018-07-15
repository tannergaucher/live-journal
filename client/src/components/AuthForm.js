import React from 'react';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import axios from 'axios';


export default class AuthForm extends React.Component {
  
  constructor(){
    
    super()
    
    this.state = {
      open: false,
      isUser: true,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  
  handleFB = () => {
    
    const myInit = { 
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      mode: 'cors',
      cache: 'default', 
      };
    const myRequest = new Request('/auth/facebook', myInit);
    fetch(myRequest)
      .then(function(response) {
        console.log('response')
      })
      .catch(function(e) {
        console.log(e)
      })
  }
  
  handleGoogle = () => {
    
    axios.get('/auth/google')
      .then(function(response) {
        console.log("zzzz", response)
      })
  }
  
  render() {
    
    return (
      <div>
        <Button onClick={this.handleClickOpen}>{this.state.isUser ? 'Register' : 'Log in'}</Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <form onSubmit={this.handleSubmit}>
            <DialogTitle id="form-dialog-title"><span>Welcome, human</span></DialogTitle>

            <Button><a onClick={this.handleGoogle}>Sign In with Google</a></Button>
            
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleClose} color="primary" type="submit">
                Register
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
    
  }
}
