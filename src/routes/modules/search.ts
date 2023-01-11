// grande chipa

import express from "express";
import SearchService from "../../services/search.service";
// import Boom from "@hapi/boom"; falta implementar 

const router = express.Router();
const service = new SearchService();

router.post("/name", async (req, res) => {
    try {
        const { data } = req.body;
        console.log(req.body);
        const songs = await service.searchByName(data);
        console.log(data);

        res.status(200).json({ data: songs });
    } catch (error) {
        console.error(`[SEARCHING ERROR]: ${error}`);
        res.status(404);
    }
});

router.post("/id", async (req, res) => {
    try {
        const { data } = req.body;
        const song = await service.searchById(data);

        res.status(200).json({ data: song });
    } catch (error) {
        console.error(`[SEARCHING ERROR]: ${error}`);
        res.status(404).json(null);
    }
});

export default router;