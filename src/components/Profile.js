import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import axios from 'axios';
import EditProfile from './EditProfile';

export default class Profile extends Component {
  constructor() {
    super();

    this.state = {
      firstname: null,
      lastname: null,
      profile_img_url: 'https://i.imgur.com/rbClaeN.png',
      gender: null,
      squad_status: null,
      city: null,
      country: null,
      birthday: null,
      smoker: null,
      drinker: null,
      dstolerance: null,
      avaliableforhostdinner: null,
      typeoftraveller: null,
      occupation: null,
      Tags: null,
      visited_countries: null,
      Fluent_Languages: null,
      description: null,
      popUp: false
    }

  this.handleClickEdit = this.handleClickEdit.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/user', {withCredentials:true}).then( response => {
      console.log(response.data, 'this is responseeeeeee')
      this.setState({
        firstname: response.data[0].firstname,
        lastname: response.data[0].lastname,
        profile_img_url: response.data[0].profile_img_url,
        gender: response.data[0].gender,
        squad_status: response.data[0].squad_status,
        city: response.data[0].city,
        country: response.data[0].country,
        birthday: response.data[0].birthday,
        smoker: response.data[0].smoker,
        drinker: response.data[0].drinker,
        dstolerance: response.data[0].dstolerance,
        avaliableforhostdinner: response.data[0].avaliableforhostdinner,
        typeoftraveller: response.data[0].typeoftraveller,
        occupation: response.data[0].occupation,
        // visited_countries: response.data[0].profile_img_url,
        // Fluent_Languages: response.data[0].profile_img_url,
        description: response.data[0].description


      });
    })
  }

handleClickEdit() {
  this.setState({
    popUp: true
  })
}

  render() {
    // console.log(this.state.squadName)
    var blur = {
      filter: 'blur(5px)'
    }
    return (
      <div>
       {
         this.state.popUp
         ?
         <div>
         <EditProfile />

         <div style={this.state.popUp?blur:{}}>
        <Header />
        <Sidebar />

        <div className="ProfileContainer">


        <div className="popUpProfile">
          <div className="ProfileTopBar">
            <div className="ProfilePicBox">
              <img src={this.state.profile_img_url} alt={this.state.firstname}/>
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
              <button className="editProfileBtn" onClick={this.handleClickEdit}>Edit My Profile</button>
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
                  <div className="aboutMeDetail">{this.state.description}</div>

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
      </div>
        :

        <div>

          <Header />
          <Sidebar />

          <div className="ProfileContainer">

          <div className="popUpProfile">
            <div className="ProfileTopBar">
              <div className="ProfilePicBox">
                <img src={this.state.profile_img_url} alt={this.state.firstname}/>
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
                <button className="editProfileBtn" onClick={this.handleClickEdit}>Edit My Profile</button>
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
                    <div className="aboutMeDetail">{this.state.description}</div>

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

        }
        </div>
    )
  }
}
