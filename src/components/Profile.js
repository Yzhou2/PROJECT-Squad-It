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
          <div className="avaliableForContent">
            <div className="avaliableStatus">Avaliable to Join Squad</div>
            <button className="editProfileBtn">Edit My Profile</button>
          </div>
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


        <div className="AboutMeContainer">

            <div className="aboutMe">
              <div>About Me</div>
            </div>
            <div className="aboutMeContent">
                <div className="aboutMeDetail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

              <div className="aboutMeDetailContainer">
                <div className="Profilereview">

                </div>






                <div className="basicInfo">
                  <div className="basic_title">Basic Details</div>
                  <div className="basicInfoList">
                    <div className="aboutMeTitle">Gender</div>
                    <div className="aboutMeDetail">F</div>
                  </div>

                  <div className="basicInfoList">
                    <div className="aboutMeTitle">Location</div>
                    <div className="aboutMeDetail">Provo, UT, USA</div>
                  </div>

                  <div className="basicInfoList">
                    <div className="aboutMeTitle">Age</div>
                    <div className="aboutMeDetail">23</div>
                  </div>

                  <div className="basicInfoList">
                      <div className="aboutMeTitle">Countries Visited</div>
                      <div className="aboutMeDetail">china, chili, india</div>
                  </div>

                  <div className="basicInfoList">
                      <div className="aboutMeTitle">Languages Spoken</div>
                      <div className="aboutMeDetail">english, chinese</div>
                  </div>


                  <div className="basicInfoList">
                      <div className="aboutMeTitle">Occupation</div>
                      <div className="aboutMeDetail">Student</div>
                  </div>


                  <div className="basicInfoList">
                      <div className="aboutMeTitle">Do you Smoke?</div>
                      <div className="aboutMeDetail">No</div>
                  </div>

                  <div className="basicInfoList">
                      <div className="aboutMeTitle">Do you Drink?</div>
                      <div className="aboutMeDetail">No</div>
                  </div>

                  <div className="basicInfoList">
                      <div className="aboutMeTitle">Mind HangingOut with <br/>People Who Drink/Smoke?</div>
                      <div className="aboutMeDetail">No</div>
                  </div>


                  <div className="basicInfoList">
                      <div className="aboutMeTitle">What Type of <br/> Traveller are you?</div>
                      <div className="aboutMeDetail">Budget, Adventure</div>
                  </div>

                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
