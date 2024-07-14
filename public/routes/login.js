import { Router } from "express";

const router = Router();

router.route("/login").get(async (req, res) => {
  res.render("login", {
    test: "login",
  });
});

export default router;
