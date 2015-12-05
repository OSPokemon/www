
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

CREATE TABLE players_pokemon(
  player_id INTEGER,
  box INTEGER,
  pokemon_id INTEGER
);

CREATE TABLE pokemon(
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

CREATE TABLE pokemon_spells(
  pokemon_id INTEGER,
  keybinding TEXT,
  spell_id INTEGER
);

CREATE TABLE pokemon_stats(
  pokemon_id INTEGER,
  stat TEXT,
  ev INTEGER,
  iv INTEGER,
  value INTEGER
);

CREATE TABLE spells(
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT,
  casttime NUMBER,
  cooldown NUMBER,
  movecast INTEGER,
  manacost INTEGER,
  range NUMBER,
  targettype INTEGER,
  graphic TEXT
);

CREATE TABLE spell_reagents(
  spell_id INTEGER,
  item_id INTEGER,
  quantity INTEGER
);

CREATE TABLE species(
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT,
  tag TEXT,
  description TEXT,
  hidden_ability INTEGER,
  genderless INTEGER,
  gender_ratio NUMBER,
  catch_rate INTEGER,
  breedable INTEGER,
  egg_cycles INTEGER,
  height NUMBER,
  weight NUMBER,
  xp_yield INTEGER,
  xp_curve INTEGER,
  body_style TEXT,
  color TEXT,
  tameness INTEGER
);

CREATE TABLE species_stats(
  species_id INTEGER,
  stat TEXT,
  value INTEGER
);

CREATE TABLE species_spells(
  species_id INTEGER,
  spell_id  INTEGER,
  ai_usable INTEGER
);

CREATE TABLE species_types(
  species_id INTEGER,
  type_id INTEGER
);

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
