CREATE TABLE FoodRegimens (
Id INT PRIMARY KEY IDENTITY(1,1),
[Name] nvarchar(25)
)

CREATE TABLE PhilosophySchools (
Id INT PRIMARY KEY IDENTITY(1,1),
[Name] nvarchar(25)
)

CREATE TABLE UserProfiles (
Id INT PRIMARY KEY IDENTITY(1,1),
Email NVARCHAR(40),
[Password] NVARCHAR(20),
FirstName NVARCHAR(20),
BirthDate DATE,
Mantra NVARCHAR(200),
FoodRegimenFK INT FOREIGN KEY REFERENCES FoodRegimens(Id),
PhilosphySchoolFK INT FOREIGN KEY REFERENCES PhilosophySchools(Id),
)

CREATE TABLE [dbo].[DailySurveys](
	[Id] [int] PRIMARY KEY IDENTITY(1,1) NOT NULL,
	[UserId] INT FOREIGN KEY REFERENCES UserProfiles(Id) NULL,
	[EmotionLevel] [int] NULL,
	[EnergyLevel] INT,
	[DailyGoal] [nvarchar](150) NULL,
	[PreviousGoalAchieved] [bit] NULL,
)