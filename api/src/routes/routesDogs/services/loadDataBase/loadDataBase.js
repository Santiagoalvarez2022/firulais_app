const createBreeds  = require("./createRegisterBreeds");
const getImagesForBreed = require("./getImagesForBreed");
const organizedApiList = require("./organizeApiList");


const loadDataBase = async () =>{
    const dogsList = await organizedApiList();//obtengo todas las razas con la informacion ordenda y filtrasda
    const breeds = await getImagesForBreed(dogsList);//agrego a cada raza una foto representativa
    return breeds;
   
}


module.exports=loadDataBase;
