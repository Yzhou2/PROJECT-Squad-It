import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import socket from './socket';

export default class Safety extends Component {
    constructor(props) {
      super(props);

      this.state = {

      }

    }






  render() {

  return (
    <div className="ProfileContainer">
      <div className="safetyWrapper">


      <h2>Safety Basics</h2>

            <div>Your safety is important. Take it seriously. We do.</div>

      <h2>Review Profiles and References Carefully</h2>

            <div>Whether traveling, attending an event, or joining a Squad, take the time to carefully review member profiles. Read what members say about themselves and what other members have said about them. Give yourself the time to thoroughly read through all the information available and don’t compromise. If you’re uncomfortable, keep looking.</div>
      <h2>Trust your instincts</h2>

            <div>If a person, situation or profile seems unsafe for any reason, move on. Don’t worry about seeming rude. Be clear about your boundaries and don’t be shy about stating them. If someone in your suad makes you uncomfortable, leave the squad or don’t attend. Communicate clearly with others and take care of yourself. </div>
      <h2>Have A Backup Plan</h2>


            <div>Do your homework, and be sure you’re aware of cultural and religious differences, sensitivities, and general safety recommendations for each place that you travel. Gender roles and expectations can differ wildly. Consider using the following resources for safety alerts and advisories:
            <br/>
            U.S. Department of State: Travel Alerts and Warnings
            <br />
            Gov.UK: Foreign Travel Advice
            <br />
            Government of Canada: Country Travel Advice and Advisories</div>

      <h2>Know Your Limits</h2>

            <div>Partying like a rockstar might be fun, but it puts your safety and well-being in the hands of others.</div>
      <h2>Leave Review</h2>

            <div>Use the Review System to let other know about your experiences with the people you meet. Be honest and clear. Please check out our review policy on the.</div>
      <h2>Report Negative Experiences</h2>

            <div>Our Trust and Safety team is here to help build the safest and most trusted community possible. Reporting safety concerns to Squad-it helps keep future squad members safe. Confidentially report negative experiences or safety concerns here.</div>


      </div>
    </div>
  )
  }
}
