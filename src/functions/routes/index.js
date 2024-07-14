import loginRoutes from "./login.js";
import toolRoutes from "./tool.js";

const constructorMethod = (app) => {
  app.use("/", loginRoutes);
  app.use("/textractor", toolRoutes);

  app.use("*", (req, res) => {
    const errorMessage = `404 Error: Route not found`;
    res.status(404).render("error", { test: errorMessage });
  });
};

export default constructorMethod;
