CREATE TABLE users (
    UserID Serial PRIMARY KEY,
    authID TEXT,
    LastName varchar(255),
    FirstName varchar(255),
    Email varchar(255),
    Gender TEXT,
    Address TEXT,
    City TEXT,
    Country TEXT,
    DOB DATE,
    profile_img_url TEXT,
    TravelPlan_ID int,
    Tags_ID int,
    AvaliableForSquad Text,
    AvaliableForHostDinner Text,
    TypeOfTraveller Text,
    photo_album_id int,
    Occupation TEXT,
    visited_country_id Int,
    Fluent_Languages_id int,
    Description TEXT,
    squad_list_id int,
    friends_list_id int
);



CREATE TABLE travelPlan (
  TravelPlan_ID： int，
  Country: TEXT,
  City: TEXT,
  ARRIVAL: DATE,
  DEPART: DATE,
  FOREIGN KEY (UserID) REFERENCES User(UserID)
)；


CREATE Table user_Squad (
  FOREIGN KEY (UserID) REFERENCES User(UserID),
  FOREIGN KEY (squad_id) REFERENCES Squad(squad_id)
)


CREATE TABLE squad (
  squad_id: int PRIMARY KEY,
  name: TEXT,
  Description: TEXT,
  City: TEXT,
  Country: TEXT,
  StartDate：Date,
  EndDate: Date,
  Memberlist_Id: Int,
)


CREATE Table bucketList (
  BucketList_Id: int,
  FOREIGN KEY (squad_id) REFERENCES BucketList(squad_id)
  squad_id: int,
  title: TEXT,
  Stars: Int,
  Location: TEXT
)
