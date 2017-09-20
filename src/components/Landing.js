import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


export default class Explore extends Component {
  render(){
    console.log(process.env,'whats process env file look like')
  return (
    <div className="landingMain">

    <div className="landingTop">
      <img src='https://i.imgur.com/E7Zuby6.png' alt="fixed"/>
      <div className="topNav">
        <a href={process.env.REACT_APP_LOGIN}><div className="topNavJoin">SIGN IN</div></a>
        <a href={process.env.REACT_APP_LOGIN}><div className="topNavJoin">JOIN</div></a>
      </div>
    </div>


    <video preload='auto' loop='loop' muted='muted' autoPlay='true' className='video'>
       <source className="videoBG" src="https://dl.dropboxusercontent.com/s/ryvpuuphlbmv5jf/343902224.mp4?dl=0" type="video/mp4" />
       Video Not Supported
     </video>

     <div className="landingText">
          <div>Meet Your Squad On the Road</div>
          <div className="span">Create Lifetime Memories</div>
      <div className="landingBtn">
          <a href={process.env.REACT_APP_LOGIN}><button className="signin">JOIN</button></a>
          <a href={process.env.REACT_APP_LOGIN}><button className="main_Cta">SIGN IN</button></a>
      </div>

      <div className="annotation">Sign in by clicking Sign in button, then <span>log in with google</span> using demo email: <br/> squad.it.demo@gmail.com <br/> password: 13141516</div>

     </div>

    </div>
    )
  }
}
