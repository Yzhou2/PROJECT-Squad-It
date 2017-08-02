insert into users (FirstName, LastName, authid, Email) values ($1, $2, $3, $4)
returning FirstName, LastName, authid, Email;
