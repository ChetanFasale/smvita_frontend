import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const cStyle = {
  height:"400px"
};
const slides = [
  'https://epic-bell-ae26f8.netlify.app/smvita-frontend/assets/img/slide/slide-1.jpg',
  'https://epic-bell-ae26f8.netlify.app/smvita-frontend/assets/img/slide/slide-2.png',
  'https://epic-bell-ae26f8.netlify.app/smvita-frontend/assets/img/slide/slide-3.jpg',
]

const Carousel = () => {
  const [activeIndex] = useState(1)

  return (
    <div>
      <CRow >
        <CCol sm={12}>
          <CCarousel >
            <CCarouselInner>
              <CCarouselItem style={cStyle}>
                <img className="d-block w-100" style={cStyle}  src={slides[0]} alt="slide 1" />
              </CCarouselItem>
              <CCarouselItem>
                <img className="d-block w-100"  style={cStyle}   src={slides[1]} alt="slide 2" />
              </CCarouselItem>
              <CCarouselItem>
                <img className="d-block w-100" style={cStyle}   src={slides[2]} alt="slide 3" />
              </CCarouselItem>
            </CCarouselInner>
            <CCarouselControl direction="prev" />
            <CCarouselControl direction="next" />
          </CCarousel>
        </CCol>
      </CRow>
    </div>
  )
}

export default Carousel