insert into message (squad_id, content, sender, TM) value ($1, $2, $3, $4)
  returning *;
