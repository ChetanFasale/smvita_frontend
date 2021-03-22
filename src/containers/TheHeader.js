import React ,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// routes config
import routes from '../routes'



const TheHeader = () => {



  const [isOpen, setIsOpen] = useState(false)
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const [navbarText, setNavbarText] = useState(false)
  
  return (
   
    

    
      <CNavbar expandable="sm" color="info" >
     
        <CToggler inNavbar onClick={() => setIsOpen(!isOpen)}/>
        <CNavbarBrand>
          SMVITA
        </CNavbarBrand>
        <CCollapse show={isOpen} navbar>
          <CNavbarNav>
            <CNavLink to="/">Home</CNavLink>
            <CDropdown
            inNav
          >
            <CDropdownToggle color="secondary">
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
              <CDropdownToggle color="secondary">
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
              <CDropdownToggle color="secondary">
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

   
    
  )
}

export default TheHeader
