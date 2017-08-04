import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default function Landing() {
  return (
    <div className="landingMain">

    <div className="landingTop">
      <img src='https://i.imgur.com/vhANm1q.png' />
    </div>


    <video preload='auto' loop='loop' muted='muted' autoPlay='true' className='video'>
       <source className="videoBG" src="https://dl.dropboxusercontent.com/s/ryvpuuphlbmv5jf/343902224.mp4?dl=0" type="video/mp4" />
       Video Not Supported
     </video>

     <div className="landingText">
          <div>Meet Your Squad On the Road</div>
          <div className="span">Create Lifetime Memories</div>
      <div className="landingBtn">
          <a href='http://localhost:3001/auth'><button className="signin">SIGN IN</button></a>
          <a href='http://localhost:3001/auth'><button className="main_Cta">JOIN</button></a>
      </div>
     </div>

    </div>
  )
}
