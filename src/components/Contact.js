
import React, { Component } from 'react';

import {
  CRow,
  CContainer,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CFormText,
  CTextarea,
  CSelect,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CButton,
  CMedia,
  CMediaBody
} from '@coreui/react';

import CIcon from '@coreui/icons-react'
import styled from 'styled-components';


import { BiLocationPlus } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";


const Box = styled.div`
  padding: 10px;
  text-align: center;
  background: #B0C4DE;
  color: white;

`;

const Content = styled.p`
  font-size: 32px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
`;
class Contact extends Component {

  render (){
    return (
      <>
      <Box  class="text-primary">
      <Content> Contact Us </Content>
    </Box>
    <div>
    <CMedia>
    
    <CRow className="pl-3">


<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.909074989804!2d72.83070571473029!3d19.111644387067496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c3a5e26d7b%3A0x89a89f343cff9c29!2sOnline%20Python%20%40%20SM%20VITA!5e0!3m2!1sen!2sin!4v1612761019013!5m2!1sen!2sin"
  width="670"
  height="350"
  frameBorder="0"
  allowFullScreen=""
  aria-hidden="false"
  tabIndex="0"
  
/>

</CRow>
      <CMediaBody>
                <CRow>
                <CCardBody>
                  <CRow>
                    <CCol xs="12">
                      <CFormGroup>
                        <CLabel htmlFor="name">Parent's Name</CLabel>
                        <CInput id="name" placeholder="Enter parents name" required />
                      </CFormGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs="12">
                      <CFormGroup>
                        <CLabel htmlFor="ccnumber">Student Name</CLabel>
                        <CInput id="ccnumber" placeholder="Enter student name" required />
                      </CFormGroup>

                    
                    </CCol>
                  </CRow>
                </CCardBody>
               
                </CRow>
                <CRow>
                <CCardFooter>
                <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
              </CCardFooter>
              </CRow>
      </CMediaBody>
      
      
    </CMedia>
    </div>
    <div><CCardHeader>
                <CRow>
                <CCol lg="5" >
                
                <h4><BiLocationPlus />Location:</h4>
                <p>Vidyanidhi Infotech Academy <br/>N5th Floor, Vidyanidhi Education Complex, Vidyanidhi Road, Juhu Scheme Andheri (W), Mumbai 400 049 India</p>
                </CCol>
                <CCol md="4" >
                
                <h4><MdEmail/>Email:</h4>
                <p>helpdeskvita2018@gmail.com</p>
                </CCol>
                <CCol sm="3">
                <h4><BiPhoneCall/>Call:</h4>
                <p><strong>Mobile :</strong> 9029435311 / 9653446213</p>
                <p><strong>Landline :</strong> 022-26255629 / 26705498</p>
                </CCol>
              </CRow>

                </CCardHeader></div>
    </>
    );
  }
  
}


export default Contact;
