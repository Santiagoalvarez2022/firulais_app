const  axios  = require("axios");
require("dotenv").config
const{API_KEY} =process.env 
const organizedApiList = require("../../../utils/organizeApiList");


//MODULARIZO EN UNA FUNCION LA PETICION A LA API y FILTRADO DE LAS PROPIEDADES NECESARIAS, PARA NO REPETIR CODIGO EN LOS CONTROLLERS

const get_data_api = async () => {
  const {data} = await  axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
  const result = organizedApiList(data);
  return result;
}



    
module.exports = get_data_api;