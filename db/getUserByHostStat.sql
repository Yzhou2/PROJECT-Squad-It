select * from users join travelplan on users.userid = travelplan.userid where travelplan.city Like $1 or travelplan.country Like $1 and users.avaliableforhostdinner like 'yes'; 
