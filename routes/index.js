import { Router } from "express";
import playersRoutes from "./players.js"

const router = Router();

router.route("/").get((req, res) => {
  res.send("Go Nets!");
});

router.use("/players", playersRoutes);

export default router;
