import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Profile() {
  return (
    <div>
      <Header />
      <Sidebar />

      <div className="ProfileContainer">
        <div className="ProfileTopBar">
          <div className="ProfilePicBox">
          </div>
        </div>

        <div className="profileTopUnder">
        </div>

        <div className="avaliableFor">
          <h1>Avaliable For Squad</h1>
          <button>Edit My Profile</button>
        </div>

        <div className="profileAlbum">
          <div className="albumText">
          <p>Photos</p>
          <p>View All</p>
          </div>

          <div className="albumPic">
          <div className="albumInner"></div>
          <div className="albumInner"></div>
          <div className="albumInner"></div>
          <div className="albumInner"></div>
          <div className="albumInner"></div>
          <div className="albumInner"></div>
          </div>
        </div>

        <div className="profileUpcoming">
          <p>upcoming trips</p>
        </div>

        <div className="AboutMe">
          <div>
            <p>About Me</p>
            <hr/>
            <p>ajhdkasjhdaksjdhakjfdisurywehjfsdbcnxmhjreuwyieoaklsmdnfbhjgryueiwoajklsdh</p>
          </div>

          <div>
            <p>Interests</p>
            <div className="profileTags">
              <div className="tag">cake</div>
              <div className="tag">cake</div>
              <div className="tag">cake</div>
            </div>

            <div>
              <p>countries visited</p>
              <p>asdasfajhfsdkjghjkfdgjlshk</p>
            </div>

            <div>
              <p>I Speak</p>
              <p>asjkfhisghfajskldsjh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
