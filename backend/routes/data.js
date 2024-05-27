const { getPlay, deletePlay } = require('../controllers/play')                  //Importa funciones desde controllers
const router = require('express').Router()                          //Nueva pág

router.get('/data',getPlay)                                           //Obtener 
      .delete('/data/:id',deletePlay)                                //Eliminar por id

module.exports = router