import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
  <div>

    <Header />
    <Sidebar />

    <div className="DashboardContainer">
        <div className="tripPlan">

            <div className="TopBox">
              <div className="YourTrip">Your Trip Plans</div>
              <button className="AddTrip"> + Add Trip Plans</button>
            </div>

            <div className="tripList">Your List of Trips </div>
            <div className="line"></div>

          <div className="tripListDetails">
            <div className="lists">
                <div>
                  <div className="triploc">Los Angelas, CA, USA</div>
                  <div className="tripdate">sep 15, 2017 - sep 19, 2018</div>
                </div>

                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>


                <div>
                  <div className="triploc">Los Angelas, CA, USA</div>
                  <div className="tripdate">sep 15, 2017 - sep 19, 2018</div>
                </div>
            </div>

            <div className="listbtn">
                <div>
                  <button className="edittrip">Edit</button>
                  <button className="deletetrip">Delete</button>
            </div>    </div>

        </div>

        <div className="tripListDetails">
          <div className="lists">
              <div>
                <div className="triploc">Los Angelas, CA, USA</div>
                <div className="tripdate">sep 15, 2017 - sep 19, 2018</div>
              </div>

              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>


              <div>
                <div className="triploc">Los Angelas, CA, USA</div>
                <div className="tripdate">sep 15, 2017 - sep 19, 2018</div>
              </div>
          </div>

          <div className="listbtn">
              <div>
                <button className="edittrip">Edit</button>
                <button className="deletetrip">Delete</button>
                </div>
              </div>

      </div>
      </div>


      <div className="tripPlan">

          <div className="TopBox topBarColor">
            <div className="YourTrip">Your Squads</div>

            <div>
                <button className="AddTrip">+ Create a Squad</button>
                <button className="AddTrip">+ Join a Squad</button>
            </div>
          </div>

          <div className="squadBoxcontainer">
            <div className="squadBox">
              <div className="squadTop">Current Squads</div>
              <div className="line"></div>
            <div className="squadList">
              <div>The Legend</div>
              <button className="squaddelete">DELETE</button>
            </div>
            </div>


            <div className="squadBox">
              <div className="squadTop">Past Squads</div>
              <div className="line"></div>
            </div>


            <div className="squadBox">
              <div className="squadTop">Bucket Lists</div>
              <div className="line"></div>
            </div>
          </div>
      </div>


    </div>
  </div>
  )
}
