import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Dashboard() {
  return (
    <div>

    <Header />
    <Sidebar />

    <div className="DashboardContainer">
      <div className="DashboardImg">img</div>
      <div className="createSquad"><button className="createSquadBTN">createsquad</button></div>
      <div className="squadList">
        <div className="squadsListBox">past squads</div>
        <div className="squadsListBox">current squads</div>
        <div className="squadsListBox">bucket lists</div>
      </div>
      <div className="upcomingTrips">upcomingTrips</div>
    </div>
    </div>
  )
}
