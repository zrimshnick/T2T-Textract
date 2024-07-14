import express from "express";
import session from "express-session";
import serverless from "serverless-http";
const app = express();
import configRoutes from "./routes/index.js";
import exphbs from "express-handlebars";

app.use("/public", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(rewriteUnsupportedBrowserMethods);

const hbs = exphbs.create({
  defaultLayout: "main",
  helpers: {
    eq: function (a, b) {
      return a === b;
    },
    addOne: function (index) {
      return index + 1;
    },
  },
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Middleware to redirect from / to /login
app.use((req, res, next) => {
  if (req.path === "/") {
    return res.redirect("/login");
  }
  next();
});

configRoutes(app);

/* app.listen(3000, () => {
  console.log("We've got a server!");
  console.log("Your routes will be running on http://localhost:3000");
}); */

module.exports.handler = serverless(app);
