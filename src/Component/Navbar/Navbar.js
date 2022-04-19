import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { NavLink, useNavigate } from "react-router-dom";
function Navbar() {
  const [showBasic, setShowBasic] = useState(false);
  const user = 1;
  const navigate = useNavigate();
  const loginHandle = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <MDBNavbar expand="lg" light bgColor="light" className="fixed-top ">
      <MDBContainer fluid>
        <NavLink
          to="/kl"
          className="fw-bold  mr-4 my-1 "
          style={{ fontSize: "1.5rem" }}
        >
          Hii
        </NavLink>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="justify-content-center mb-2  mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="/">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Link</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href="#">Link</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className="d-flex input-group w-auto">
            {user ? (
              <MDBBtn color="primary" onClick={loginHandle}>
                Login
              </MDBBtn>
            ) : (
              <MDBBtn color="danger" rounded>
                Logout
              </MDBBtn>
            )}
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;
