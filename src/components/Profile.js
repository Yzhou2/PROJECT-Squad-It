import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import axios from 'axios';
import EditProfile from './EditProfile';
import SelectSquad from './SelectSquad';
import PostReview from './PostReview.js';




export default class Profile extends Component {
  constructor() {
    super();

    this.state = {
      firstname: null,
      lastname: null,
      profile_img_url: 'https://i.imgur.com/rbClaeN.png',
      gender: null,
      squad_status: true,
      city: null,
      country: null,
      birthday: null,
      smoker: null,
      drinker: null,
      dstolerance: null,
      avaliableforhostdinner: true,
      typeoftraveller: null,
      occupation: null,
      Tags: null,
      visited_countries: null,
      Fluent_Languages: null,
      description: null,
      popUp: null,
      flag: false,
      userid:null,
      pictures: '',
      reviewsDisplay: [],
      selectSquad: false,
      postReview: false,
    }

  this.handleClickEdit = this.handleClickEdit.bind(this);
  this.closePop = this.closePop.bind(this);
  this.selectSquad = this.selectSquad.bind(this);
  this.unSelectSquad = this.unSelectSquad.bind(this);
  this.postReview = this.postReview.bind(this);
  this.unPostReview = this.unPostReview.bind(this);
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
              visited_countries: response.data[0].visited_countries,
              Fluent_Languages: response.data[0].Fluent_Languages,
              description: response.data[0].description,



            })
          });

        });



              axios.get(`http://localhost:3001/api/getReviews/${this.props.location.query.userid}`).then(res=>{

                 // console.log('get reviews successfully', res)
                 console.log(this.props.location.query.userid, 'this is my userid passed into getreviews')

                 this.setState({
                   reviewsDisplay: res.data
                 })
               })



  }



    unSelectSquad(){
       this.setState({
        selectSquad: false
       })
     }

    selectSquad(){
        this.setState({
        selectSquad: true
        })
      }





   postReview(){
     this.setState({
       postReview: true
     })
   }



   unPostReview(){
      this.setState({
        postReview: false
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
  },function(){
      const getProfileAPI = this.state.flag?'http://localhost:3001/api/user':`http://localhost:3001/api/user?userid=${this.state.userid}`
      // console.log(getProfileAPI,'linky linky link')
      axios.get(getProfileAPI, {withCredentials:true}).then( response => {
        // console.log(response.data, 'this is responseeeeeee')
        this.setState({
          // firstname: response.data[0].firstname,
          // lastname: response.data[0].lastname,
          profile_img_url: response.data[0].profile_img_url,
          // gender: response.data[0].gender,
          // squad_status: response.data[0].squad_status,
          // city: response.data[0].city,
          // country: response.data[0].country,
          // birthday: response.data[0].birthday,
          // smoker: response.data[0].smoker,
          // drinker: response.data[0].drinker,
          // dstolerance: response.data[0].dstolerance,
          // avaliableforhostdinner: response.data[0].avaliableforhostdinner,
          // typeoftraveller: response.data[0].typeoftraveller,
          // occupation: response.data[0].occupation,
          // visited_countries: response.data[0].visited_countries,
          // Fluent_Languages: response.data[0].Fluent_Languages,
          // description: response.data[0].description


        })
      });



  })



}

  render() {
    console.log(this.state.visited_countries, 'whats countries')
    // console.log(this.state.reviewsDisplay.profile_img_url, 'this is what i was looking for url !!!!')
    var blur = {
      filter: 'blur(5px)'
    }
    return (
      <div>
      {this.state.popUp?<EditProfile closePop={this.closePop} profile_img_url={this.state.profile_img_url} refreshImg={this.refreshImg}/>:""}
      {this.state.selectSquad? <SelectSquad userid={this.state.userid} unSelectSquad={this.unSelectSquad}/> :"" }
      {this.state.postReview?<PostReview unPostReview={this.unPostReview} userid={this.state.userid}/>:""}
      <div className="ProfileContainer profileBackground" style={this.state.popUp?blur:{}}>
        <div className="InnerContainer">
          <div className="InnerLeft">
            <div className="ProfilePicBox">

              <img src={this.state.profile_img_url} alt={this.state.firstname}/>

            </div>

            <div className="details">

              <div className="detailHeader">
              <div>Details</div>
              </div>



              <div className="detailBody">
                  <div className="basicInfoList">
                    <div className="aboutMeTitle">Gender</div>
                    <div className="aboutMeDetail">{this.state.gender}</div>
                  </div>


                  <div className="basicInfoList">
                    <div className="aboutMeTitle">Age</div>
                    <div className="aboutMeDetail">23</div>
                  </div>


                  <div className="basicInfoList">
                      <div className="aboutMeTitle">Occupation</div>
                      <div className="aboutMeDetail">{this.state.occupation}</div>
                  </div>


                  <div className="basicInfoList">
                      <div className="aboutMeTitle">Smoke?</div>
                      <div className="aboutMeDetail">{this.state.smoker}</div>
                  </div>

                  <div className="basicInfoList">
                      <div className="aboutMeTitle">Drink?</div>
                      <div className="aboutMeDetail">{this.state.drinker}</div>
                  </div>

                  <div className="basicInfoList">
                      <div className="aboutMeTitle">Travel Type</div>
                      <div className="aboutMeDetail">{this.state.typeoftraveller}</div>
                  </div>





              </div>
            </div>




                <div className="details">

                  <div className="detailHeader">
                  <div>More Info</div>
                  </div>



                  <div className="detailBody">
                      <div className="moreInfoList">
                        <div className="mt">Location</div>
                        <div className="aboutMeDetail">{this.state.city + ', ' + this.state.country}</div>
                      </div>


                      <div className="moreInfoList">
                        <div className="mt">Mind HangingOut with People Who Drink/Smoke?</div>
                        <div className="aboutMeDetail">{this.state.dstolerance}</div>
                      </div>


                      <div className="moreInfoList">
                          <div className="mt">Countries Visited</div>
                          <div className="aboutMeDetail">{this.state.visited_countries}</div>
                      </div>


                      <div className="moreInfoList">
                          <div className="mt">Languages</div>
                          <div className="aboutMeDetail">{this.state.Fluent_Languages}</div>
                      </div>





                  </div>
              </div>





          </div>




          <div className="InnerRight">
              <div className="profileHeader">

                <div className="HeaderName">{this.state.firstname + ' ' + this.state.lastname}</div>
                <div className="HeaderLoc">
                {

                      this.state.squad_status?
                      <div className="headerItem">Avaliable to Join Squad,</div>
                      :
                      ""

                  }
                  {
                      this.state.avaliableforhostdinner?
                      <div>Avaliable to Host Dinner</div>
                      :
                      ""
                }
                </div>
                <div className="HeaderDescri">{this.state.description}</div>


                {this.state.flag?
                <button className="editProfileBtn" onClick={this.handleClickEdit}>Edit My Profile</button>
                :
                <div>
                  <button className="editProfileBtn" onClick={this.selectSquad}>Invite to Squad</button>
                  <button className="editProfileBtn inviteBtn">Dinner Host Request</button>
                </div>
              }
              </div>






              <div className="reviewContainer">
                <div className="reviews">Reviews</div>

                <div className="addReview" onClick={this.postReview}>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <div>Add Your Review</div>
                </div>


                  <div className="reviewInner">
                    {this.state.reviewsDisplay.map((review,idx) => {
                      return(
                        <div key={idx}>
                          <div className="singleReview">
                            <div>
                              <div className="rs_avatar">
                                <img src={review.profile_img_url} alt='fixed' />
                              </div>
                              <div className="rs_name">{review.firstname}</div>
                            </div>

                            <div className="rs_content_wrapper">
                              <div className="rs_content">
                                {review.review}
                              </div>

                              <span>
                                <div className="re_loc">From {review.city + ',' + review.country}</div>
                                <i className="fa fa-flag-o" aria-hidden="true"></i>
                              </span>
                            </div>


                          </div>

                          <div className="hrline"></div>
                        </div>
                      )
                    })}





                  </div>
                </div>
              </div>


        </div>
      </div>
    </div>
    )
  }
}
