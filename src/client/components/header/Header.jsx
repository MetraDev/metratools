import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const openCloseDropdown = (path) => {
    setDropdown(!dropdown);
  };
  return (
    <nav className="navbar navbar-inverse bg-dark">
      <div className="container-fluid">
        <div className="col">
          <h2 className="text-light">Sergio Perez</h2>
        </div>
        <div className="col-left mr-4">
          <button className="btn bg-dark text-light mr-2 font-weight-bold">Home</button>
          <button className='btn bg-dark text-light mr-2 font-weight-bold'>CV</button>
          <button className='btn bg-dark text-light mr-2 font-weight-bold'>Blog</button>
        </div>
        <div className="col-left">
          <Dropdown isOpen={dropdown} toggle={openCloseDropdown} size="lg">
            <DropdownToggle caret className="bg-dark">
              MetraTools
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Tool One</DropdownItem>
              <DropdownItem>Tool Two</DropdownItem>
              <DropdownItem>Tool three</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
