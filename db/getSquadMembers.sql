select * from user_Squad join users on users.userid = user_Squad.userid where user_Squad.squad_id = $1
