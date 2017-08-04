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
    console.log('server req.user', req.user)
    db.get_user_profile([req.user.authid]).then(
      user => res.status(200).send(user))
    // res.status(200).send({name: "yiran"})

  },

  updateProfile: (req, res) => {
    const db = req.app.get('db');
    db.update_user_profile([req.body.gender,req.user.authid]).then(
      user => res.status(200).send(user)
    )
  },

  CreateSquad: (req, res) => {
    const db = req.app.get('db');
    db.create_squad([req.body.name]).then(
      squad => res.status(200).send(squad)
    )
  },
}
