const {get_allForName,get_all} = require("../../controllers/index")

const handler_getDogs = async (req, res) =>{
        console.log("=============> estoy en el controller");
    const {name} = req.query
    try {
            if(name){
                    //deve traer una lista de todos los perros que coincidan con ese nombre
                    const result = await get_allForName(name)
                    return res.status(200).json(result)    
            }
            else{
                //debo 
                    
                //traigo los dato de la db
                const result = await get_all()
                //envio los datos 
                return res.status(200).json(result)
    
            }
            
    } catch (error) {
            res.status(400).json({error :error.message})
    }
}

module.exports = handler_getDogs