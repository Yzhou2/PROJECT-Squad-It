select * from bucketlist join user_squad on bucketlist.squad_id = user_squad.squad_id where userid = $1 ORDER BY bucketlist.stars;
