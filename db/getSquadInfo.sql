select * from user_Squad join squad on user_Squad.squad_id = squad.squad_id where user_Squad.userid = $1 And current='true'
  -- //also get from squad where squad_id matches user_Squad.squad_id
