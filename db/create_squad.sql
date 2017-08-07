insert into squad (name, description, address, city, country, startdate, enddate) values ($1, $2, $3, $4, $5, $6, $7)
returning *;
