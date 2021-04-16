import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavbar,
  CNavbarNav,
  CNavbarBrand,
  CNavbarText,
  CToggler,
  CNavLink,
  CDropdown,
  CBreadcrumbRouter,
  CForm,
  CInput,
  CButton,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import "./navbar.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

// routes config
import routes from "../routes";

const TheHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [navbarText, setNavbarText] = useState(false);

  return (
    <CNavbar expandable="sm" color="dark" sticky="true">
      <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
      <CNavbarBrand><img height="40px" src="/images/smvitaa.png" /></CNavbarBrand>
      <CCollapse show={isOpen} navbar>
        <CNavbarNav>
          <CNavLink to="/">Home</CNavLink>
          <CDropdown inNav>
            <CDropdownToggle color="primary">Courses</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem to="/courses">PG-DAC</CDropdownItem>
              <CDropdownItem to="/courses">PG-DBDA</CDropdownItem>
              <CDropdownItem to="/courses">MSCIT</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CNavLink to="/gallery">Gallery</CNavLink>
          <CNavLink to="/about">About Us</CNavLink>
          <CNavLink to="/contact">Contact Us</CNavLink>
        </CNavbarNav>
        
      </CCollapse>
    </CNavbar>
  );
};

export default TheHeader;
