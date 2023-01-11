import express from "express";

import search from "./modules/search";
import playlist from "./modules/playlist";
import login from "./modules/login";


function API(app: express.Express): void {
  const router = express.Router();
  app.use("/api", router);
  app.use("/login", login);

  router.use("/search", search);
  router.use("/playlist", playlist);
}

export default API;
