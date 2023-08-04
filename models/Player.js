import mongoose from "mongoose";

const Schema = mongoose.Schema;

const playerSchema = new Schema(
  {
    image: { type: String },
    name: { type: String },
    team: { type: String },
    draftClass: { type: String },
    position: { type: String },
    gp: { type: Number },
    min: { type: Number },
    fgp: { type: Number },
    tpp: { type: Number },
    ftp: { type: Number },
    reb: { type: Number },
    ast: { type: Number },
    blk: { type: Number },
    stl: { type: Number },
    pf: { type: Number },
    to: { type: Number },
    ppg: { type: Number }
  }
);

const Player = mongoose.model("Player", playerSchema);

export default Player;
