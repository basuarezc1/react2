const mongoose = require('mongoose');                           //Lib para DB

const db = async () => {                                        //Funcion db async
    try{
        mongoose.set('strictQuery',false)                       //permite consultas sin especificar todos los campos en su esquema
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB Connected')
    } catch (error){
        console.log('DB Connection error')
    }
}

module.exports = {db}                                           //Exporta db para usarlo
