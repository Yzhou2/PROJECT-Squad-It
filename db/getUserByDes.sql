select * from users join travelplan on users.userid = travelplan.userid where travelplan.city=$1 or travelplan.country = $1; 
