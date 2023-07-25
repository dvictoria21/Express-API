import Player from "../models/Player.js";

export const getPlayers = async (req, res) => {
  try {
    let players = await Player.find();
    res.json(players);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getPlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const player = await Player.findById(id);

    if (player) {
      return res.json(player);
    }

    res.status(404).json({ message: "Player not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createPlayer = async (req, res) => {
  const player = new Player(req.body);
  await player.save();
  res.status(201).json(player);
};

export const updatePlayer = async (req, res) => {
  const { id } = req.params;
  const player = await Player.findByIdAndUpdate(id, req.body);
  res.status(201).json(player);
};

export const deletePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Player.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Player Deleted!");
    }

    throw new Error("Player not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};