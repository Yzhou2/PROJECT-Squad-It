import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import axios from 'axios';
import EditProfile from './EditProfile';
import SelectSquad from './SelectSquad';
import Dropzone from 'react-dropzone';


const uploadImage = (file) => {
  return axios.post("/api/getSignedURL", {
    filename: file.name,
    filetype: file.type
  })
  .then(res => {
    // console.log(res);
    let options = {
      headers: {
        'Content-Type': file.type
      }
    }
    return axios.put(res.data.url, file, options)
    .then(res => {
       return res.config.url.match(/.*\?/)[0].slice(0,-1)
      // console.log(res.config.url, 'res url!!!')
      // return res.config.url
    })
  })
}







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
      popUp: false,
      flag: null,
      userid:null,
      pictures: '',
      review: [],
      reviewsDisplay: [],
    }

  this.handleClickEdit = this.handleClickEdit.bind(this);
  this.closePop = this.closePop.bind(this);
  this.onDrop = this.onDrop.bind(this);
  this.submitPic  = this.submitPic.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleClickReview = this.handleClickReview.bind(this);
  }

  componentDidMount() {

        this.setState({
          flag: this.props.location.query.flag,
          userid: this.props.location.query.userid
        }, function(){
          const getProfileAPI = this.state.flag?'http://localhost:3001/api/user':`http://localhost:3001/api/user?userid=${this.state.userid}`
          // console.log(getProfileAPI,'linky linky link')
          axios.get(getProfileAPI, {withCredentials:true}).then( response => {
            // console.log(response.data, 'this is responseeeeeee')
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


            })
          });

        });





  }

  onDrop(accepted, rejected){
  uploadImage(accepted[0])
  .then(url => this.setState({pictures: url}))
}

submitPic(){
  axios.post('/api/uploadPic', {picurl: this.state.pictures}, {withCredentials:true}).then(
    res => {
      const getProfileAPI = this.state.flag?'http://localhost:3001/api/user':`http://localhost:3001/api/user?userid=${this.state.userid}`
      // console.log(getProfileAPI,'linky linky link')
      axios.get(getProfileAPI, {withCredentials:true}).then( response => {
        // console.log(response.data, 'this is responseeeeeee')
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
        })
      });
    }
  )
}


handleChange(event){
  this.setState({
    review: event.target.value
  })
}


handleClickReview(){
  axios.post('/api/postReviews', {userid:this.state.userid, review:this.state.review}, {withCredentials:true}).then(res => {
    console.log('succeess send review')
  })
}


handleClickEdit() {
  this.setState({
    popUp: true

  })
}

closePop(){
  this.setState({
    popUp: false
  })
}

  render() {
    console.log(this.state.userid, 'whats the otherpersonid !!!')
    var blur = {
      filter: 'blur(5px)'
    }
    return (
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
    )
  }
}
