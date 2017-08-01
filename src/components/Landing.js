import React, { Component } from 'react';


export default function Landing() {
  return (
    <div>
    <div className="LandingHeader">
      <div>logo</div>
      <div>
      <button>Join</button>
      <a href='http://localhost:3001/auth'>
      <button>Log In</button>
      </a>
      </div>
    </div>

    <div className='LandingBody'>
      <h1>Meet Your Squad and Build Lifetime Memories</h1>
      <button>Join With Facebook or Email </button>
    </div>
    </div>
  )
}
