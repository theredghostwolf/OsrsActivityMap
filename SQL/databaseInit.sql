CREATE DATABASE osrsactivitymap;
USE osrsactivitymap;

Drop TABLE IF EXISTS RelatedSkills;
DROP TABLE IF EXISTS RecommendedSkills;
DROP TABLE IF EXISTS RequiredSkills;
DROP TABLE IF EXISTS Activities;
DROP TABLE IF EXISTS ActivityLocations;
DROP TABLE IF EXISTS Regions;
DROP TABLE IF EXISTS Skills;
DROP TABLE IF EXISTS ActivityTypes;

DROP TABLE Spellbooks;
DROP TABLE IF EXISTS InventorySetups;
DROP TABLE IF EXISTS GearSetups;
DROP TABLE IF EXISTS Items;

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
INSERT INTO Regions VALUES (5,"Kourend");
INSERT INTO Regions VALUES (6,"Varlamore");
INSERT INTO Regions VALUES (7,"Tirannwn");
INSERT INTO Regions VALUES (8,"Fremennik");
INSERT INTO Regions VALUES (9,"Karamja");
INSERT INTO Regions VALUES (10,"Desert");



Create table if not exists Skills (
	SkillID int not null UNIQUE,
    skillName varchar(255) not null,
    SkillType int not null,
    Icon varchar(255),
    foreign key(SkillType) REFERENCES ActivityTypes (ID),
    primary key(SkillID)
);

#adds all skills
INSERT INTO Skills VALUES (1,"Attack", 1, 'Attack_icon.png');
INSERT INTO Skills VALUES (2,"Strength", 1, 'Strength_icon.png');
INSERT INTO Skills VALUES (3,"Defence", 1, 'Defence_icon.png');
INSERT INTO Skills VALUES (4,"HitPoints", 1, 'Hitpoints_icon.png');
INSERT INTO Skills VALUES (5,"Ranged", 1, 'Ranged_icon.png');
INSERT INTO Skills VALUES (6,"Magic", 1, 'Magic_icon.png');
INSERT INTO Skills VALUES (7,"Prayer",  1, 'Prayer_icon.png');

INSERT INTO Skills VALUES (8,"Mining", 2, 'Mining_icon.png');
INSERT INTO Skills VALUES (9,"Woodcutting", 2, 'Woodcutting_icon.png');
INSERT INTO Skills VALUES (10,"Fishing", 2, 'Fishing_icon.png');
INSERT INTO Skills VALUES (11,"Hunter", 2, 'Hunter_icon.png');
INSERT INTO Skills VALUES (12,"Farming", 2, 'Farming_icon.png');

INSERT INTO Skills VALUES (13,"Smithing", 3, 'Smithing_icon.png');
INSERT INTO Skills VALUES (14,"Cooking", 3, 'Cooking_icon.png');
INSERT INTO Skills VALUES (15,"Firemaking", 3, 'Firemaking_icon.png');
INSERT INTO Skills VALUES (16,"Runecraft", 3, 'Runecraft_icon.png');
INSERT INTO Skills VALUES (17,"Construction", 3, 'Construction_icon.png');
INSERT INTO Skills VALUES (18,"Crafting", 3, 'Crafting_icon.png');
INSERT INTO Skills VALUES (19,"Herblore", 3, 'Herblore_icon.png');
INSERT INTO Skills VALUES (20, "Fletching", 3, 'Flechting_icon.png');

INSERT INTO Skills VALUES (21,"Thieving", 4, 'Thieving_icon.png');
INSERT INTO Skills VALUES (22,"Slayer", 4, 'Slayer_icon.png');
INSERT INTO Skills VALUES (23,"Agility", 4, 'Agility_icon.png');

CREATE TABLE IF NOT EXISTS Spellbooks (
	ID int not null unique,
    Name varchar(255) not null,
    Icon varchar(255),
    primary key (ID)
);

INSERT INTO Spellbooks (id, name) VALUES (1, "standard");
INSERT INTO Spellbooks (id, name) VALUES (2, "arceuus");
INSERT INTO Spellbooks (id, name) VALUES (3, "ancient");
INSERT INTO Spellbooks (id, name) VALUES (4, "lunar");

CREATE TABLE IF NOT EXISTS ActivityLocations (
	LocationID int not null auto_increment unique,
    Region int,
    PositionX double,
    positionY double,
    PRIMARY KEY (LocationID),
    FOREIGN KEY (Region) REFERENCES Regions (RegionID) 
);

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


CREATE TABLE IF NOT EXISTS RelatedSkills (
	ID int NOT NULL auto_increment unique,
    ActivityID int not null,
    SkillID int not null,
    primary key (ID),
    FOREIGN KEY (ActivityID) REFERENCES Activities (ActivityID),
    foreign key (SkillID) REFERENCES Skills (SkillID)
);

CREATE TABLE IF NOT EXISTS RequiredSkills (
	ID int not null auto_increment unique,
    ActivityID int not null,
    SkillID int not null,
    Level int not null,
    primary key (ID),
    FOREIGN KEY (ActivityID) REFERENCES Activities (ActivityID),
    foreign key (SkillID) REFERENCES Skills (SkillID)
);

CREATE TABLE IF NOT EXISTS RecommendedSkills (
	ID int not null auto_increment unique,
    ActivityID int not null,
    SkillID int not null,
    Level int not null,
    primary key (ID),
    FOREIGN KEY (ActivityID) REFERENCES Activities (ActivityID),
    foreign key (SkillID) REFERENCES Skills (SkillID)
);

#stores all items in the game
CREATE TABLE IF NOT EXISTS Items (
	ID int not null unique,
    Name varchar(255),
    Icon varchar(255),
    Primary KEY(ID)
);

CREATE TABLE IF NOT EXISTS InventorySetups(
	ID int not null unique,
    name varchar(255),
    slot1 int,
    slot2 int,
    slot3 int,
    slot4 int,
    
    slot5 int,
    slot6 int,
    slot7 int,
    slot8 int,
    
    slot9 int,
    slot10 int,
    slot11 int,
    slot12 int,
    
    slot13 int,
    slot14 int,
    slot15 int,
    slot16 int,
    
    slot17 int,
    slot18 int,
    slot19 int,
    slot20 int,
    
    slot21 int,
    slot22 int,
    slot23 int,
    slot24 int,
    
    slot25 int,
    slot26 int,
    slot27 int,
    slot28 int,
    Primary Key (ID)
);

CREATE TABLE IF NOT EXISTS GearSetups (
	ID int not null unique,
    HeadSlot int,
    CapeSlot int,
    NeckSlot int,
    AmmunitionSlot int,
    WeaponSlot int,
    ShieldSlot int,
    BodySlot int,
    LegsSlot int,
    HandsSlot int,
    FeetSlot int,
    RingSlot int,
    primary key (ID)
);

#creates an example activity on the map
#(region, posx, posy)
INSERT INTO ActivityLocations VALUES (1,4,1450,250);
#(name, type, location, minXp, maxXP, minGp, maxGP, icon)
INSERT INTO Activities VALUES (1,"Hunting Black chinchompas", 2, 1, 110000, 180000, 1000000, 2500000, null);
#(activityID, skillID)
INSERT INTO RelatedSkills VALUES (1,1,11);

#(region, posx, posy)
INSERT INTO ActivityLocations VALUES (2,8,750,200);
#(name, type, location, minXp, maxXP, minGp, maxGP, icon)
INSERT INTO Activities VALUES (2,"Killing Vorkath", 2, 2, 110000, 180000, 1000000, 2500000, null);
#(activityID, skillID)
INSERT INTO RelatedSkills VALUES (2,2,1);

INSERT INTO ActivityLocations VALUES (3,5,300,200);
INSERT INTO Activities VALUES (3, "Slayer", 1,3, 15000,80000,250000,4000000, null);
INSERT INTO RelatedSkills VALUES (3,3,22);

INSERT INTO ActivityLocations VALUES (4,5,350,350);
INSERT INTO Activities VALUES (4, "Cutting redwoods", 2, 4, 60000,80000, 300000,400000, null);
INSERT INTO RelatedSkills VALUES (4,4,9);

INSERT INTO ActivityLocations VALUES (5,10,1575,950);
INSERT INTO Activities VALUES (5, "Pyramid Plunder", 2, 5, 30000,180000, 100000,600000, null);
INSERT INTO RelatedSkills VALUES (5,5,21);

INSERT INTO ActivityLocations VALUES (6,6,150,650);
#(name, type, location, minXp, maxXP, minGp, maxGP, icon)
INSERT INTO Activities VALUES (6,"Hunter Rumours", 2, 6, 110000, 180000, 1000000, 2500000, null);
#(activityID, skillID)
INSERT INTO RelatedSkills VALUES (6,6,11);




