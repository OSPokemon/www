
CREATE TABLE players(
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT,
  class INTEGER,
  health INTEGER,
  maxhealth INTEGER,
  x INTEGER,
  y INTEGER,
  password TEXT
);

CREATE TABLE class(
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT
  description TEXT
);

-- Graphics Tables --

CREATE TABLE animations(
  id INTEGER,
  animation_type INTEGER,
  animation TEXT
);

-- Old Code --

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
