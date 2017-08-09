insert into users (FirstName, LastName, authid, Email) values ($1, $2, $3, $4)
returning userid, FirstName, LastName, authid, Email;
