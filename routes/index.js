import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => {
  res.send("This is the api root");
});

export default router;
