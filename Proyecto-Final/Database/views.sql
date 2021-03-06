-- USE heroku_29b718f30c1a210;
USE alley_cat_db;

-- CREATE VIEW users_display AS SELECT username, activity, lastActive
	-- FROM heroku_29b718f30c1a210.users LEFT JOIN heroku_29b718f30c1a210.playerStatistics USING (usernameID);
    
#DESCRIBE users_display;
SELECT * FROM users;
SELECT * FROM user_display;
SELECT activity, lastActive FROM user_display;

SELECT * FROM gameStatistics;
SELECT * FROM user_point_stats;
SELECT HighScore, AveragePoints, GamesPlayed, TotalPoints FROM user_point_stats;

SELECT * FROM builderStatistics;
SELECT * FROM user_builder_stats;
SELECT LevelsCreated, Demon, Dragon, Goblin, Muddy, Zombie, Box, FloorSpikes, Hole,
OgreBoss, ZombieBoss
FROM user_builder_stats;

SELECT * FROM playerStatistics;
SELECT * FROM user_time_played;
SELECT AverageTime, TotalTimePlayed FROM user_time_played;

SELECT * FROM levels;