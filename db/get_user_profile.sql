SELECT * FROM users join user_Squad on users.userid = user_Squad.userid join squad on squad.squad_id = user_Squad.squad_id WHERE authid = $1;
