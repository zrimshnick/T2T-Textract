import { Router } from "express";

const router = Router();

router.route("/").get(async (req, res) => {
  res.render("tool", {
    test: "tool",
  });
});

export default router;
