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
                <li>
                  <MaterialSimpleMenu menuTitle="About"
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
                          "name": "Mechanical Engineering",
                          "url": "http://me.cet.ac.in/"
                        },
                        {
                          "name": "Civil Engineering",
                          "url": "http://cet.ac.in/index.php?option=com_content&view=article&id=118&Itemid=130"
                        },
                        {
                          "name": "Electrical and Electronics Engineering",
                          "url": "http://ee.cet.ac.in/"
                        },
                        {
                          "name": "Electronics and Communication Engineering",
                          "url": "http://ece.cet.ac.in/"
                        },
                        {
                          "name": "Computer Science Engineering (alpha)",
                          "url": "https://cse.cet.ac.in/"
                        },
                        {
                          "name": "Architecture",
                          "url": "http://ar.cet.ac.in"
                        },
                        {
                          "name": "Computer Applications",
                          "url": "https://ca.cet.ac.in/"
                        },
                        {
                          "name": "Business Administration",
                          "url": "http://www.mba.cet.ac.in/"
                        },
                        {
                          "name": "Physical Education",
                          "url": "http://www.cet.ac.in/index.php?option=com_content&view=category&layout=blog&id=93&Itemid=424"
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
                                "name": "Bosch Rexroth",
                                "url": "academics/bosch_rexroth"
                              },
                              {
                                "name": "Hostel",
                                "url": "academics/hostel"
                              },
                              {
                                "name": "Placement Cell(CGPU)",
                                "url": "academics/cgpu"
                              },
                              {
                                "name": "Central Computing Facility(CCF)",
                                "url": "academics/ccf"
                              },
                              {
                                "name": "Centre for Continuing Education(CCE)",
                                "url": "academics/cce"
                              },
                              {
                                "name": "Refrigerator & AC Maintenance Unit",
                                "url": "academics/people"
                              },
                              {
                                "name": "Guest House",
                                "url": "academics/people"
                              },
                              {
                                "name": "Technical Library",
                                "url": "academics/technical_library"
                              },
                              {
                                "name": "Research Programmes",
                                "url": "academics/research_programmes"
                              },
                            ]}/></li>
                            <li><MaterialSimpleMenu menuTitle="More"
                              menuElements={[
                                {
                                  "name":"Events",
                                  "url":"more/events"
                                },
                                {
                                  "name":"News",
                                  "url":"more/news"
                                },
                                {
                                  "name":"Tenders",
                                  "url":"more/tenders"
                                }
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
