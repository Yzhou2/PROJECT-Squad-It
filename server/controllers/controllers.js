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
    // console.log('server req.user', req.user)
    db.get_user_profile([req.user.authid]).then(
      user => res.status(200).send(user))


  },

  updateProfile: (req, res) => {
    const db = req.app.get('db');
    // console.log('server req.user', req.user)
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

    // )
    // db.insertIntoUserSquad([req.user.id, ]).then(
    //   squad => res.status(200).send(squad)
    // )
  },
}
