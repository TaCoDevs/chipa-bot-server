import express from "express";
import SearchService from "../../services/search.service";

const router = express.Router();
const service = new SearchService();

router.post("/name", async (req, res) => {
    const { name } = req.body;

    try {
        const data = await service.searchByName(name);
        res.status(200).json({ songs: data });
    } catch (error) {
        console.error(error);
        res.status(404).json(null);
    }
});

router.post("/id", (req, res) => {
    //
});

export default router;