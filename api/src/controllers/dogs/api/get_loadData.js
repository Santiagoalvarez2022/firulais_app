const {Dog} = require("../../../db")
const allDogsApi = require("../../../utils/loadDataBase/allDogsApi.json");


const get_loadData = async () => {
    //convertir json a js
    if (!allDogsApi) throw Error("Json data not found")
    return await Dog.bulkCreate(allDogsApi)
}




module.exports = get_loadData;