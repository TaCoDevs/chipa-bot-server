/*
 
crear rutas para interactuar con la base de datos

*/

import express from "express";
import PlaylistService from "../../services/playlist.service";

const router = express.Router();
const service = new PlaylistService();

// get playlist de usuario
router.get("/test", async (req, res) => {
    try {
        // Array de canciones
        const songs = await service.getUserPlaylist(12);    //El 12 es el id del usuario xd

        res.status(200).json(songs);
    } catch (error) {
        console.error(`[SEARCHING ERROR]: ${error}`);
        res.status(404).json(null);
        
    }
});

router.post("/add", (req, res) => {
    //
});

router.delete("/remove/:id", (req, res) => {
    //
});

export default router;
