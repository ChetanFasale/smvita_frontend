import React from 'react'
import YoutubePlayer from 'src/components/YoutubePlayer'
import Carousel from './Carousel'
import Newnavbar from "src/containers/Newnavbar";
import {
  TheContent,
  // TheSidebar,
  TheFooter,
  TheHeader
} from './index'



const TheLayout = () => {

  
  return (
    <div >

    <div className="wrapper">
    {/* <TheHeader/> */}
    <Newnavbar/>
    <TheContent/>
    </div>
    
            

    
    
    {/*<TheSidebar/>
      <div className="c-wrapper">
      
       {/*<TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>*/}
    </div>
  )
}

export default TheLayout
