CREATE TABLE IF NOT EXISTS Activities (
	ActivityID int NOT NULL auto_increment UNIQUE,
    ActivityName varchar(255) NOT NULL,
    ActivityType int not null,
    Location int,
    MinXPPerHour int,
    MaxXPPerHour int,
    MinGPPerHour int,
    MaxGPPerHour int,
    Icon varchar(255),
    PRIMARY KEY (ActivityID),
    FOREIGN KEY (ActivityType) REFERENCES ActivityTypes (ID),
    FOREIGN KEY (LOCATION) REFERENCES ActivityLocations(LocationID)
);

CREATE TABLE IF NOT EXISTS ActivityLocations (
	LocationID int not null auto_increment unique,
    Region int,
    PositionX double,
    positionY double,
    PRIMARY KEY (LocationID)
);

CREATE TABLE IF NOT EXISTS Regions (
	RegionID int not null unique,
    RegionName varchar(255) not null,
    PRIMARY KEY (RegionID)
);

#inserts all regions
INSERT INTO Regions VALUES (1,"Misthalin");
INSERT INTO Regions VALUES (2,"Asgarnia");
INSERT INTO Regions VALUES (3,"Morytania");
INSERT INTO Regions VALUES (4,"Wilderness");
INSERT INTO Regions VALUES (5,"Zeah");
INSERT INTO Regions VALUES (6,"Varlamore");
INSERT INTO Regions VALUES (7,"Tirannwn");
INSERT INTO Regions VALUES (8,"Feldip Hills");
INSERT INTO Regions VALUES (9,"Fremennik Isles");
INSERT INTO Regions VALUES (10,"Fremennik Province");
INSERT INTO Regions VALUES (11,"Troll Country");

CREATE TABLE IF NOT EXISTS RelatedSkills (
	ID int NOT NULL auto_increment unique,
    ActivityID int not null,
    SkillID int not null,
    primary key (ID),
    FOREIGN KEY (ActivtyID) REFERENCES Activities (ActivityID),
    foreign key (SkillID) REFERENCES Skills (SkillID)
);

Create table if not exists ActivityTypes (
	ID int not null UNIQUE,
    ActivityType varchar(255),
    PRIMARY KEY (ID)
);

#adds all types
INSERT INTO ActivityTypes VALUES (1, "Combat");
INSERT INTO ActivityTypes VALUES (2, "Gathering");
INSERT INTO ActivityTypes VALUES (3, "Production");
INSERT INTO ActivityTypes VALUES (4, "Utility");

Create table if not exists Skills (
	SkillID int not null UNIQUE,
    skillName varchar(255) not null,
    SkillType int not null,
    Icon varchar(255),
    foreign key(SkillType) REFERENCES ActivityTypes (ID),
    primary key(SkillID)
);

#adds all skills
INSERT INTO Skills VALUES (1,"Attack", 1);
INSERT INTO Skills VALUES (2,"Strength", 1);
INSERT INTO Skills VALUES (3,"Defence", 1);
INSERT INTO Skills VALUES (4,"HitPoints", 1);
INSERT INTO Skills VALUES (5,"Ranged", 1);
INSERT INTO Skills VALUES (6,"Magic", 1);
INSERT INTO Skills VALUES (7,"Prayer",  1);

INSERT INTO Skills VALUES (8,"Mining", 2);
INSERT INTO Skills VALUES (9,"Woodcutting", 2);
INSERT INTO Skills VALUES (10,"Fishing", 2);
INSERT INTO Skills VALUES (11,"Hunter", 2);
INSERT INTO Skills VALUES (12,"Farming", 2);

INSERT INTO Skills VALUES (13,"Smithing", 3);
INSERT INTO Skills VALUES (14,"Cooking", 3);
INSERT INTO Skills VALUES (15,"Firemaking", 3);
INSERT INTO Skills VALUES (16,"Runecraft", 3);
INSERT INTO Skills VALUES (17,"Construction", 3);
INSERT INTO Skills VALUES (18,"Crafting", 3);
INSERT INTO Skills VALUES (19,"Herblore", 3);
INSERT INTO Skills VALUES (20, "Fletching", 3);

INSERT INTO Skills VALUES (21,"Thieving", 4);
INSERT INTO Skills VALUES (22,"Slayer", 4);
INSERT INTO Skills VALUES (23,"Agility", 4);

#creates an example activity on the map

#(name, type, location, minXp, maxXP, minGp, maxGP, icon)
INSERT INTO Activities VALUES ("Hunting Black chinchompas", 2, 1, 110000, 180000, 1000000, 2500000);
#(region, posx, posy)
INSERT INTO ActivityLocations VALUES (4,0,0);
#(activityID, skillID)
INSERT INTO RelatedSkills VALUES (1,11);

