insert into squad (name, Description, Address, City, Country, StartDate, EndDate) values ($1, $2, $3, $4, $5, $6, $7)
returning name, Description, Address, City, Country, StartDate, EndDate;
