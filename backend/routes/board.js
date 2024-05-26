const { addPlay } = require('../controllers/play')                  //Importa función desde controllers
const router = require('express').Router()                          //Nueva pág

router.post('/board', addPlay)                                      //Enviar datos de partida


module.exports = router