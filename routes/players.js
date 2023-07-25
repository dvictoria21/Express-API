import { Router } from "express";
import * as controllers from "../controllers/players.js";

const router = Router();

router.get("/players", controllers.getPlayers);
router.get("/players/:id", controllers.getPlayer);
router.post("/players", controllers.createPlayer);
router.put("/players/:id", controllers.updatePlayer);
router.delete("/players/:id", controllers.deletePlayer);

export default router;
