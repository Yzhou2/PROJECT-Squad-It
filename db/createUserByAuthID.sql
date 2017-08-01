insert into users (FirstName, authid) values ($1, $2)
returning FirstName, authid;
