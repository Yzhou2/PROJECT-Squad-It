update squad set Current = 'false' from user_Squad where user_Squad.userid = $1 and squad.squad_id = $2
