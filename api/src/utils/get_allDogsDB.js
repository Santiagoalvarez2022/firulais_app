const {Dog,Temperament} = require('../db');
//los controllers son funciones que realizan la logixa de las peticiones

const get_allDogsBD = async () =>{

  //TRAE DATOS DEL MODELO 
  return await Dog.findAll({
    include : {
      model :Temperament,
      attributes : ['name'],
      trougth :{
        attributes : ["dog_temperament"]
      } 
    }
  })


}

module.exports =get_allDogsBD;