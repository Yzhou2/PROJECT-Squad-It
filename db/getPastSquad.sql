select * from squad join user_Squad on squad.squad_id = user_Squad.squad_id where current = 'false' and userid = $1
