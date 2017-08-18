<div>
<Dropzone onDrop={(accepted, rejected) => this.onDrop(accepted, rejected)} />
<button onClick={this.submitPic}>submit</button>

{this.state.popUp?<EditProfile closePop={this.closePop}/>:""}
<div className="ProfileContainer">
<SelectSquad userid={this.state.userid} />
<input onChange={this.handleChange}/>
<button onClick={this.handleClickReview}>review</button>
<div className="popUpProfile">
  <div className="ProfileTopBar">
    <div className="ProfilePicBox">

    </div>
  </div>

  <div className="profileTopUnder">
  </div>

  <div className="avaliableFor">
    <div className="avaliableForContent">
      <div className="avaliableStatus">{
        this.state.Squad_Status === 'maybe'
        ?
        'Not Avaliable to Join Squad'
        :
        'Avaliable to Join Squad'
      }</div>
      {this.state.flag?
      <button className="editProfileBtn" onClick={this.handleClickEdit}>Edit My Profile</button>
      :
      <button className="editProfileBtn inviteBtn">+ Invite To My Squad</button>
    }
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
          <div className="aboutMeDetail"></div>

        <div className="aboutMeDetailContainer">
          <div className="Profilereview">

          </div>






          <div className="basicInfo">
            <div className="basic_title"><span>Basic Details</span></div>
            <div className="basicInfoList">
              <div className="aboutMeTitle">Gender</div>
              <div className="aboutMeDetail">{this.state.gender}</div>
            </div>

            <div className="basicInfoList">
              <div className="aboutMeTitle">Location</div>
              <div className="aboutMeDetail">{this.state.city}</div>
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
                <div className="aboutMeDetail">{this.state.occupation}</div>
            </div>


            <div className="basicInfoList">
                <div className="aboutMeTitle">Do you Smoke?</div>
                <div className="aboutMeDetail">{this.state.smoker}</div>
            </div>

            <div className="basicInfoList">
                <div className="aboutMeTitle">Do you Drink?</div>
                <div className="aboutMeDetail">{this.state.drinker}</div>
            </div>

            <div className="basicInfoList">
                <div className="aboutMeTitle">Mind HangingOut with <br/>People Who Drink/Smoke?</div>
                <div className="aboutMeDetail">{this.state.dstolerance}</div>
            </div>


            <div className="basicInfoList">
                <div className="aboutMeTitle">What Type of <br/> Traveller are you?</div>
                <div className="aboutMeDetail">{this.state.typeoftraveller}</div>
            </div>

            </div>
        </div>
      </div>
    </div>
    </div>
  </div>
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
    <div className="aboutMeTitle">Mind HangingOut with <br/>People Who Drink/Smoke?</div>
    <div className="aboutMeDetail">{this.state.dstolerance}</div>
</div>








<div className="tripPlan" style={display}>

    <div className="TopBox">
      <div className="YourTrip">Your Travel Plans</div>
      <button className="AddTrip" onClick={this.handleClickAddTP}> + Add Trip Plans</button>
    </div>

    <div className="tripList">Your List of Trips </div>
    <div className="line"></div>

  <div>

    {this.state.travelPlan ? this.state.travelPlan.map( (eachPlan, idx) => {
      return (
    <div className="listWrapper" key={idx}>
      <div className="lists">
          <div className="tripList1">
            <div className="triploc">{eachPlan.city +', ' + eachPlan.country}</div>
            <div className="tripdate">{eachPlan.arrival}</div>
          </div>

          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>


          <div className="tripList2">
            <div className="triploc">{eachPlan.city +', ' + eachPlan.country}</div>
            <div className="tripdate">{eachPlan.depart}</div>
          </div>
      </div>

      <div className="listbtn">
          <div>
            <button className="edittrip" onClick={()=>{this.sendEachPlanToState(eachPlan)}}>Edit</button>
            <button className="deletetrip" onClick={()=>{this.deleteTrip(eachPlan.travelplan_id)}}>Delete</button>
          </div>
      </div>
    </div>
      )
    }):[]}







</div>
</div>














<div className="viewTrip">
  <div>View Trip Plans</div>
  <i className="fa fa-plus" aria-hidden="true"></i>
</div>




**************

<div className="singleReview">
  <div>
    <div className="rs_avatar"></div>
    <div className="rs_name">Yiran</div>
  </div>

  <div className="rs_content_wrapper">
    <div className="rs_content">
    Jodys place was a wonderful place for relaxing.
    Everything was comfortable, quiet and clean. The area is beautiful.
    I would like to come again.
    </div>

    <span>
      <div className="re_loc">From West Palm Beach, FL</div>
      <i className="fa fa-flag-o" aria-hidden="true"></i>
    </span>
  </div>


</div>

<div className="hrline"></div>


*************
