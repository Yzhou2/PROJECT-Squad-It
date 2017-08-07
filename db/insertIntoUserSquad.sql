insert into user_Squad (UserID, squad_id) values ($1, $2)
returning UserID, squad_id
