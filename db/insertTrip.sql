insert into travelPlan (Country, City, Arrival, arDay, arMonth, arYEAR, Depart, dpDay, dpMonth, dpYear, LVCity, LVState, LVCountry, UserID) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
returning *;
