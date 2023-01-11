/*

conectar a la base de datos

iniciar base de datos en libs/base de datos

-agregar una cancion a la playlist de un usuario

-remover cancion en la playlist de un usuario

-obtener la playlist de un usuario

*/

import mongolo from "../lib/mongo";
const mongo =new mongolo();


class PlaylistService {
  async addToPlaylist(idUser:number, idSong:string) {
    await mongo.addPlaylist(idUser, idSong);
  }

  async removeToPlaylist(idUser:number, idSong:string) {
    await mongo.removeFromPlaylist(idUser, idSong);
  }

  // Funcion para traerse la playlist del usuario
  async getUserPlaylist(idUser:number) {
    const playlist = await mongo.searchPlaylist(idUser);
    return await playlist?.playlist;
  }
}

export default PlaylistService;
