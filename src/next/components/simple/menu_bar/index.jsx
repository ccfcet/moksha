import React from 'react';
import ResponsiveMenu from 'react-responsive-navbar'

import './style.css'
import MaterialSimpleMenu from '../material_simple_menu';

class MenuBar extends React.Component {
  render() {
    return (
      <div>
        <ResponsiveMenu
          className="menu-tag"
          menuOpenButton={
          <div id="menu-open-text">
            Menu
          </div>}
          menuCloseButton={<div id="menu-close-text">Close</div>}
          changeMenuOn="660px"
          largeMenuClassName="large-menu"
          smallMenuClassName="small-menu"
          menu={
            <div id="menu-bar">
              <ul id="menu-bar-list">
                {this.props.menuBar.menu.data.map(menuElement => {
                  if(menuElement.children)
                  {
                    return (
                      <li>
                        <MaterialSimpleMenu menuTitle={menuElement.item_name}
                          menuElements={menuElement.children}/>
                        </li>
                      )
                    }
                    else {
                      return (
                        <li>
                          <a href={menuElement.item_url}>{menuElement.item_name}</a>
                        </li>
                      )
                    }
                  })}
                </ul>
              </div>
            }
          />
          <style jsx>{`
            #menu-open-text, #menu-close-text {
              color: #5d5d5d;
              font-family: 'Open Sans',sans-serif;
              font-weight: 300;
              font-size: 2.6vh;
              margin-bottom: 0.2vh;
            }
            `}</style>
          </div>
        );
      }
    }

    export default MenuBar;
