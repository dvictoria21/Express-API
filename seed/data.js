import db from "../db/connection.js";
import Player from "../models/Player.js";
import players from "./players.json" assert { type: "json" };

const insertData = async () => {

  await db.dropDatabase();

  await Player.create(players);

  console.log("Players Created");

  await db.close();
};

insertData();