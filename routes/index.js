import { Router } from "express";
import playersRoutes from "./players.js"

const router = Router();

router.route("/").get((req, res) => {
  res.send("This is the api root");
});

router.use("/players", playersRoutes);

export default router;
