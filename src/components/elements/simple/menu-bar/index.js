import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


class MenuBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (

      <div>
      <div  >
        <h1 id="clgname">College Of Engineering Trivandrum</h1>
      </div>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar >
          <NavItem className="mx-auto text-primary"  >
            <NavLink href="/"><p className="Navtext">About</p></NavLink>
          </NavItem>
          <NavItem className="mx-auto text-primary"  >
            <NavLink href="/"><p className="Navtext">Administartion</p></NavLink>
          </NavItem>
          <NavItem className="mx-auto text-primary"  >
            <NavLink href="/"><p className="Navtext">Academics</p></NavLink>
          </NavItem>
          <NavItem className="mx-auto text-primary"  >
            <NavLink href="/"><p className="Navtext">Activities</p></NavLink>
          </NavItem>
          <NavItem className="mx-auto text-primary"  >
            <NavLink href="/"><p className="Navtext">Facilities</p></NavLink>
          </NavItem>
          <NavItem className="mx-auto text-primary"  >
            <NavLink href="/"><p className="Navtext">More</p></NavLink>
          </NavItem>
          </Nav>





          </Collapse>
        </Navbar>

<style jsx>
{`
  @import url('https://fonts.googleapis.com/css?family=Raleway');
  #clgname {
        font-family: 'Raleway', sans-serif;
        text-align : center;
        font-weight :600;
        font-size: 3vw;

  }

  .Navtext{
    display: block;
    padding-left:4.5vw;
    padding-right:4.5vw;
    float:none;
    border-bottom:2px solid transparent;
    text-align:center;
    font-size:1.5vw;


  }
  .Navtext :hover{
    border-bottom:2px solid blue;
  }

}

  `}
</style>

      </div>
    );
  }
}
export default MenuBar
