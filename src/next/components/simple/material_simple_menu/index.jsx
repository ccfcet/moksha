import React from 'react';
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          style={{padding: '0',
          textTransform: 'none',
          fontFamily: '\'Open Sans\',sans-serif',
          fontWeight: '300',
          fontSize: '2.6vh',
          color: '#5d5d5d',
          minHeight: 'unset'}}
          >
            {this.props.menuTitle}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
            >
              {this.props.menuElements.map(menuElement => (
                <Link href={menuElement.url}>
                  <MenuItem>
                    {menuElement.name}
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </div>
        );
      }
    }

    export default SimpleMenu;
