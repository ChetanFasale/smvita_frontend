import React, { Component } from 'react'



import {
  CRow,
  CContainer,
  CCol
} from '@coreui/react'
export default class About extends Component {
  render() {
    const mystyle = {
      fontFamily: "Raleway  sans-serif"
    };
    return (
      <div>
        <CContainer  style={mystyle}>
          <CRow >
            <CCol>
            <b><h2>OUR ORIGIN</h2></b>
              <h3>We are a part of Upanagar Shikshan Mandal (USM), a pioneering educational trust in the western suburbs
              of Mumbai. Commencing in 1956, USM has blossomed into 14 educational institutes that impart quality
              education from primary school to Post-Graduate courses.
              </h3>
            </CCol>

          </CRow>

          <br />
          <br />
          <br />

          <CRow xs={1} md={2}>
            <CCol><ul>
              <li>
                <h4><b>We Believe</b> </h4> <br />
                <p >To learn and work successfully in an increasingly information-rich society, one
                must be able to use technology effectively and creatively. This applies to all strata of
                society...students, teachers, professionals, homemakers and senior citizens.
                </p>
              </li>
              <li>
                <h4><b>Our Mission</b> </h4> <br />
                <p >To develop capable users of Information Technology who will effectively and
                creatively use the most amazing machine – a PC!</p>
              </li>
            </ul></CCol>
            <CCol><div >
              <div >

                <h4>Customized Workshops to empower the user</h4>
                <p>These workshops are designed keeping in mind the individual needs of students, teachers, professionals,
                homemakers and Senior Citizens.
                </p>
              </div>
              <div>
                <h4>Maharashtra State Certificate in Information Technology (MS-CIT)</h4>
                <p>As an Authorized Learning Centre of Maharashtra Knowledge Corporation (MKCL) we offer MS-CIT which aims
                at making the participants smart users of computers by learning Word, Excel, PowerPoint and Internet
                though practical case studies.
                </p>
              </div>

              <div >

                <h4>Post Graduate Diploma in Advanced Computing (PG DAC )</h4>
                <p>As an Authorized training centre of CDAC’s Advanced Computing Training School we offer PG DAC. (C-DAC
                is the Centre for Development in Advanced Computing, an initiative of the Ministry of IT, Government of
                India)
                B.E and B.Tech graduates from across the country are selected for this PG Diploma through C-DAC’s All
                India Common Admission Test.
                For details: www.vidyanidhi.com
                </p>
              </div>
            </div></CCol>

          </CRow>
        </CContainer>


      </div>
    )
  }
}
