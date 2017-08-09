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
    console.log('server req.user get', req.user)
    db.get_user_profile([req.user.authid]).then(

      user => res.status(200).send(user))


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
    db.insertTrip([req.body.Country, req.body.City, req.body.Arrival, req.body.Depart, req.body.LVCity, req.body.LVState, req.body.LVCountry, req.user.userid]).then(trip => res.status(200).send(trip))
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
    console.log(req.params, 'req.param')
    db.removeSquad([req.params.id, req.user.userid, req.params.id]).then( past_squad => {
      res.status(200).send(past_squad)})
  }
}
