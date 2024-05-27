const DataGameSchema = require("../models/dataGame")


//Funcion para añadir datos de partida
exports.addPlay = async (req, res) => {                 
    const {Ganancia, Mesa, Dealer,Fecha } = req.body    //Cuerpo solicitud enviada por cliente

    const play = DataGameSchema({                       //Asigna valores del cliente a DataGame 
        Ganancia,
        Mesa,
        Dealer,
        Fecha
    })

    try{
        //Validar
        if(!Ganancia || !Mesa || !Dealer || !Fecha){
            return res.status(400).json({Message: 'Completa todos los campos'})
        }
        await play.save()                                           //Guarda los datos en db hasta que se complete(await)
        res.status(200).json({Message: 'Partida guardada' })
    }catch (error){
        res.status(500).json({Message: 'Error en servidor' })
    }
    console.log(play)
}


//Función para obtener datos de partida
exports.getPlay = async (req, res) => {                 
    try {
        const play = await DataGameSchema.find().sort({createdAt: -1})      //Obtiene la última partida ordenada por fecha de creación, obtiene el más reciente
        res.status(200).json(play)                      //Devuelve en Json datos de play
    } catch (error) {
        res.status(500).json({message: 'Error en servidor' })
    }

}


//Función para eliminar datos de partida
exports.deletePlay = async (req, res) => {                 
    
    const {id} = req.params;                                            //Extrae el id de la solicitud
    DataGameSchema.findByIdAndDelete(id)                                //Busca y elimina por id en el modelo
        .then((play) => {
            res.status(200).json({message: 'Partida eliminada'})                      //Devuelve en Json datos de play
        })
        .catch((err) => {
            res.status(500).json({message: 'Error en servidor' })
        })

}