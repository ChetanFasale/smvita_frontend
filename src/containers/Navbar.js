import React, { useState } from 'react'
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
  CForm,
  CInput,
  CButton,
  CImg
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const [navbarText, setNavbarText] = useState(false)

  return (
    <>

      <CCard>
        
        <CCardBody>
          <CNavbar expandable="sm" color="info" >
            <CToggler inNavbar onClick={() => setIsOpen(!isOpen)}/>
            <CNavbarBrand>
              NavbarBrand
            </CNavbarBrand>
            <CCollapse show={isOpen} navbar>
              <CNavbarNav>
                <CNavLink to="/home">Home</CNavLink>
                <CDropdown
                inNav
              >
                <CDropdownToggle color="primary">
                  Courses
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem to="/courses">PG-DAC</CDropdownItem>
                  <CDropdownItem to="/courses">PG-DBDA</CDropdownItem>
                  <CDropdownItem to="/courses">MSCIT</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CNavLink>Gallery</CNavLink>
              <CNavLink>About Us</CNavLink>
              <CNavLink>Contact Us</CNavLink>
              </CNavbarNav>
              <CNavbarNav className="ml-auto">
                
                <CDropdown
                  inNav
                >
                  <CDropdownToggle color="primary">
                    Lang
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>EN</CDropdownItem>
                    <CDropdownItem>ES</CDropdownItem>
                    <CDropdownItem>RU</CDropdownItem>
                    <CDropdownItem>FA</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown
                  inNav
                >
                  <CDropdownToggle color="primary">
                    User
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>Account</CDropdownItem>
                    <CDropdownItem>Settings</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CNavbarNav>
            </CCollapse>
          </CNavbar>
        </CCardBody>
      </CCard>
</>
  )
}

export default Navbar;