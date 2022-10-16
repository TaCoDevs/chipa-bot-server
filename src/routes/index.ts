import express from "express";
import search from "./modules/search";

function API(app: express.Express): void {
  const router = express.Router();
  app.use("/api", router);

  router.use("/search", search);
}

export default API;
