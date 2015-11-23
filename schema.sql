
CREATE TABLE animations(
  type TEXT,
  id INTEGER,
  animationtype INTEGER,
  animation TEXT 
);

CREATE TABLE class(
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT
  description TEXT
);

CREATE TABLE moves(
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT,
  t INTEGER,
  category TEXT,
  description TEXT,
  pp INTEGER,
  power INTEGER,
  accuracy NUMBER,
  targeter INTEGER,
  casttime NUMBER,
  cooldown NUMBER,
  contestcategory INTEGER,
  appeal INTEGER,
  jam INTEGER,
  contestdescription TEXT,
  priority INTEGER
);

CREATE TABLE moves_pokemon(
  move_id INTEGER,
  pokemon_id INTEGER
);

CREATE TABLE players(
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT,
  class INTEGER,
  health INTEGER,
  maxhealth INTEGER,
  x NUMBER,
  y NUMBER,
  password TEXT
);

create table players_pokemon(
  player_id INTEGER,
  box INTEGER,
  pokemon_id INTEGER
);

create table pokemon(
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT,
  x NUMBER,
  y NUMBER,
  species INTEGER,
  level INTEGER,
  experience INTEGER,
  ability INTEGER,
  friendship INTEGER,
  gender INTEGER,
  nature INTEGER,
  height NUMBER,
  weight NUMBER,
  originaltrainer INTEGER,
  shiny INTEGER,
  item INTEGER
);

create table pokemon_stats(
  pokemon_id INTEGER,
  stat TEXT,
  ev INTEGER,
  iv INTEGER,
  value INTEGER
);

-- CREATE TABLE species(
--   id INTEGER PRIMARY KEY NOT NULL,
--   name TEXT,
--   tag TEXT,
--   description TEXT,
--   hidden_ability INTEGER,
--   genderless INTEGER,
--   gender_ratio NUMBER,
--   catch_rate INTEGER,
--   breedable INTEGER,
--   egg_cycles INTEGER,
--   height NUMBER,
--   weight NUMBER,
--   xp_yield INTEGER,
--   xp_curve INTEGER,
--   body_style TEXT,
--   color TEXT,
--   tameness INTEGER
-- );

-- CREATE TABLE species_types(
--   species_id INTEGER,
--   type_id INTEGER
-- );

-- CREATE TABLE abilities_species(
--   ability_id INTEGER,
--   species_id INTEGER
-- );

-- CREATE TABLE egggroups_species(
--   egggroup TEXT,
--   species_id INTEGER
-- );

-- CREATE TABLE effortvalues_species(
--   species_id INTEGER,
--   stat TEXT,
--   value INTEGER
-- );

-- CREATE TABLE species_stats(
--   species_id INTEGER,
--   stat TEXT,
--   value INTEGER
-- );

-- CREATE TABLE players_pokemon (
--   player_id INTEGER,
--   pokemon_id INTEGER
-- );
