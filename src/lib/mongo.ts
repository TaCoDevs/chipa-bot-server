/**
 * Conexión a la base de datos MongoDB
 */

import { MongoClient } from "mongodb";

import { config } from "../config";
// Constantes de la base de datos
const {DBUSER, DBPASSWORD, DBNAME} = config;

class mongodb{
    // Variables para conexión
    private url ="mongodb+srv://"+DBUSER+":"+DBPASSWORD+"@chipa-bot.y0beve3.mongodb.net/"+DBNAME+"?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
    private client = new MongoClient(this.url);
    // Función que conecta y verifica si se conectó correctamente
    async mongodb(){
        try {
            await this.client.connect();
        
            console.log("Connected correctly to server");
          } catch (err) {
            console.log(err);
          } 
    }
    constructor(){
        this.mongodb().catch(console.dir);
    }

    // Función que busca la playlist del usuario
    async searchPlaylist(idUser:number){
        try{
            // Conexión a la base de datos de usuarios
            const db = this.client.db(DBNAME);
            return await db.collection("users").
                find({userid:idUser},
                {projection:{_id:0,userid:0,name:0}}).next();
        }catch(err){
            console.log(err);
        }
    }
}

export default mongodb;