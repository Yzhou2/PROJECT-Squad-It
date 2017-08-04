import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Landing from './components/Landing';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import CreateSquad from './components/CreateSquad';

export default function(){
  return (
  <div>
  <Switch>
    <Route  component={ Landing }  exact path="/" />
    <Route component={ Dashboard } path="/dashboard" />
    <Route component={ Profile } path="/profile" />
    <Route component={ EditProfile } path="/editProfile" />
    <Route component={ CreateSquad } path="/createsquad" />
  </Switch>
  </div>
)}
