insert into travelPlan (Country, City, Arrival, Depart, LVCity, LVState, LVCountry, UserID) values ($1, $2, $3, $4, $5, $6, $7, $8)
returning *;
