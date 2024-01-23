const {Dog} = require("../db");
const get_allDogsBD = require("../utils/get_allDogsDB");
const jSON_allDogs = require("../routes/routesDogs/services/loadDataBase/allDogsApi.json")

const verifyDogRecords = async (req, res, next) => {
    try {
        //verifico si hay algo en la BD
        let records = await get_allDogsBD()
        console.log("estoy en el midleware", records[0]);

   
        if (!records.length && jSON_allDogs.length) {
          console.log("records", records , "Json ",jSON_allDogs[0]);
            //SI NO HAY NADA, CARGO EL .JSON
            console.log("creando a partir del JSON");
            await Dog.bulkCreate(jSON_allDogs);

        } else  {
          //SI NO ESTA EL .JSON CREARLO
            
        }
         console.log("no entre en el if");


      next();
    } catch (error) {
      // Manejo de errores
      console.error('Error en el middleware verifyDogRecords:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = verifyDogRecords;