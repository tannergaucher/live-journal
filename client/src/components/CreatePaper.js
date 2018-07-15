import React from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Inconsolata',
    background: 'rgba(0, 0, 0, .03)'
  },
  textArea: {
    height: '65vh',
    width: '100vw',
    padding: '60px',
    margin: '30px',
    fontFamily: 'Inconsolata',
    fontSize: '20px',
    border: 'none'
  },
}

class CreatePaper extends React.Component {
  
  constructor(){
    
    super()
    
    this.state = {
      text: '',
      
    }
  }
  
  render(){
    const { classes } = this.props;

    return(
        <div className={classes.paper}>
          <form>
            <textarea 
              className={classes.textArea} 
              name="text"
              onChange={this.handleChange}
              >
            </textarea>
          </form>
        </div>
    )
  }
}

export default withStyles(styles)(CreatePaper);