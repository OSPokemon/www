INSERT INTO players (name, class, health, maxhealth, x, y, password) 
VALUES ("zach", 1, 100, 100, 500, 500, "password");

INSERT INTO pokemon (name, x, y, species, level, experience, ability, friendship, gender, nature, height, weight, originaltrainer, shiny, item)
VALUES ("abra", 550, 550, 63, 10, 200, 1, 85, 1, 1, 52.5, 40.1, 1, 0, 0);

INSERT INTO pokemon_stats (pokemon_id, stat, ev, iv, value)
VALUES (1, "speed", 20, 16, 30);

INSERT INTO pokemon_stats (pokemon_id, stat, ev, iv, value)
VALUES (1, "health", 18, 19, 670);

INSERT INTO players_pokemon (player_id, box, pokemon_id)
VALUES (1, 0, 1);

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

INSERT INTO spells (name, casttime, cooldown, movecast, manacost, range, targettype)
VALUES ("Psychic", 1500000000, 8000000000, 0, 80, 30, 2);

INSERT INTO pokemon_spells(pokemon_id, keybinding, spell_id)
VALUES (1, "q", 1);
