import express from "express";

import search from "./modules/search";
import playlist from "./modules/playlist";

function API(app: express.Express): void {
  const router = express.Router();
  app.use("/api", router);

  router.use("/search", search);
  router.use("/playlist", playlist);
}

export default API;
