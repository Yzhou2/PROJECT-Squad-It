CREATE TABLE users (
    UserID Serial PRIMARY KEY,
    authID TEXT,
    LastName varchar(255),
    FirstName varchar(255),
    Email varchar(255),
    Gender TEXT,
    Squad_Status TEXT,
    City TEXT,
    Country TEXT,
    DOB DATE,
    profile_img_url TEXT DEFAULT 'https://i.imgur.com/rbClaeN.png',
    Smoker TEXT,
    Drinker TEXT,
    DSTolerance TEXT,
    Tags TEXT,
    AvaliableForHostDinner Text,
    TypeOfTraveller Text,
    photo_album_id int,
    Occupation TEXT,
    visited_countries TEXT,
    Fluent_Languages TEXT,
    Description TEXT
);



CREATE TABLE travelPlan (
  TravelPlan_ID Serial PRIMARY KEY,
  Country TEXT,
  City TEXT,
  Arrival varchar(255),
  arDay TEXT,
  arMonth TEXT,
  arYEAR TEXT,
  Depart varchar(255),
  dpDay Text,
  dpMonth Text,
  dpYear Text,
  LVCity TEXT,
  LVState TEXT,
  LVCountry TEXT,
  UserID int REFERENCES users(UserID)
)


CREATE Table user_Squad (
  UserID int REFERENCES users(UserID),
  squad_id int REFERENCES squad(squad_id)
)


CREATE TABLE squad (
  squad_id Serial PRIMARY KEY,
  name TEXT,
  Description TEXT,
  Address TEXT,
  City TEXT,
  Country TEXT,
  StartDate Date,
  EndDate Date,
  Memberlist_Id Int,
  Current TEXT DEFAULT true
)


CREATE Table bucketList (
  BucketList_Id int,
  squad_id int REFERENCES squad(squad_id)
  title TEXT,
  Stars Int,
  Location TEXT
)

CREATE Table Message (
  id Serial PRIMARY KEY,
  squad_id int REFERENCES squad(squad_id),
  content TEXT,
  sender TEXT,
  TM TEXT,
)

Create Table reviews (
  id Serial PRIMARY KEY,
  to_userid int REFERENCES users(userid),
  from_userid int,
  review TEXT
)
