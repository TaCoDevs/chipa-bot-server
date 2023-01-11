/*
 
    Rutas para interactuar con la base de datos

*/

import express from "express";
import PlaylistService from "../../services/playlist.service";

const router = express.Router();
const service = new PlaylistService();

// Traer la playlist de un usuario específico
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

// Añadir una cancion a la playlist de un usuario específico
router.post("/add", async (req, res) => {
    try {
        const { data } = req.body;
        // Ejecutar funcion de añadir con parametros del id del usuario y la cancion solicitada
        await service.addToPlaylist(12, "song3");    

        res.status(200).json("jala todo bn");
    } catch (error) {
        console.error(`[SEARCHING ERROR]: ${error}`);
        res.status(404).json(null);
        
    }
});

// Remover una cancion de la playlist de un usuario específico
router.delete("/remove/:id", async (req, res) => {
    try {
        const { data } = req.body;
        // Ejecutar funcion de añadir con parametros del id del usuario y la cancion solicitada
        await service.removeToPlaylist(12, "song1");    

        res.status(200).json("jala todo bn");
    } catch (error) {
        console.error(`[SEARCHING ERROR]: ${error}`);
        res.status(404).json(null);
        
    }
});

export default router;
