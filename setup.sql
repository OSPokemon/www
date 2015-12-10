-- Animations

INSERT INTO animations (type, id, animationtype, animation)
VALUES ("pokemon", 63, 0, "pokemon-63-portrait.png");

INSERT INTO animations (type, id, animationtype, animation)
VALUES ("pokemon", 63, 1, "pokemon-63-walkdown.gif");

INSERT INTO animations (type, id, animationtype, animation)
VALUES ("pokemon", 63, 2, "pokemon-63-walkright.gif");

INSERT INTO animations (type, id, animationtype, animation)
VALUES ("pokemon", 63, 3, "pokemon-63-walkup.gif");

INSERT INTO animations (type, id, animationtype, animation)
VALUES ("pokemon", 63, 4, "pokemon-63-walkleft.gif");

INSERT INTO animations (type, id, animationtype, animation)
VALUES ("pokemon", 16, 0, "pokemon-16-portrait.png");

INSERT INTO animations (type, id, animationtype, animation)
VALUES ("pokemon", 16, 1, "pokemon-16-walkdown.gif");

INSERT INTO animations (type, id, animationtype, animation)
VALUES ("pokemon", 16, 2, "pokemon-16-walkright.gif");

INSERT INTO animations (type, id, animationtype, animation)
VALUES ("pokemon", 16, 3, "pokemon-16-walkup.gif");

INSERT INTO animations (type, id, animationtype, animation)
VALUES ("pokemon", 16, 4, "pokemon-16-walkleft.gif");

INSERT INTO animations (type, id, animationtype, animation)
VALUES ("trainer", 30, 0, "trainer-30-portrait.png");

INSERT INTO animations (type, id, animationtype, animation)
VALUES ("trainer", 30, 1, "trainer-30-walkdown.gif");

INSERT INTO animations (type, id, animationtype, animation)
VALUES ("trainer", 30, 2, "trainer-30-walkright.gif");

INSERT INTO animations (type, id, animationtype, animation)
VALUES ("trainer", 30, 3, "trainer-30-walkup.gif");

INSERT INTO animations (type, id, animationtype, animation)
VALUES ("trainer", 30, 4, "trainer-30-walkleft.gif");

INSERT INTO animations (type, id, animationtype, animation)
VALUES ("trainer", 26, 0, "trainer-26-portrait.png");

INSERT INTO animations (type, id, animationtype, animation)
VALUES ("trainer", 26, 1, "trainer-26-walkdown.gif");

INSERT INTO animations (type, id, animationtype, animation)
VALUES ("trainer", 26, 2, "trainer-26-walkright.gif");

INSERT INTO animations (type, id, animationtype, animation)
VALUES ("trainer", 26, 3, "trainer-26-walkup.gif");

INSERT INTO animations (type, id, animationtype, animation)
VALUES ("trainer", 26, 4, "trainer-26-walkleft.gif");

-- Spells

INSERT INTO spells (id, name, casttime, cooldown, movecast, manacost, range, targettype, graphic)
VALUES (1001, "TogglePokemonSummon", 500000000, 5000000000, 1, 0, 30, 2, "pokeball-opening.gif");

INSERT INTO spells (id, name, casttime, cooldown, movecast, manacost, range, targettype, graphic)
VALUES (94, "Psychic", 1500000000, 8000000000, 0, 80, 30, 2, "spell-94.gif");

-- Players

-- Players: Zach
INSERT INTO players (name, class, x, y, password) 
VALUES ("zach", 30, 500, 500, "password");

INSERT INTO players_stats (player_id, stat, value, maxvalue, basemaxvalue)
VALUES (1, "health", 100, 100, 100);

INSERT INTO players_stats (player_id, stat, value, maxvalue, basemaxvalue)
VALUES (1, "speed", 25, 25, 25);

INSERT INTO pokemon (name, x, y, species, level, experience, ability, friendship, gender, nature, height, weight, originaltrainer, shiny, item)
VALUES ("abra", 550, 550, 63, 10, 200, 1, 85, 1, 1, 52.5, 40.1, 1, 0, 0);

INSERT INTO pokemon_stats (pokemon_id, stat, ev, iv, value)
VALUES (1, "speed", 20, 16, 30);

INSERT INTO pokemon_stats (pokemon_id, stat, ev, iv, value)
VALUES (1, "health", 200, 200, 200);

INSERT INTO pokemon_spells(pokemon_id, keybinding, spell_id)
VALUES (1, "q", 94);

INSERT INTO players_pokemon (player_id, box, pokemon_id)
VALUES (1, 0, 1);

INSERT INTO players_spells (player_id, spell_base_id, name, keybinding)
VALUES (1, 1001, "abra", "q");

INSERT INTO players_spells_targetdata (player_id, spell_base_id, keybinding, key, value)
VALUES (1, 1001, "q", "PokemonId", "1");

-- Players: toughguy
INSERT INTO players (name, class, x, y, password) 
VALUES ("toughguy", 26, 650, 650, "toughguy");

INSERT INTO players_stats (player_id, stat, value, maxvalue, basemaxvalue)
VALUES (2, "health", 100, 100, 100);

INSERT INTO players_stats (player_id, stat, value, maxvalue, basemaxvalue)
VALUES (2, "speed", 25, 25, 25);

INSERT INTO pokemon (name, x, y, species, level, experience, ability, friendship, gender, nature, height, weight, originaltrainer, shiny, item)
VALUES ("cakeeater", 700, 700, 16, 10, 200, 1, 85, 2, 1, 32.5, 20.1, 2, 0, 0);

INSERT INTO pokemon_stats (pokemon_id, stat, ev, iv, value)
VALUES (2, "speed", 35, 35, 35);

INSERT INTO pokemon_stats (pokemon_id, stat, ev, iv, value)
VALUES (2, "health", 200, 200, 200);

INSERT INTO players_pokemon (player_id, box, pokemon_id)
VALUES (2, 0, 2);

INSERT INTO pokemon_spells(pokemon_id, keybinding, spell_id)
VALUES (2, "q", 94);

INSERT INTO players_spells (player_id, spell_base_id, name, keybinding)
VALUES (2, 1001, "cakeeater", "q");

INSERT INTO players_spells_targetdata (player_id, spell_base_id, keybinding, key, value)
VALUES (2, 1001, "q", "PokemonId", "2");
