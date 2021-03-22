import React, { Component } from 'react'
import Carousels from 'src/containers/Carousel'
import {
    CMedia,
    CMediaBody,
    CCard,
    CRow,
    CCardHeader,
    CCardBody,
    CDataTable,
    CJumbotron,
    CBadge,
    CCol
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import ReactPlayer from 'react-player'
import usersData from './users/UsersData'
import Accordian from './Accordian'

import YoutubePlayer from './YoutubePlayer/index'
import VideoPlayer from './VideoPlayer'


const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['Date','Batches', 'Timing', 'Final_Presentation']




export default class Courses extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
            <CRow>
            
            <h2 style={{}}>PG-DAC</h2>
          
                <CMedia>
                    <div >
                        <ReactPlayer  url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width="800px" height="430px" />
                    </div>
                    <CMediaBody>

                        
                        <CJumbotron className="border">
                        <h2><b>Course Details</b></h2>
                        
                            <h4> For Age Group : 8 to 12</h4>
                            <h4>Fees : 4500</h4>
                            <h4>No of hours: 20 hrs</h4>
                            <h4 >Post Graduate Diploma in Advanced Computing (PG DAC) grooms engineers and IT
                            professionals for a career in Software Development. Running successfully for more than seventeen years, the
                            PG-DAC
                            course has yielded more than quarter million of students, who are well positioned in the industry today.
                      </h4>
              </CJumbotron>
                        
                    </CMediaBody>
                </CMedia>
                
            </CRow>
            <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             <h1>Batch Schedule</h1>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      
      </CRow>
      
      
        <Accordian/>
        <YoutubePlayer/>
        <VideoPlayer/>
        
      </div>
            
        )
    }
}

