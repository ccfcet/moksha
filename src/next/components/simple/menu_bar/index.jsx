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
          menuOpenButton={<div id="menu-open-text">
            Menu
          </div>}
          menuCloseButton={<div id="menu-close-text">Close</div>}
          changeMenuOn="660px"
          largeMenuClassName="large-menu"
          smallMenuClassName="small-menu"
          menu={
            <div id="menu-bar">
              <ul id="menu-bar-list">
                <li><a href="/">Home</a></li>
                <li><MaterialSimpleMenu menuTitle="About"
                  menuElements={[
                    {
                      "name": "College",
                      "url": "about/college"
                    },
                    {
                      "name": "Mission and Vision",
                      "url": "about/mission_and_vision"
                    },
                    {
                      "name": "Route Map",
                      "url": "about/route_map"
                    },
                    {
                      "name": "Contact",
                      "url": "about/contact"
                    }
                  ]}/></li>
                  <li><MaterialSimpleMenu menuTitle="Departments"
                    menuElements={[
                      {
                        "name": "Civil Engineering",
                        "url": "department/civil_engineering"
                      },
                      {
                        "name": "Mechanical Engineering",
                        "url": "department/mechanical_engineering"
                      },
                      {
                        "name": "Electrical and Electronics Engineering",
                        "url": "department/civil_engineering"
                      },
                      {
                        "name": "Electronics and Communication Engineering",
                        "url": "department/civil_engineering"
                      },
                    ]}/></li>
                    <li><MaterialSimpleMenu menuTitle="Activities"
                      menuElements={[
                        {
                          "name": "College Union",
                          "url": "department/civil_engineering"
                        },
                        {
                          "name": "Clubs",
                          "url": "activities/clubs"
                        },
                      ]}/></li>
                      <li><MaterialSimpleMenu menuTitle="Academics"
                        menuElements={[
                          {
                            "name": "Programmes",
                            "url": "academics/programmes"
                          },
                          {
                            "name": "People",
                            "url": "academics/people"
                          },
                        ]}/></li>
                        <li><MaterialSimpleMenu menuTitle="Facilities"
                          menuElements={[
                            {
                              "name": "Programmes",
                              "url": "academics/programmes"
                            },
                            {
                              "name": "People",
                              "url": "academics/people"
                            },
                          ]}/></li>
                          <li><a href="/search">Search</a></li>
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
