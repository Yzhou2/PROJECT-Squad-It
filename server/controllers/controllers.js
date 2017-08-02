module.exports = {
  getPic: (req, res) => {
    const db = req.app.get('db');
    const { params } = req;
    db.get_profile_url([params.authID]).then(
      url => res.status(200).send(url)
    )
  },
  getFirstName: (req, res) => {
    const db = req.app.get('db');
    const { params } = req;
    console.log(req.session.user)//undefined
    console.log(req.session)//there's only cookies on the session, i don't see the users info that's been put on the session
    db.get_first_name([params.authid]).then(
      name => res.status(200).send(name[0].firstname)
    )
  },

  updateProfile: (req, res) => {
    const db = req.app.get('db');
    db.get_first_name([params.authid]).then(
      name => res.status(200).send(name[0].firstname)
    )
  },
}
