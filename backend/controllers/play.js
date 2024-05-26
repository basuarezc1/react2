const DataGameSchema = require("../models/dataGame")

exports.addPlay = async (req, res) => {                 //Funcion para añadir datos de partida
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

    }
    console.log(play)
}