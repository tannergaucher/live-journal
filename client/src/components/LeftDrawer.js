import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CreateIcon from '@material-ui/icons/Create'
import ExploreIcon from '@material-ui/icons/Explore'
import FavoriteIcon from '@material-ui/icons/Favorite'

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class LeftDrawer extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  
  
  goToPaper = () => {
  }

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>

        <ListItem button>
          <ListItemIcon>
            <CreateIcon/>
          </ListItemIcon>
          <ListItemText primary="New" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <ExploreIcon/>
          </ListItemIcon>
          <ListItemText primary="Explore" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <FavoriteIcon/>
          </ListItemIcon>
          <ListItemText primary="Faves" />
        </ListItem>


        </div>
          );

    return (
      <div>
        <Drawer open={this.props.toggleLeft} onClose={this.props.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

LeftDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftDrawer);
