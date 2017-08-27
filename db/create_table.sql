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
  BucketList_Id Serial PRIMARY KEY,
  squad_id int REFERENCES squad(squad_id),
  title TEXT,
  description Text,
  Stars Int
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
  to_userid int REFERENCES users(userid)
  from_userid int
  review TEXT
 )



//dummy users database
insert into users (lastname,
             firstname , gender,
             squad_status, city, country,
             profile_img_url, smoker, drinker,
             dstolerance, avaliableforhostdinner,
             typeoftraveller, occupation, visited_countries,
             fluent_languages, description) values(
               'Mesquita', 'Barbara', 'Female', 'Yes', 'Orem', 'USA',
               'https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/12565474_949403248473344_1195459585370058621_n.jpg?oh=69ad601d146a11682aab5168a6913846&oe=5A1B90AC',
               'No', 'No', 'No', 'Yes', 'Budget', 'Student', 'Brazil', 'English', 'Live your Life and Chase Your Dream'
             )


insert into users (lastname,
              firstname , gender,
                squad_status, city, country,
                profile_img_url, smoker, drinker,
                dstolerance, avaliableforhostdinner,
                typeoftraveller, occupation, visited_countries,
                fluent_languages, description) values(
                'Tinnoco', 'Coni', 'Female', 'Yes', 'Orem', 'USA',
                'https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/15267992_10154837761339047_3235061157528349456_n.jpg?oh=d261b136a9b3c173fce3ad8c96a55b25&oe=5A2667FD',
                'No', 'No', 'No', 'No', 'Luxury', 'Student', 'Peru', 'English', 'I Can Be Really Fun Somtimes'
              )

insert into users (lastname,
               firstname , gender,
               squad_status, city, country,
               profile_img_url, smoker, drinker,
               dstolerance, avaliableforhostdinner,
               typeoftraveller, occupation, visited_countries,
               fluent_languages, description) values(
                 'Heathcote', 'Sam', 'Male', 'Yes', 'Provo', 'USA',
                 'https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/12141547_10206868052712446_8769179049275015892_n.jpg?oh=2b290d458af5d20a1d349bf2c2c61fec&oe=5A3961F6',
                 'No', 'No', 'No', 'No', 'Budget', 'Student', 'China, Sri Lanka, Thiland', 'English', 'Somtimes I Wonder If Im Gypsty'
               )


insert into users (lastname,
               firstname , gender,
               squad_status, city, country,
               profile_img_url, smoker, drinker,
               dstolerance, avaliableforhostdinner,
               typeoftraveller, occupation, visited_countries,
               fluent_languages, description) values(
                 'Wong', 'Benjamin', 'Male', 'Yes', 'Provo', 'USA',
                 'https://scontent.fmkc1-1.fna.fbcdn.net/v/t31.0-8/13147439_527225554131162_6042463643588597755_o.jpg?oh=f167bd7fe5aa7b7f2ed63e403ed57132&oe=5A30B246',
                 'Yes', 'Yes', 'Yes', 'Yes', 'Luxury', 'Student', 'China, USA', 'English, Chinese', 'Im Batman'
               )


insert into users (lastname,
               firstname , gender,
               squad_status, city, country,
               profile_img_url, smoker, drinker,
               dstolerance, avaliableforhostdinner,
               typeoftraveller, occupation, visited_countries,
               fluent_languages, description) values(
                 'Grande', 'Amanda', 'Female', 'Yes', 'Los Angeles', 'USA',
                 'http://data.whicdn.com/images/243037576/large.jpg',
                 'Yes', 'Yes', 'Yes', 'Yes', 'Budget', 'Real Estaet Broker', 'USA, Italy, France', 'English, Dutch', 'Hey Wheres My Squad'
               )


insert into users (lastname,
                firstname , gender,
                squad_status, city, country,
                profile_img_url, smoker, drinker,
                dstolerance, avaliableforhostdinner,
                typeoftraveller, occupation, visited_countries,
                fluent_languages, description) values(
                  'Alverez', 'Jay', 'Male', 'Yes', 'Ibiza', 'Spain',
                  'https://i0.wp.com/www.dsection.media/wp-content/uploads/2017/05/Captura-de-ecra%CC%83-2017-05-26-a%CC%80s-12.24.55.png?w=733',
                  'Yes', 'Yes', 'Yes', 'Yes', 'Luxury', 'Photagrapher', 'USA, Italy, France, Cuba, Bali', 'English', 'Sup Squads'
                )





//dummy travelplan database
insert into travelplan (country,city,arrival,arday,armonth,aryear,depart,dpday,dpmonth,dpyear,lvcity,lvstate,lvcountry,userid) values (
  'USA', 'New York', '2017-10-10', '10', '10', '2017', '2017-10-17', '17', '10', '2017', 'New York', 'New York', 'USA', 3
)

insert into travelplan (country,city,arrival,arday,armonth,aryear,depart,dpday,dpmonth,dpyear,lvcity,lvstate,lvcountry,userid) values (
  'USA', 'New York', '2017-10-12', '12', '10', '2017', '2017-11-12', '12', '11', '2017', 'New York', 'New York', 'USA', 4
)

insert into travelplan (country,city,arrival,arday,armonth,aryear,depart,dpday,dpmonth,dpyear,lvcity,lvstate,lvcountry,userid) values (
  'USA', 'New York', '2017-9-12', '12', '9', '2017', '2017-9-17', '17', '9', '2017', 'New York', 'New York', 'USA', 5
)

insert into travelplan (country,city,arrival,arday,armonth,aryear,depart,dpday,dpmonth,dpyear,lvcity,lvstate,lvcountry,userid) values (
  'USA', 'New York', '2017-12-25', '25', '12', '2017', '2018-01-02', '02', '01', '2017', 'New York', 'New York', 'USA', 6
)

insert into travelplan (country,city,arrival,arday,armonth,aryear,depart,dpday,dpmonth,dpyear,lvcity,lvstate,lvcountry,userid) values (
  'USA', 'New York', '2017-11-01', '01', '11', '2017', '2017-11-08', '08', '11', '2017', 'New York', 'New York', 'USA', 8
)

insert into travelplan (country,city,arrival,arday,armonth,aryear,depart,dpday,dpmonth,dpyear,lvcity,lvstate,lvcountry,userid) values (
  'USA', 'New York', '2017-09-11', '11', '09', '2017', '2017-09-13', '13', '09', '2017', 'New York', 'New York', 'USA', 9
)
