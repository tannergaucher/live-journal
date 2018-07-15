import React from 'react'

import { withStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import StopIcon from '@material-ui/icons/Stop'


const styles = {
  statusIcons: {
    display: 'flex',
    alignItems: 'spaceBetween',
    height: '100%',
  },
  liveIcon: {
    // color: 'red'
  },
  stopIcon: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}

class StatusIcons extends React.Component {
  
  render(){
    const {classes} = this.props;
    
    
    return(
      <div className={classes.statusIcons}>

        <ListItem button>
          {/* <ListItemIcon>
            <FiberManualRecordIcon
              className={classes.liveIcon}
              style={{color: this.props.active === true ? "red" : "grey"}}
            />
            </ListItemIcon>
          <ListItemText primary="Live" /> */}
        </ListItem>

        <ListItem 
          className={classes.stopIcon}
          button
        >
          {/* <ListItemIcon>
            <StopIcon/>
          </ListItemIcon> */}
        </ListItem>

      </div>
    )
  }
}

export default withStyles(styles)(StatusIcons)