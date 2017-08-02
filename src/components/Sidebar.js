import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarTop">
        <div className="sidebarImg"></div>
        <div className="sidebarName">Name</div>
      </div>

      <div className="sideBarSelection">Dashboard</div>
      <Link to='./EditProfile'><div className="sideBarSelection">Profile</div></Link>
      <div className="sideBarSelection">Messages</div>
      <div className="sideBarSelection">News Feed</div>

    </div>
  )
}
