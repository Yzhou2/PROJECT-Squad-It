const axios = require('axios');
const keys = require('../keys');

module.exports = {
  getPic: (req, res) => {
    const db = req.app.get('db');
    const { params } = req;
    db.get_profile_url([params.authID]).then(
      url => res.status(200).send(url)
    )
  },
  getUserProfile: (req, res) => {
    const db = req.app.get('db');
    if (!req.query.userid) {
    db.get_user_profile([req.user.authid]).then(
      user => {
        console.log(user, 'inside if')
        res.status(200).send(user)
      })
    } else {
      console.log(req.query, 'this is req.query')
      db.get_user_profile([req.query.userid]).then(
        user => res.status(200).send(user))
    }
  },

  updateProfile: (req, res) => {
    const db = req.app.get('db');
    console.log('server req.user update', req.user)
    db.update_user_profile([req.body.Gender, req.body.Squad_Status, req.body.City, req.body.Country, req.body.Smoker, req.body.Drinker, req.body.DSTolerance, req.body.AvaliableForHostDinner, req.body.TypeOfTraveller, req.body.Occupation, req.body.Description, req.user.authid]).then(
      user => res.status(200).send(user)
    )
  },

  CreateSquad: (req, res) => {
    console.log('create_squad')

    const db = req.app.get('db');
    db.create_squad([req.body.name, req.body.Description, req.body.Address, req.body.City, req.body.Country, req.body.StartDate, req.body.EndDate]).then(
      squad => {
        console.log(req.user, 'req.userrr')
          db.insertIntoUserSquad([req.user.userid, squad[0].squad_id]).then(
          squad => res.status(200).send(squad)
        )
      })
  },

  displaySquadInfo: (req, res) => {
    const db = req.app.get('db');
    db.getSquadInfo([req.user.userid]).then(
      squadInfo => {
        console.log(squadInfo, 'this is squad infooooooooo!!!')
        res.status(200).send(squadInfo)
      }
    )
  },


  createTrip: (req, res) => {
    const db = req.app.get('db');
    console.log(req.user,'yas sure')
    db.insertTrip([req.body.Country, req.body.City, req.body.Arrival,
                   req.body.arDay, req.body.arMonth, req.body.arYEAR,
                   req.body.Depart, req.body.dpDay, req.body.dpMonth,
                   req.body.dpYear, req.body.LVCity, req.body.LVState,
                   req.body.LVCountry, req.user.userid]).then(trip => res.status(200).send(trip))
  },

  viewTrip: (req, res) => {
    const db = req.app.get('db');
    db.viewTrip([req.user.userid]).then((tripInfo) => {
      res.status(200).send(tripInfo)})
  },

  updateCurrentSquad: (req, res) => {
    // console.log(req.body)
    const db = req.app.get('db');
    // console.log('userid!!!!!', req.body.eachSquad.squad_id)
    db.updateCurrentFromSquad([req.user.userid, req.body.eachSquad.squad_id]).then( squad => {
      res.status(200).send(squad)})
  },

  getPastSquad: (req, res)=>{
    const db = req.app.get('db');
    db.getPastSquad([req.user.userid]).then( past_squad => {
      res.status(200).send(past_squad)})
  },

  removeTrip: (req, res) => {
    const db = req.app.get('db');
    db.removeTrip([req.user.userid, req.params.id]).then( past_squad => {
      res.status(200).send(past_squad)})
  },

  removeSquad: (req, res) => {
    const db = req.app.get('db');
    // console.log(req.params, 'req.param')
    db.removeSquad([req.params.id, req.user.userid, req.params.id]).then( past_squad => {
      res.status(200).send(past_squad)})
  },

  editTrip: (req, res) => {
    const db = req.app.get('db');
    console.log('this is req.body for edit trip', req.body)
    db.editTripPlan([req.body.eachPlan.country, req.body.eachPlan.city, req.body.eachPlan.arrival,
                    req.body.eachPlan.arday, req.body.eachPlan.armonth, req.body.eachPlan.aryear,
                    req.body.eachPlan.depart, req.body.eachPlan.dpday, req.body.eachPlan.dpmonth,
                    req.body.eachPlan.dpyear, req.body.eachPlan.lcvity, req.body.eachPlan.lcstate,
                    req.body.eachPlan.lvcountry, req.body.eachPlan.travelplan_id, req.body.eachPlan.userid]).then(  newPlan => {
      res.status(200).send(newPlan)})
  },

//chatroom controllers

  viewMessages: (req, res) => {
    const db = req.app.get('db');
    console.log(req.params, 'this is params for message')
    db.viewMessages([req.params.squad_id]).then( squadMessage => {
      res.status(200).send(squadMessage)})
  },

  getEvent: (req, res) => {
    console.log(req.params.city, 'this is the city we are searching')
    axios.get(`http://api.eventful.com/json/events/search?app_key=${keys.eventAPI}&location=${req.params.city}`).then(
      response => res.send(response.data)
        // console.log('hey yo im response', response)

      )
  },


  getUserByDest: (req, res) => {
    const db = req.app.get('db');
    // console.log(req.params.dest, 'desti')
    db.getUserByDes([req.params.dest]).then( users => {
      // console.log(users, 'this is the users')
    res.status(200).send(users)})
  },
}
