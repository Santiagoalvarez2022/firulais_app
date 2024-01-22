const {get_data_api,get_loadData} = require("../../controllers/index")


const handler_loadDogs = async (req, res) =>{
    try {
        const result = await get_loadData();
        console.log("=>",result);
        //envio los datos 
        return res.status(200).json(result);
            
    } catch (error) {
        res.status(400).json({error :error.message})
    }
}

const handler_getDogsApi = async (req, res) =>{
    try {
        const result = await get_data_api();
        //envio los datos 
        return res.status(200).json(result);
            
    } catch (error) {
        res.status(400).json({error :error.message})
    }
}
 
 


module.exports = {
    handler_loadDogs,
    handler_getDogsApi
};