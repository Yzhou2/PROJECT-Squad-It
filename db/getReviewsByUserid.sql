select * from reviews join users on reviews.from_userid = users.userid where reviews.to_userid = $1;
